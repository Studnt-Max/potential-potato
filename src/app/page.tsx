import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <main>

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

      <Link href="/page2" className="text-blue-500 hover:underline"> Go to Page2 </Link>
    </main>
  );
}
