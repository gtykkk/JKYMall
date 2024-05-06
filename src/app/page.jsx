import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <h1>JKY Mall Body</h1>
        <h1>JKY Mall Body</h1>
        <h1>JKY Mall Body</h1>
        <h1>JKY Mall Body</h1>
        <h1>JKY Mall Body</h1>
      </div>
      <div>
        {[...Array(50)].map((_, i) => (
          <div className="grid" key={i}>
            <Image
              src="/favicon.ico"
              alt="JKY Mall"
              width={30}
              height={30}
              priority
            />
            <span>상품 {i + 1}</span>
          </div>
        ))}
      </div>
    </>
  );
}
