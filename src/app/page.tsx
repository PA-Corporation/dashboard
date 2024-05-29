import Loading from "@/components/loading/layout";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <SignedIn>
        <main className="page">
          <h1>Welcome to the Dashboard</h1>
        </main>
      </SignedIn>
      <SignedOut>
        <Loading />
      </SignedOut>
    </>
  );
}
