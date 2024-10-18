import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        return NextResponse.json({
            message: "working"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}
