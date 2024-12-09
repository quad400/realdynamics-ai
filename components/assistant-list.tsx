"use client"

import { Assistant } from "@/app/_components/assistant";
import { createPhone } from "@/libs/server";
import React from "react";

const AssistantItem = ({ item }: { item: any }) => {
  return (
    <div className="w-[150px] space-y-3 h-[150px] flex flex-col shadow-md justify-center items-center">
      <h4 className="text-base font-semibold text-neutral-700">{item.name}</h4>
      <Assistant assistantId={item.assistantId} />

      <button
        onClick={() => createPhone(item.assistantId)}
        className="bg-neutral-800 rounded-md py-2 px-4"
      >
        <p className="text-sm font-semibold text-neutral-50">Inbound</p>
      </button>
    </div>
  );
};

export default AssistantItem;
