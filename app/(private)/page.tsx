import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div></div>
      <Link href="/dayoff">
        <div>Dayoff</div>
      </Link>

      <Link href="/point">
        <div>Point</div>
      </Link>

      <Link href="/meal">
        <div>Meal</div>
      </Link>
    </div>
  );
}
