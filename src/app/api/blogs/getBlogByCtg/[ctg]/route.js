import { NextResponse } from "next/server";
import { connect } from "@/helpers/db"; // Import your MySQL connection helper

// Handle GET request to fetch blogs by category
export async function GET(request, {params}) {
  try {
    const ctg = params.ctg;

    // Parse query parameters for pagination
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit')) || 15;
    const offset = parseInt(url.searchParams.get('offset')) || 0;

    // Prepare the SQL query
    const query = `
      SELECT * FROM blogs
      WHERE category LIKE ?
      ORDER BY createdAt DESC
      LIMIT ? OFFSET ?
    `;

    // Connect to the database
    const connection = await connect();
    const [results] = await connection.execute(query, [
      `%${ctg}%`,
      limit,
      offset,
    ]);
    await connection.end();

    // Return the results
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching blogs by category:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}