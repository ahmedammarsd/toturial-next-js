// app/(protected)/layout.tsx

import ProtectedLayout from "@/components/ProtectedRouteLayou";

export default function ProtectedPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
