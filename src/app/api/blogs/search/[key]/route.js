import { NextResponse } from "next/server";
import { connect } from "@/helpers/db"; // Import your MySQL connection helper

// Handle GET request for search
export async function GET(request, {params}) {
  try {
    const key = params.key;

    // Prepare the search query with wildcards
    const searchQuery = `%${key}%`;
    const query = `
      SELECT * FROM blogs 
      WHERE title LIKE ? OR summary LIKE ? OR content LIKE ?
    `;

    // Connect to the database
    const connection = await connect();
    const [results] = await connection.execute(query, [
      searchQuery,
      searchQuery,
      searchQuery,
    ]);
    await connection.end();

    // Return the search results
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error performing search:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}