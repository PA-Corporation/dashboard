import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log("🚀 ~ Home ~ user:", user);

  return (
    <main className="page">
      <h1>Welcome to the Dashboard</h1>
      <h1>Hello {user?.firstName}</h1>
    </main>
  );
}
