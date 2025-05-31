import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-300 fixed top-0 w-full">
      <div className="flex items-center justify-between p-4 max-w-5xl m-auto">
        <h1 className="text-lg">Tara Yazdian</h1>

        <nav className="flex gap-4">
          <Link href="/">About me</Link>
          <Link href="/study-plan">Study plan</Link>
        </nav>
      </div>
    </header>
  );
}
