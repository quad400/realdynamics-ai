
import { CALL_STATUS, useVapi } from "@/hooks/useVapi";
import { Loader2, Mic, Square } from "lucide-react";


const AssistantButton = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const isListening = callStatus === CALL_STATUS.ACTIVE;
  const isLoading = callStatus === CALL_STATUS.LOADING;

  const color = isListening ? "red" : isLoading ? "orange" : "green";

  // Adjust the styles based on call status and audio level for a dynamic effect
  const buttonStyle = {
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    color: "white",
    border: "none",
    cursor: "pointer",
    backgroundColor: color,
    boxShadow: `0 0 ${20 + audioLevel * 50}px ${audioLevel * 12}px ${color}`,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    animation: isListening
      ? `pulse 1.5s infinite ease-in-out`
      : isLoading
      ? `rotate 1.2s linear infinite`
      : "none",
  };

  return (
    <button
      style={buttonStyle}
      className={`transition ease-in-out transform-gpu ${
        isListening
          ? "bg-red-600 hover:bg-red-700 animate-pulse"
          : isLoading
          ? "bg-orange-600 hover:bg-orange-700 animate-spin"
          : "bg-green-600 hover:bg-green-700"
      } flex items-center justify-center shadow-lg`}
      onClick={toggleCall}
    >
      {isListening ? (
        <Square />
      ) : isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Mic />
      )}
    </button>
  );
};

export { AssistantButton };
