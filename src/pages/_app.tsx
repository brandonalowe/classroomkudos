import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";

import { StudentProvider } from "@/context/StudentContext";
import { RewardProvider } from "@/context/RewardContext";
import { SortingProvider } from "@/context/SortingContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <StudentProvider>
        <RewardProvider>
          <SortingProvider>
            <Component {...pageProps} />
          </SortingProvider>
        </RewardProvider>
      </StudentProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
