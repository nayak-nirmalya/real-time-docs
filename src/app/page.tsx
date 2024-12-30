import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/7008" className="text-blue-500 underline">
        &nbsp;here&nbsp;
      </Link>
      to go to document id page.
    </div>
  );
}
