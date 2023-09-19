"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 flex py-5 px-10 justify-between items-center">
      <Link href="/" className="text-xl sm:text-2xl font-semibold">
        <h1>NextGitHub</h1>
      </Link>
      <ul className="flex items-center gap-10 text-gray-200">
        {session ? (
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className="hover:text-gray-50 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-50 transition-colors"
              >
                About
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
