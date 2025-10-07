import { cookies } from "next/headers";
export async function GET() {
  const cookiesStore = cookies();
  const token = (await cookiesStore).get("accessToken")?.value;
  if (!token) {
    return Response.json({ valid: false }, { status: 401 });
  } 
  return Response.json({ valid: true });
}
