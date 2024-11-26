import { CALL_STATUS, useVapi } from "@/hooks/useVapi";
import { Loader2, Mic, Square } from "lucide-react";

const AssistantButtonSmall = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const isListening = callStatus === CALL_STATUS.ACTIVE;
  const isLoading = callStatus === CALL_STATUS.LOADING;

  const color = isListening ? "red" : isLoading ? "orange" : "green";

  // Adjust the styles based on call status and audio level for a dynamic effect
  const buttonStyle = {
    backgroundColor: color,
    boxShadow: `0 0 ${20 + audioLevel * 50}px ${audioLevel * 12}px ${color}`,

    animation: isListening
      ? `pulse 1.5s infinite ease-in-out`
      : isLoading
      ? `rotate 1.2s linear infinite`
      : "none",
  };

  return (
    <button
      style={buttonStyle}
      className={`transition background-color 0.3s ease, box-shadow 0.3s ease h-[50px] md:h-[60px] rounded-full w-[50px] cursor-pointer text-white md:w-[60px] ease-in-out transform-gpu ${
        isListening
          ? "bg-red-600 hover:bg-red-700 animate-pulse"
          : isLoading
          ? "bg-orange-600 hover:bg-orange-700 animate-spin"
          : "bg-blue-950 hover:bg-blue-900"
      } flex items-center justify-center shadow-lg`}
      onClick={toggleCall}
    >
      {isListening ? (
        <Square className="h-5 w-5 md:h-6 md:w-6" />
      ) : isLoading ? (
        <Loader2 className="animate-spin h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <Mic className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  );
};

export default AssistantButtonSmall
