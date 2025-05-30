require("dotenv").config();
import mysql from "mysql2/promise"; // Using promise-based mysql2 for async/await support

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};

export async function connect() {
  try {
    const connection = await mysql.createConnection(mysqlConfig);

    console.log("Connected to MySQL Successfully");

    // You can use connection to run queries, etc.
    return connection;

  } catch (err) {
    console.log("MySQL Connection Error", err);
    process.exit(1); // Exit the process with a failure code
  }
}