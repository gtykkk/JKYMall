'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { menu, sign } from "@/app/_constant/menu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row py-3 items-center bg-gray-600 px-5">
        <div className="flex">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/favicon.ico"
              alt="JKY Mall"
              width={30}
              height={30}
              priority
            />
            <h1 className="text-xl px-3">JKY Mall</h1>
          </Link>
        </div>
        
        <div className="flex gap-4 text-lg mr-auto">
          {
            menu.map((item, key) => (
              <Link
                href={item.path}
                key={key}
              >
                <span>{item.title}</span>
              </Link>
            ))
          }
        </div>
        <div className="flex gap-3 text-lg ml-auto">
          {sign.map((item, key) => (
            <Link
              href={item.path}
              key={key}
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header