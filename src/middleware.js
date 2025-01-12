import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // Check for a "loggedin" cookie (replace with your actual cookie key)
    const loggedin = request.cookies.get('loggedin');

    if (!loggedin) {
        return NextResponse.redirect(
            new URL('/', request.url) // Redirect to home page if not logged in
        );
    }

    return NextResponse.next(); // Continue to the requested page if logged in
}

// Define which paths this middleware should apply to
export const config = {
    matcher: ['/loggedin'], // Adjust path as needed
};
