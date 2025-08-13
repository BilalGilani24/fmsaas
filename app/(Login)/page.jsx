"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
const Login = () => {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    setloading(false);
    try {
      e.preventDefault();
      const callback = await signIn("credentials", {
        Email,
        Password,
        redirect: false,
      });
      if (callback.error) {
        toast.error("Error Logging In");
      } else if (callback?.ok && !callback.error) {
        await getSession();
      }
      setloading(true);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  useEffect(() => {
    if (session?.user?.role === "Student") {
      router.replace("/student/dashboard");
    }
    if (session?.user?.role === "Admin") {
      router.replace("/admin/dashboard");
    }

    if (session?.user?.role) {
      if (session.user.Role === "Superadmin") {
        router.replace("/superadmin/dashboard");
      }
    }
  }, [session, router]);
  return (
    <div className="flex mt-16 justify-center ">
      <div className="justify-center flex flex-row w-[1000px] rounded-2xl h-[500px] border shadow-lg">
        <div className="justify-center rounded-bl-2xl rounded-tl-2xl flex w-[550px] h-[500px] bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-96 max-w-md p-6">
              <h2 className="text-2xl dm-sans font-bold text-gray-900 mb-4">
                Login
              </h2>
              <form className="flex flex-col">
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Password"
                />
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  {loading ? "...Logging" : "Log in"}
                </button>
              </form>
              <div className="flex justify-center items-center mt-5 text-gray-500 font-semibold">
                Our Social Media Links
              </div>
              <div className="flex flex-row gap-3 mt-3 justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/instagram.png"
                    width={25}
                    height={25}
                    alt="Instagram"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/facebook.png"
                    width={25}
                    height={25}
                    alt="Facebook"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/twitter.png"
                    width={25}
                    height={25}
                    alt="Twitter"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/linkedin.png"
                    width={25}
                    height={25}
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-br-2xl flex-col mt-[-1px] w-[450px] h-[500px] justify-center flex rounded-tr-2xl bg-red-700">
          <div className="flex justify-center">
            <Image src="/students.png" width={400} height={50} alt="Students" />
          </div>
          <div>
            <h1 className="dm-sans text-2xl text-white font-bold text-center">
              FM Consultants E-Portal
            </h1>
            <h1 className="dm-sans text-slate-200 text-center">
              Opening Doors to Worldwide Opportunities
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
