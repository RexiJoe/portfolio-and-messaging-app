import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebaseAdmin";
import { serialize } from "cookie";



export async function handler(req: NextRequest){

    const body = await req.json()
    const token = body?.token

    if(req.method === "POST" && token){

        const decodedToken = await auth.verifyIdToken(token)
        const serializedCookie = serialize("authToken", JSON.stringify(decodedToken),{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/"
        })

        if(decodedToken){
            return new NextResponse(
                JSON.stringify({uid: decodedToken.uid, email: decodedToken.email }),
                {
                    status: 200,
                    headers: {"Set-Cookie": serializedCookie}
                }
            )
        }

    }

    if(!token){
        const serializedCookie = serialize("authToken", "",{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/"
        })
        console.log("no hay token")
        return new NextResponse(
            JSON.stringify({uid: "", email: ""}),
            {
                status: 200,
                headers: {"Set-Cookie": serializedCookie}
            }
        )
    }
    

}

export { handler as POST, handler as GET }