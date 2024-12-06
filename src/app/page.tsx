import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to UI Data Warehouse</h1>
      <Link href="/data">View Data</Link>
      <Link href="/table">View Table </Link>
    </div>
  );
}
