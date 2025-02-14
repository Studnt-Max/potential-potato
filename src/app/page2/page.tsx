import Link from "next/link";
import Rectangle from "../components/Rectangle";

export default function Page2() {
  return (
    <main>

    <Rectangle color="green"/>

    <div className="grid grid-cols-3 gap-3">
      <div className="w-32 h-20 bg-blue-50"></div>
      <div className="w-32 h-20 bg-white-500"></div>
      <div className="w-32 h-20 bg-blue-50"></div>
      <div className="w-32 h-20 bg-white-500"></div>
      <div className="w-32 h-20 bg-blue-50"></div>
      <div className="w-32 h-20 bg-white-500"></div>
      <div className="w-32 h-20 bg-blue-50"></div>
      <div className="w-32 h-20 bg-white-500"></div>
      <div className="w-32 h-20 bg-blue-50"></div>
    </div>

        <button>
          <Link href="/" className="flex items-center justify-center text-blue-500 hover:underline">
            Go to Home
          </Link>
        </button>
        
    </main>
  );
}
