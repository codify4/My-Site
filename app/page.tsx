import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 bg-white">
      <h1 className="text-5xl font-extrabold mb-5">my name is ijon</h1>
      <Image 
        src="/rarriPFP.jpg"
        alt="me"
        width={150}
        height={150}
        className="rounded-full"
      />

      <div className="w-3/4 text-xl text-center mt-5">
        <p>i am a full-stack swe building apps that may or may not make money.</p>
        <p>i learned to code profficently in 8 months.</p>
        <ul className="flex flex-col list-disc ml-5 mt-5">
          <li>
            My first app 
            <Link href="https://trackr-gl.vercel.app/" className="font-bold underline text-blue-600 ml-1">Trackr.gl</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
