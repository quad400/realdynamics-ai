export enum MessageTypeEnum {
    TRANSCRIPT = "transcript",
    FUNCTION_CALL = "function-call",
    FUNCTION_CALL_RESULT = "function-call-result",
    ADD_MESSAGE = "add-message",
    CONVERSATION_UNPDATE = "conversation-update",
  }
  
  export enum MessageRoleEnum {
    USER = "user",
    SYSTEM = "system",
    ASSISTANT = "assistant",
  }
  
  export enum TranscriptMessageTypeEnum {
    PARTIAL = "partial",
    FINAL = "final",
  }

  export interface ConversationUpdateMessage extends BaseMessage {
    type: MessageTypeEnum.CONVERSATION_UNPDATE;
    conversation: [
        {
            role: MessageRoleEnum;
            content: string;
        }
    ]
  }
  
  export interface TranscriptMessage extends BaseMessage {
    type: MessageTypeEnum.TRANSCRIPT;
    role: MessageRoleEnum;
    transcriptType: TranscriptMessageTypeEnum;
    transcript: string;
  }
  
  export interface FunctionCallMessage extends BaseMessage {
    type: MessageTypeEnum.FUNCTION_CALL;
    functionCall: {
      name: string;
      parameters: any;
    };
  }
  
  export interface FunctionCallResultMessage extends BaseMessage {
    type: MessageTypeEnum.FUNCTION_CALL_RESULT;
    functionCallResult: {
      forwardToClientEnabled?: boolean;
      result: any;
      [a: string]: any;
    };
  }
  
  export interface BaseMessage {
    type: MessageTypeEnum;
  }
  
  export type Message =
    | TranscriptMessage
    | FunctionCallMessage
    | FunctionCallResultMessage
    | ConversationUpdateMessage;