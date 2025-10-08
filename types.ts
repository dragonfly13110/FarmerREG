export type Page = 'home' | 'terminology' | 'rationale' | 'conditions' | 'process' | 'form-guide' | 'reports' | 'assistant' | 'planting-schedule' | 'minimum-area' | 'planting-density';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}