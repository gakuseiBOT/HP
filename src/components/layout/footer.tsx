import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white w-full flex lg:flex-row flex-col items-center justify-center lg:justify-between relative">
      <Link
        href={'https://github.com/gakuseiBOT/HP/graphs/contributors'}
        className="text-center hover:text-blue mx-auto"
      >
        Copyright&copy;2025 GakuseiBOTコミュニティ All Rights Reserved. See credits here.
      </Link>
    </footer>
  );
}