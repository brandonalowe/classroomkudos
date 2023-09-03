import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "@/utils/api";
import "@/styles/globals.css";

import { StudentProvider } from "@/context/StudentContext";
import { RewardProvider } from "@/context/RewardContext";
import { SortingProvider } from "@/context/SortingContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <StudentProvider>
        <RewardProvider>
          <SortingProvider>
            <Component {...pageProps} />
          </SortingProvider>
        </RewardProvider>
      </StudentProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
