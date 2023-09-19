"use client";
import { useSession, signOut } from "next-auth/react";

function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (status === "authenticated") {
    console.log(session);
  }

  return (
    <section className="px-5 sm:px-0 flex justify-center h-[calc(100vh-4.5rem)] items-center">
      <div className="container sm:max-w-md mx-auto flex flex-col gap-5">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">Profile</h2>
        <div className="bg-gray-800 p-5 flex justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">
              {session?.user?.name}
            </h3>
            <p className="text-lg sm:text-xl text-gray-200">
              {session?.user?.email}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image!}
            alt={session?.user?.name!}
            className="w-28 rounded-full"
          />
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-600 hover:bg-red-500 transition-colors px-4 py-2 w-fit mx-auto block text-lg sm:text-xl"
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default ProfilePage;
