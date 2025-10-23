import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

// Helper function to validate token
const validateToken = (token) => {
    if (!token) {
        return { error: "No token provided", status: 401 };
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return { error: "Invalid token", status: 401 };
    }

    return { decoded };
};

export async function GET(request) {
    try {
        // Get and validate token
        const token = request.headers.get('Authorization')?.split(' ')[1];
        const validation = validateToken(token);
        
        if (validation.error) {
            return NextResponse.json({ error: validation.error }, { status: validation.status });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: validation.decoded.userId,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });

    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ 
            error: "Internal server error",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        // Get and validate token
        const token = request.headers.get('Authorization')?.split(' ')[1];
        const validation = validateToken(token);
        
        if (validation.error) {
            return NextResponse.json({ error: validation.error }, { status: validation.status });
        }

        const body = await request.json();
        const { username } = body;

        if (!username || username.trim().length < 3) {
            return NextResponse.json({ 
                error: "Username must be at least 3 characters long" 
            }, { status: 400 });
        }

        // Check if username is already taken
        const existingUser = await prisma.user.findUnique({
            where: {
                username: username,
                NOT: {
                    id: validation.decoded.userId
                }
            }
        });

        if (existingUser) {
            return NextResponse.json({ 
                error: "Username is already taken" 
            }, { status: 409 });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: validation.decoded.userId,
            },
            data: {
                username: username.trim(),
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                updatedAt: true,
            },
        });

        return NextResponse.json({ 
            message: "Profile updated successfully",
            user: updatedUser 
        });

    } catch (error) {
        console.error("Error updating user:", error);
        if (error.code === 'P2002') {
            return NextResponse.json({ 
                error: "Username is already taken" 
            }, { status: 409 });
        }
        return NextResponse.json({ 
            error: "Internal server error",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}