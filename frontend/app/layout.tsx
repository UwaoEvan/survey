"use client";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import store from "@/store/store";
import PageHeader from "@/components/header";
import "./globals.css";

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <body>
            <PageHeader />
            <div className="md:pt-10">
              <main className="overflow-x-hidden">
                <div className="px-4 sm:px-6 md:px-8">{children}</div>
              </main>
            </div>
          </body>
        </QueryClientProvider>
      </Provider>
    </html>
  );
}
