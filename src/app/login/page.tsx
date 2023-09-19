"use client";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

function LoginPage() {
  return (
    <section className="px-5 sm:px-0 flex justify-center h-[calc(100vh-4.5rem)] items-center">
      <div className="bg-gray-800 p-5 flex-auto max-w-md rounded">
        <div
          onClick={() =>
            signIn("github", { callbackUrl: "/dashboard/profile" })
          }
          className="bg-gray-950 p-5 flex items-center justify-between text-xl sm:text-2xl cursor-pointer"
        >
          <button>
            <AiFillGithub />
          </button>
          <h2 className="font-bold">Sign in with GitHub</h2>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
