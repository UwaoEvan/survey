"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import PageHeader from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <PageHeader />
          <div className="md:pt-10">
            <main className="overflow-x-hidden">
              <div className="px-4 sm:px-6 md:px-8">{children}</div>
            </main>
          </div>
        </body>
      </Provider>
    </html>
  );
}
