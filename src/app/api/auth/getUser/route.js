import { connect } from "@/helpers/db"; // Import the MySQL connection helper
import { fetchUser } from "@/middlewares/fetchUser"; // Import the middleware
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = await fetchUser(request);
    if (response.status === 401) {
      return response;
    }
    // Get the authenticated userId
    const userId = request.user.id;

    // Connect to MySQL
    const connection = await connect();

    // Query the database for the user information
    const [results] = await connection.execute(
      "SELECT id, fullName, email FROM users WHERE id = ?",
      [userId]
    );

    // Check if user exists
    if (results.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json(results[0]);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
