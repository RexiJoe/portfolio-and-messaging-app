import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie"

export async function middleware(req: NextRequest){
    const cookie = req.headers.get("cookie")
    const parsedCookie = cookie ? parse(cookie) : null
    const authToken = parsedCookie?.authToken
    
    if(!authToken){
        return NextResponse.redirect(new URL("/", req.url))
    }

}

export const config = {
    matcher: [`/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)`]
}