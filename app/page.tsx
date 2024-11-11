import { Inter } from "next/font/google";
import { Assistant } from "./_components/assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-3xl">Welcome to RealIt Assistant</h1>
        <p className="text-slate-600">
          Talk with RealIt to understand about your saas product.
        </p>
      </div>
      <Assistant />
      <></>
    </main>
  );
}
