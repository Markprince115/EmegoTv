// sign up route
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.js";
import { hashPassword, generateToken } from "@/lib/auth.js";
import { z } from "zod";
import {prisma} from "@/lib/prisma.js";


// signup schema for username, email, role(Viewer or creator) and password
const signupSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(100),
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
    const { username, email, password } = parsedBody.data;

    // check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    // create user in db also add role as Viewer by default
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: "VIEWER", // default role
      },
    });
    // generate token
    const token = generateToken(newUser, newUser.role);
    // return user and token
    return NextResponse.json(
      {
        user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
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