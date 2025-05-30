import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import { connect } from "@/helpers/db"; // Your MySQL connection helper
import { fetchUser } from "@/middlewares/fetchUser"; // Your JWT middleware

export async function PUT(request, { params }) {
  const id = params.id; // Extract ID from URL params

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
    const coverImg = formData.get("coverImg"); // Cover image file (if new image is uploaded)
    const altCoverImg = formData.get("altCoverImg");
    const category = formData.get("category");

    if (!title || !summary || !content || !altCoverImg || !category) {
      return NextResponse.json({ error: "All fields except coverImg are required." }, { status: 400 });
    }

    // Get the current blog details from the database
    const connection = await connect(); // Connect to MySQL
    const [currentBlog] = await connection.execute('SELECT coverImg FROM blogs WHERE id = ?', [id]);

    if (!currentBlog.length) {
      await connection.end();
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    // Handle the image file upload if a new image is provided
    let coverImgPath = currentBlog[0].coverImg; // Keep the old image path if no new image is uploaded

    if (coverImg && coverImg instanceof File) {
      const imageBuffer = Buffer.from(await coverImg.arrayBuffer());
      coverImgPath = `/uploads/${coverImg.name}`;
      const imagePath = path.join(process.cwd(), "public/uploads", coverImg.name);
      await writeFile(imagePath, imageBuffer);

      // Optionally delete the old image file
      const oldImagePath = path.join(process.cwd(), "public/uploads", path.basename(currentBlog[0].coverImg));
      try {
        await unlink(oldImagePath);
      } catch (error) {
        console.error("Error deleting old image:", error.message);
      }
    }

    // Update the blog data in MySQL
    const query = `
      UPDATE blogs
      SET title = ?, summary = ?, content = ?, coverImg = ?, altCoverImg = ?, category = ?
      WHERE id = ?
    `;
    const values = [title, summary, content, coverImgPath, altCoverImg, category, id];

    await connection.execute(query, values);
    await connection.end();

    // Return a successful response
    return NextResponse.json({
      success: true,
      updatedBlog: {
        id,
        title,
        summary,
        content,
        coverImg: coverImgPath, // Include the updated image URL
        altCoverImg,
        category,
      },
    });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}