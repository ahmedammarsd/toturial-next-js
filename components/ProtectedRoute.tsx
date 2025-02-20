"use client";

import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useLayoutEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checkIsLoggedIn, setCheckIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    setCheckIsLoggedIn(false);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      setCheckIsLoggedIn(true);
      router.push("/login");
    }
    setCheckIsLoggedIn(true);
  }, [router]);

  /// i added this for check first because it was working in first time and user can see the page for second time
  return <>{checkIsLoggedIn ? children : null}</>;
}
