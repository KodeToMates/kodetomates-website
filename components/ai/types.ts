export type MessageSender = 'user' | 'kizhi';

export interface ActionLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text: string;
  timestamp: string;
  actionLinks?: ActionLink[];
}

export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
}
