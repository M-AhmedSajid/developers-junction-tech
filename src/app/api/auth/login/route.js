require('dotenv').config();
import { connect } from "@/helpers/db"; // Your MySQL connection file
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Connect to MySQL
    const connection = await connect();

    // Check if user already exists in MySQL
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) {
      return NextResponse.json(
        { error: "The account you are trying to log into does not exist.", success: false },
        { status: 400 }
      );
    }

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { error: "The email or password is incorrect.", success: "falsee" },
        { status: 400 }
      );
    }

    // Create token data
    const tokenData = {
      id: user.id, // Assuming the column name is 'id'
      fullName: user.fullName,
      email: user.email,
    };

    // Create token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET);

    // Create response and set the token as a cookie
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}