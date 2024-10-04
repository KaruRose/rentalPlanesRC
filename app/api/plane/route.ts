import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const data = await req.json();
        console.log(userId);
        
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        // obten todos los registros de plane e imprimelos 
        const planes = await db.plane.findMany()

        console.log(planes)

        const plane = await db.plane.create({
            data: {
                userId,
                ...data,
            },
        });

        return NextResponse.json("Success", { status: 200 })

    } catch (error) {
        console.log("[Plane]", error)
        return NextResponse.json("Internal Error 2", { status: 500 })
    }
}