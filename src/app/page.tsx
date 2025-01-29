"use server";

// import { auth } from "@/auth";
// import { SignInButton } from "@/components/sign-in-button";
// import { SignOutButton } from "@/components/sign-out-button";
// import Link from "next/link";

export default async function Home() {
  // const session = await auth();

  // if (session?.user) {
  //   return (
  //     <div>
  //       <Link href="/protected">User Info</Link>
  //       <SignOutButton></SignOutButton>
  //     </div>
  //   );
  // }

  return (
    <div>
      <p>You are not signed in</p>
      {/* <SignInButton></SignInButton> */}
    </div>
  );
}
