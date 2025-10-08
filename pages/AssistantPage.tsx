
import React, { useState, useRef, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import type { Message } from '../types';
import { getAssistantResponse } from '../services/geminiService';
import { Send, Bot, User, LoaderCircle } from 'lucide-react';

export const AssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: 'สวัสดีค่ะ ดิฉันคือผู้ช่วยอัจฉริยะ พร้อมให้ข้อมูลเกี่ยวกับคู่มือทะเบียนเกษตรกร ลองพิมพ์คำถามได้เลยค่ะ',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponseText = await getAssistantResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
       const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'ขออภัยค่ะ เกิดข้อผิดพลาดในการเชื่อมต่อ',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title="ผู้ช่วยอัจฉริยะ (Smart Assistant)"
        subtitle="สอบถามทุกข้อสงสัยเกี่ยวกับคู่มือทะเบียนเกษตรกรได้ที่นี่"
      />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                <Bot size={20} />
              </div>
            )}
            <div
              className={`max-w-md p-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-green-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
              }`}
            >
              <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
            </div>
             {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0">
                <User size={20} />
              </div>
            )}
          </div>
        ))}
         {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
              <Bot size={20} />
            </div>
            <div className="max-w-md p-3 rounded-lg bg-white border border-gray-200 rounded-bl-none flex items-center space-x-2">
               <LoaderCircle size={16} className="animate-spin text-green-600" />
               <span className="text-sm text-gray-500">กำลังประมวลผล...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="พิมพ์คำถามของคุณที่นี่..."
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 disabled:bg-gray-300 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
