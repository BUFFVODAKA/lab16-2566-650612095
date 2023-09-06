import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Poottipong kunang",
    studentId: "650612095",
  });
};
