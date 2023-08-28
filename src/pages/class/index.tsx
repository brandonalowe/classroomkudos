import { signIn, signOut, useSession } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/utils/api";

export default function Class() {
  return (
    <>
      <Head>
        <title>Classroom Kudos</title>
        <link rel="png" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <div className="flex-col md:flex ">
          <div className="border-b border-violet-400">
            <div className="flex h-16 items-center px-4">
              <div className="flex w-1/3">
                <Link href="/">
                  <Image
                    src="/angry-goose.png"
                    width={36}
                    height={36}
                    alt="Angry goose"
                  />
                </Link>
              </div>
              <div className="flex w-1/3 justify-center px-4 text-2xl text-violet-300">
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
              <div className="flex w-1/3 justify-end">
                <AuthShowcase />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] p-[24px] text-2xl text-violet-300">
          <h1>to be built</h1>
        </div>
      </main>
    </>
  );
}
function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-sm text-violet-200">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-6 py-3 font-semibold text-violet-200 no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
