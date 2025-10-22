import { NextResponse } from "next/server";
import { hashPassword, generateToken } from "@/lib/auth";
import { z } from "zod";
import prisma from "@/lib/prisma";

// Signup schema
const signupSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  role: z.enum(["CREATOR", "VIEWER"]),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsedBody = signupSchema.safeParse(body);
    
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsedBody.error.errors },
        { status: 400 }
      );
    }
    
    const { username, email, password, role } = parsedBody.data;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { 
        OR: [
          { email },
          { username }
        ]
      },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or username already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
      },
    });

    // Generate token
    const token = generateToken(newUser, newUser.role);
    
    // Return user and token (exclude password)
    return NextResponse.json(
      {
        user: { 
          id: newUser.id, 
          username: newUser.username, 
          email: newUser.email, 
          role: newUser.role 
        },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
