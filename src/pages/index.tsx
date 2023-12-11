import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import Image from "next/image";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <div className="mx-auto mb-10 mt-16 flex flex-col items-center gap-4">
        <Image
          src="https://slyro.vercel.app/_next/image?url=https%3A%2F%2Fgithub.com%2Fkhandelwaldev.png&w=256&q=75"
          width={75}
          height={75}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="text-xl font-semibold">Dev</h1>
        <p className="text-sm text-gray-400">Solo developer kinda student</p>
      </div>
      <div className="flex flex-col gap-4 py-3">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="relative flex h-14 w-full items-center justify-center rounded-xl border-2 bg-[rgba(18,18,18,0.5)] px-8 py-4 transition-transform duration-200 hover:scale-105"
            target="_blank"
            rel="noopener, noreferrer"
            style={{
              borderColor: link.color,
            }}
          >
            <div className="absolute left-8">{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
      </div>
      <Background />
      <footer className="my-8 flex justify-center">
        &copy; {new Date().getFullYear()} Dev
      </footer>
    </>
  );
}
