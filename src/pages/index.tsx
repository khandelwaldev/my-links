import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import Image from "next/image";
import Background from "@/components/Background";
import { useState } from "react";
import NowPlaying from "@/components/NowPlaying";
import Popup from "@/components/Popup";

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    // Close the popup by updating the state
    setIsPopupVisible(false);
  };
  return (
    <>
      <Popup onClose={closePopup} isPopupVisible={isPopupVisible} />
      {/** Hero */}
      <div className="mx-auto mb-6 mt-16 flex flex-col items-center gap-4">
        <Image
          src="https://github.com/khandelwaldev.png"
          width={200}
          height={200}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="text-[20px] font-semibold">Dev Khandelwal</h1>
        <p className="text-base text-gray-400">Solo developer kinda student</p>
      </div>
      {/** Links */}
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
            <div className="absolute left-8" style={{ color: link.color }}>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        ))}
        <div className="mt-6">
          <h1 className="text-base font-medium mb-3">See what I'm listening on Spotify right now.</h1>
          <NowPlaying />
        </div>
      </div>
      <Background />
      <footer className="my-8 flex justify-center">
        &copy; {new Date().getFullYear()} Dev
      </footer>
    </>
  );
}
