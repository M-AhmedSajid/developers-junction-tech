import { NextResponse } from "next/server";
import { connect } from "@/helpers/db"; // Import your MySQL connection helper
import { fetchUser } from "@/middlewares/fetchUser"; // Your JWT middleware

// Handle DELETE request
export async function DELETE(request, {params}) {
  // Authenticate the user
  const userResponse = await fetchUser(request);
  if (userResponse.status === 401) {
    return userResponse; // Return if the user is not authenticated
  }

  try {
    const id = params.id;

    // Query to delete the blog by ID
    const query = "DELETE FROM blogs WHERE id = ?";
    const connection = await connect();
    const [result] = await connection.execute(query, [id]);
    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Blog Not Found" }, { status: 404 });
    }

    // Return a successful response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}