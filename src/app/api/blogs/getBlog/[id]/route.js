import { NextResponse } from "next/server";
import { connect } from "@/helpers/db"; // Import your MySQL connection helper
import { fetchUser } from "@/middlewares/fetchUser"; // Your JWT middleware

// Handle GET request
export async function GET(request, {params}) {
  try {
    const id = params.id;

    // Query to get blog by ID
    const query = "SELECT * FROM blogs WHERE id = ?";
    const connection = await connect();
    const [results] = await connection.execute(query, [id]);
    await connection.end();

    if (results.length === 0) {
      return NextResponse.json({ error: "Blog Not Found" }, { status: 404 });
    }

    // Return the blog data
    return NextResponse.json(results[0]);
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}