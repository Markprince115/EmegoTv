import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request) {
    try {
        // Get token from Authorization header
        const token = request.headers.get('Authorization')?.split(' ')[1];
        
        if (!token) {
            return NextResponse.json({ error: "No token provided" }, { status: 401 });
        }

        // Verify token
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        // Get token from Authorization header
        const token = request.headers.get('Authorization')?.split(' ')[1];
        
        if (!token) {
            return NextResponse.json({ error: "No token provided" }, { status: 401 });
        }

        // Verify token
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const { username } = await request.json();

        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: decoded.userId,
            },
            data: {
                username,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
            },
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}