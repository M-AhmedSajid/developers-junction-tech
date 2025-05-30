require("dotenv").config();
import nodemailer from "nodemailer";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export default async function sendEmail({ email, emailType, userId, formData }) {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: currentDate,
      });
    } else if (emailType === "FORGOTPASSWORD") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: currentDate,
      });
    }
    console.log(formData);

    const transporter = nodemailer.createTransport({
      host: "mail.alltasker.co",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "info@alltasker.co",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Email Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
        
                h1 {
                    color: #007BFF;
                    text-align: center;
                }
        
                p {
                    font-size: 16px;
                    color: #333;
                }
        
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                }
        
                .btn:hover {
                    background-color: #0056b3;
                }
        
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${
                  emailType === "VERIFY" ? "Verify Email" : "Forgot Password"
                }</h1>
                <p>${
                  emailType === "VERIFY"
                    ? "Thank you for signing up! To complete your registration, please verify your email address by clicking"
                    : "You recently requested to reset your password. To create a new password, please click"
                } the link below:</p>
        
                <a href="${process.env.DOMAIN}/${
        emailType === "VERIFY" ? "verify-email" : "forgotpassword"
      }?token=${hashedToken}" class="btn">${
        emailType === "VERIFY" ? "Verify Email" : "Reset Password"
      }</a>
        
                <p>If you did not ${
                  emailType === "VERIFY"
                    ? "create an account with us"
                    : "request this password reset"
                }, you can ignore this email.</p>
        
                <p class="footer">Best regards,<br>alltasker.co</p>
            </div>
        </body>
        </html>
        `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}
