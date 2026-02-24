import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();
  return (
    <div>
      <h1>Dashboard</h1>
      {session ? <p>Welcome {session.user?.email}</p> : <p>Not logged in</p>}
    </div>
  );
}