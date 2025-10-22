// logout user session api route
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Clear the token cookie by setting it to an empty value and expiring it immediately
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    name: 'token',
    value: '',
    path: '/',
  });
  return response;
};
