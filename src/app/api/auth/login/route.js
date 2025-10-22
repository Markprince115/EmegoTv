// create api login route to login user with email and password
import { NextResponse } from "next/server";
import { comparePassword, generateToken } from "@/lib/auth.js";
import { z } from "zod";
import prisma from "@/lib/prisma.js";

// login schema for email and password
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsedBody = loginSchema.safeParse(body);
    
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsedBody.error.errors },
        { status: 400 }
      );
    }

    const { email, password } = parsedBody.data;
    
    // find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // generate token
    const token = generateToken(user, user.role);

    // return user and token
    return NextResponse.json(
      {
        user: { 
          id: user.id, 
          username: user.username, 
          email: user.email, 
          role: user.role 
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}