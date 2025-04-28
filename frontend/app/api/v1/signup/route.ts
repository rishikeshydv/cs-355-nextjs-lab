import { NextResponse } from "next/server";
import { SaveCredentials } from "@/queries/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name,email, password } = body;
    // save the credentials to the DB
    const res = await SaveCredentials({ name,email, password: password });
    if (res==="User Created"){
        return NextResponse.json({ message: "success" });
    } else {
      return NextResponse.json({ message: res });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "error" });
  }
}