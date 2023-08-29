import { Toaster } from "react-hot-toast";

import { Header } from "@/utils/Header";
import { Navbar } from "@/utils/Navbar";
import { StudentList } from "@/utils/StudentList";
import { AddStudent } from "@/utils/AddStudent";
import Head from "next/head";

export default function StudentDetail() {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="png" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-right" />
      <Header />
      <div className="border-b">
        <div className="container flex-1 items-start md:grid md:gap-6 md:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <Navbar />
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <StudentList />
          </main>
        </div>
      </div>
      <AddStudent />
    </>
  );
}
