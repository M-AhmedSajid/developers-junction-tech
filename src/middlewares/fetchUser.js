require("dotenv").config();
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// Middleware to fetch the user from the JWT token
export async function fetchUser(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Please authenticate using a valid token" }, { status: 401 });
  }

  try {
    // Verify the token using the JWT_SECRET
    const data = jwt.verify(token, `${process.env.JWT_SECRET}`);

    // Attach the user data to the request object (or return it as needed)
    request.user = {
      id: data.id,
      fullName: data.fullName,
      email: data.email
    };    
    
    return NextResponse.next(); // Continue to the next middleware or handler
  } catch (error) {
    return NextResponse.json({ error: "Please authenticate using a valid token" }, { status: 401 });
  }
}

export default fetchUser;