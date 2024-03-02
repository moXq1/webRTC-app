import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
