"use client";

import { useVapi } from "@/hooks/useVapi";
import { AssistantButton } from "./button";
// import { Display } from "./display";

function Assistant() {
  const { toggleCall, callStatus, audioLevel,messages } = useVapi();
  return (
    <>
      <div className="chat-history">
        {/* <Chat messages={messages} /> */}
      </div>
      <div className="user-input">
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
