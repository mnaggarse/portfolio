import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b">
      <div className="flex items-center justify-between max-w-5xl px-6 py-4 mx-auto">
        <h1 className="text-3xl font-bold">M.Elnaggar</h1>

        <Menu size={30} className="cursor-pointer md:hidden" />

        <ul className="items-center justify-between hidden gap-4 md:flex">
          <li className="text-gray-800 cursor-pointer">Home</li>
          <li className="text-gray-800 cursor-pointer">About</li>
          <li className="text-gray-800 cursor-pointer">Skills</li>
          <li className="text-gray-800 cursor-pointer">Projects</li>
          <li className="text-gray-800 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
