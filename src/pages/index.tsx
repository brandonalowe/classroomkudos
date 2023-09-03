import { api } from "@/utils/api";

// import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// import { httpBatchLink } from "@trpc/client";

export default function Home() {

  return (
    <>
      <Head>
        <title>Classroom Kudos</title>
        <link rel="png" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="flex-col md:flex ">
          <div className="border-b border-violet-300">
            <div className="flex h-16 items-center px-4">
              <div className="flex grow-0 justify-start">
                <Link href="/">
                  <Image
                    src="/angry-goose.png"
                    width={36}
                    height={36}
                    alt="Angry goose"
                  />
                </Link>
              </div>
              <div className="flex grow-[1] justify-center px-4 text-2xl">
                <Link href="/demo">
                  <div className="rounded-md px-5 py-3 font-semibold tracking-tight hover:bg-white/20">
                    Demo
                  </div>
                </Link>
                <Link href="/class">
                  <div className="rounded-md px-5 py-3 font-semibold tracking-tight hover:bg-white/20">
                    Class
                  </div>
                </Link>
                <Link href="/about">
                  <div className="rounded-md px-5 py-3 font-semibold tracking-tight hover:bg-white/20">
                    About
                  </div>
                </Link>
                <Link href="/help">
                  <div className="rounded-md px-5 py-3 font-semibold tracking-tight hover:bg-white/20">
                    Help
                  </div>
                </Link>
              </div>
              {/* <div className="flex grow-[1] justify-end">
                <AuthShowcase />
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="">Work in progress!</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <p className="text-center text-sm text-violet-200">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-6 py-3 font-semibold no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
