import { Inter } from "next/font/google";
import { Assistant } from "./_components/assistant";
import Link from "next/link";
import NewAssistant from "@/components/new-assitant";
import { createPhone, getAssistants } from "@/libs/server";
import { Play } from "lucide-react";
import AssistantItem from "@/components/assistant-list";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await getAssistants();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <NewAssistant />

      <div className="flex flex-row gap-3 mt-4 flex-wrap">
        {data.map((item, index) => (
          <AssistantItem item={item} key={index} />
        ))}
      </div>
      {/* <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold text-neutral-700">Welcome to RealIt Assistant</h1>
        <p className="text-slate-600 text-sm font-normal">
          Talk with RealIt to understand about your saas product.
        </p>
      </div>
      <Assistant />
      <div className="mt-10 flex flex-wrap justify-center items-center space-x-2">
        <p className="text-sm font-normal text-neutral-500">Save Your Number For Outbound Calls</p>
        <Link href="/phone" className="text-green-500 font-medium text-sm">
          Click Here
        </Link>
      </div> */}
    </main>
  );
}
