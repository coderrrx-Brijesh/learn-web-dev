'use client'
import Image from "next/image";
import logo from '../public/logo.png';
import { useRouter } from "next/navigation"; // Correct import

export default function Navbar() {
  const router = useRouter(); // Use the hook from next/navigation

  return (
    <nav className="bg-slate-800 backdrop-blur-sm bg-opacity-80 border border-white/20
    flex flex-row px-20 text-white py-4 fixed top-0 w-full z-50 shadow-md h-[11%] items-center mb-10">
      <Image
        src={logo}
        onClick={() => router.push("/")} // Navigate using router.push
        alt="logo"
        className="rounded-full cursor-pointer" // Add cursor-pointer for better UX
        height={50}
        width={50}
      />
      <div className="container mx-auto flex justify-center space-x-8">
        <a href="/project/create" className="hover:text-gray-300">
          Create
        </a>
        <a href="#products" className="hover:text-gray-300">
          Logout
        </a>
        <a href="#pricing" className="hover:text-gray-300">
          Username
        </a>
      </div>
    </nav>
  );
}
