import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

// Handle the POST request
export async function POST(req) {
  try {
    // Parse the form data
    const data = await req.formData();
    const image = data.get("files[0]");

    // Check if a image was uploaded
    if (!image) {
      
      return NextResponse.json({ message: "No image uploaded", success: false });
    }

    // Convert image to a buffer
    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Define the image path to save the uploaded image
    const uploadPath = path.join(process.cwd(), "public/uploads", image.name);

    // Save the image to the specified path
    await writeFile(uploadPath, buffer);

    // Return a success response with the image URL
    return NextResponse.json({
      success: true,
      image: {
        url: `/uploads/${image.name}`,
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
  }
}