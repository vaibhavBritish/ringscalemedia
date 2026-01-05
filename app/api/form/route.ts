


import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName,companyName, email, phone, message } = body;


    if (!firstName || !lastName || !companyName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required" },
        { status: 400 }
      );
    }

  
    const contact = await prisma.contactUs.create({
      data: {
        firstName,
        lastName,
        companyName,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
