import { NextResponse } from "next/server";
import { connect } from "@/helpers/db";

export async function GET(request) {
  try {
    // Parse query parameters for limit and offset
    const searchParams= request.nextUrl.searchParams;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit"), 15) : null;
    const offset = searchParams.get("offset") ? parseInt(searchParams.get("offset"), 0) : null;

    // Base query to fetch blogs, ordered by creation date
    let query = "SELECT * FROM blogs ORDER BY createdAt DESC";
    const queryParams = [];

    // Apply LIMIT if provided
    if (limit !== null) {
      query += " LIMIT ?";
      queryParams.push(limit);
    }

    // Apply OFFSET if provided
    if (offset !== null) {
      query += " OFFSET ?";
      queryParams.push(offset);
    }

    // Connect to MySQL database and execute the query
    const connection = await connect();
    const [results] = await connection.execute(query, queryParams);
    await connection.end();

    // Return the results as a JSON response
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
