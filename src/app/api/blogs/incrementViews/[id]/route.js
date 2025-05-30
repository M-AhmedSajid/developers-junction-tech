import { NextResponse } from "next/server";
import { connect } from "@/helpers/db"; // Import your MySQL connection helper

// Handle PUT request to increment views
export async function PUT(request, {params}) {
  try {
    const id = params.id;

    // Query to increment the views of the blog by ID
    const query = "UPDATE blogs SET views = views + 1 WHERE id = ?";
    const connection = await connect();
    const [result] = await connection.execute(query, [id]);
    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Blog Not Found" }, { status: 404 });
    }

    // Return a successful response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing views:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
