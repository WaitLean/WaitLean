import Background from "@/components/background";
import QueryProvider from "@/components/query-provider";
import Sidebar from "@/components/sidebar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { ToastProvider } from "@heroui/toast";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased bg-black relative dark",
          fontSans.variable
        )}
      >
        <ToastProvider />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <NextTopLoader
            color="#006fee"
            height={3}
            showSpinner={false}
            zIndex={100000}
          />
          <QueryProvider>
            <Background />

            <div className="relative z-10 flex flex-col h-screen">
              <header
                id="header"
                className="shrink-0 border-b bg-sidebar p-4 flex items-center justify-between h-14"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/icons/waitlean-icon.png"}
                    width={25}
                    height={25}
                    alt={"Waitlean logo"}
                  />
                  <span className="font-bold">Kue</span>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="light"
                    className="text-xs text-muted-foreground"
                    size="sm"
                  >
                    Feedback
                  </Button>

                  <Button
                    startContent={<MagnifyingGlassIcon className={"size-4"} />}
                    radius="full"
                    variant="bordered"
                    className="text-muted-foreground text-xs flex hover:border-muted"
                    size="sm"
                  >
                    <span>Search...</span>

                    <Kbd
                      keys={["command"]}
                      className="scale-95 bg-transparent text-muted-foreground"
                    >
                      k
                    </Kbd>
                  </Button>
                </div>
              </header>

              <div className="flex flex-row flex-1 overflow-hidden">
                {/* Sidebar */}
                <Sidebar />
                {/* Content */}
                <main className="w-full overflow-y-auto">{children}</main>{" "}
              </div>
            </div>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
