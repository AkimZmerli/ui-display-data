import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-7 text-5xl text-yellow-400">  Welcome to
  <br className="mb-2" />
  the
  <br className="mb-2" />
  Data Warehouse
</h1>
      <div className="fixed top-0 left-0 w-64 h-screen bg-zinc-800 p-4 ">
      <div className="h-1/3"></div>  
  <ul >
    <li className="mb-4">
      <Link href="/data" className="text-yellow-500 hover:text-yellow-700 font-bold">Show My Data
   
      </Link>
    </li>
    <li className="mb-4">
      <Link href="/table" className="text-yellow-500 hover:text-yellow-700 font-bold">Show My Table
      </Link>
    </li>
    <li className="mb-4">
      <Link href="/data" className="text-yellow-500 hover:text-yellow-700 font-bold">Show My Graph
   
      </Link>
    </li>
    <li className="mb-4">
      <Link href="/table" className="text-yellow-500 hover:text-yellow-700 font-bold">Show My IP
      </Link>
    </li>
    <li className="mb-4">
      <Link href="/data" className="text-yellow-500 hover:text-yellow-700 font-bold">Show My Pie
   
      </Link>
    </li>
    <li className="mb-4">
      <Link href="/table" className="text-yellow-500 hover:text-yellow-700 font-bold">Show Yo Mama
      </Link>
    </li>
  </ul>
</div>
    </div>
  );
}
