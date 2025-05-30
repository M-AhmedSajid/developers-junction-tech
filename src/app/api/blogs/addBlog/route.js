import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { connect } from "@/helpers/db"; // Your MySQL connection helper
import { fetchUser } from "@/middlewares/fetchUser"; // Your JWT middleware

export async function POST(request) {
  // Authenticate the user
  const userResponse = await fetchUser(request);
  if (userResponse.status === 401) {
    return userResponse; // Return if the user is not authenticated
  }

  try {
    // Parse form data (multipart/form-data)
    const formData = await request.formData();
    const title = formData.get("title");
    const summary = formData.get("summary");
    const content = formData.get("content");
    const coverImg = formData.get("coverImg"); // Cover image file
    const altCoverImg = formData.get("altCoverImg");
    const category = formData.get("category");

    if (!title || !summary || !content || !coverImg || !altCoverImg || !category) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Handle the image file upload
    const imageBuffer = Buffer.from(await coverImg.arrayBuffer());
    const imagePath = path.join(process.cwd(), "public/uploads", coverImg.name);
    await writeFile(imagePath, imageBuffer);

    // Generate a URL-friendly ID for the blog
    const sanitizedTitle = title.replace(/[^\w\s-]/g, "");
    const urlFriendlyId = sanitizedTitle.replace(/\s+/g, "-").toLowerCase();

    // Insert blog data into MySQL
    const query = `
      INSERT INTO blogs (id, title, summary, content, coverImg, altCoverImg, category, views)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      urlFriendlyId,
      title,
      summary,
      content,
      `/uploads/${coverImg.name}`, // Save the image path to the database
      altCoverImg,
      category,
      0, // views
    ];

    const connection = await connect(); // Connect to MySQL
    await connection.execute(query, values);
    await connection.end();

    // Return a successful response
    return NextResponse.json({
      success: true,
      savedBlog: {
        id: urlFriendlyId,
        title,
        summary,
        content,
        coverImg: `/uploads/${coverImg.name}`, // Include the uploaded image URL
        altCoverImg,
        category,
        views: 0,
      },
    });
  } catch (error) {
    console.error("Error saving blog:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}