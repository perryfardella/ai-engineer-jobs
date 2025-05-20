"use client";

import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            AI Engineer Jobs
          </Link>
          <nav className="flex items-center gap-4">
            {isAuthenticated ? (
              <LogoutButton />
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-sm font-medium hover:underline"
                >
                  Login
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="text-sm font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
