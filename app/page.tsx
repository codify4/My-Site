import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-extrabold mb-5">my name is ijon</h1>
      <Image 
        src="/rarriPFP.jpg"
        alt="me"
        width={150}
        height={150}
        className="rounded-full"
      />

      <div className="flex flex-col items-center justify-center w-3/4 text-xl text-center mt-5">
        <p>i am a full-stack swe building apps that may or may not make money.</p>
        <p>learned to code in 8 months.</p>
        <ul className="flex flex-col items-center justify-center list-disc ml-5 mt-5 w-5/6 gap-1">
          <li>
            built
            <Link href="https://trackr-gl.framer.website/" className="font-bold underline text-blue-500 ml-1">Trackr.gl </Link>
            to easily track your habits
          </li>
          <li>
            now learning to become an even better dev and business owner
          </li>
          <li>
            cool stuff coming soon
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          <h2 className="text-3xl font-bold mt-5">my tech stack</h2>
          <ul className="flex flex-col items-center justify-center list-decimal">
            <li>Next.js</li>
            <li>Typescript</li>
            <li>TailwindCSS</li>
            <li>Shadcn UI</li>
            <li>Supabase(uploading)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          <h2 className="text-3xl font-bold mt-5">connect with me</h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-center gap-1">
              <span>Follow me on</span> 
              <Link href="https://x.com/Ijon_k4" className="font-bold underline text-blue-500 ml-1">X(Twitter)</Link>
              <span>for free game and some fun</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <Link href="https://github.com/codify4" className="font-bold underline text-blue-500 ml-1">Github</Link>
              <Link href="https://www.linkedin.com/in/ijon-kushta-320b6831b/" className="font-bold underline text-blue-500 ml-1">Linkedin</Link>
              <Link href="https://www.instagram.com/k_ijon4/" className="font-bold underline text-blue-500 ml-1">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
