import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import "../index.css";

export const metadata: Metadata = {
    title: "Backpacks & Blueprints",
    description: "Web application",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    {children}
                </Layout>
                <Toaster />
            </body>
        </html>
    );
}
