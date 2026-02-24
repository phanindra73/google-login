import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // ⬅️ HARD redirect, no UI
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session.user?.email}</p>
    </div>
  );
}