"use client";

import { useVapi } from "@/hooks/useVapi";
import { AssistantButton } from "./button";

function Assistant({assistantId}: {assistantId: string}) {
  const { toggleCall, callStatus, audioLevel } = useVapi(assistantId);
  return (
    <>
      <div>
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        ></AssistantButton>
      </div>
    </>
  );
}

export { Assistant };
