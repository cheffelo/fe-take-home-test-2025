import Link from "next/link";

import { Listings } from "../../components/Listings";

export default function ListingsPage() {
  return (
    <>
      <header className="p-4">
        <Link href="/">&lt; Back to home page</Link>
        <h1 className="mt-4">
          <strong>Listings</strong>
        </h1>
      </header>

      <main className="p-4">
        <Listings />
      </main>
    </>
  );
}
