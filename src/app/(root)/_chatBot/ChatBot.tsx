"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  Code2,
  MessageCircle,
  X,
  MinusCircle,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Bot as BotIcon } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Initialize API
  const apiKey = "AIzaSyCb8O6CQYR2uiRF7CEWJ4mkgxASrvBzb1Y";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target as Node)
      ) {
        setIsMinimized(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await model.generateContent([input.trim()]);
      const response = await result.response;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text(),
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with Gemini API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 md:p-6">
      {/* Floating Chat Button */}
      
    <button
      onClick={() => {
        setIsOpen((prev) => !prev);
        setIsMinimized(false);
      }}
      className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full 
        flex items-center justify-center shadow-xl transition-all duration-300 transform 
        hover:scale-110 hover:shadow-[0_0_25px_rgba(0,195,255,0.8)] 
        focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 
        relative overflow-hidden"
    >
      <Bot className="w-10 h-10 text-white transition-all duration-300 
        group-hover:scale-110 group-hover:text-blue-200" />

      {/* Glowing effect */}
      <div className="absolute w-full h-full rounded-full bg-blue-400 opacity-20 blur-xl scale-75 
        group-hover:opacity-50 group-hover:scale-90 transition-all duration-500">
      </div>
    </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          ref={chatBoxRef}
          style={{
            transform: isMinimized ? "translateY(85%)" : "translateY(0)",
          }}
          className="fixed right-4 bottom-20 md:right-6 md:bottom-24 w-[95vw] sm:w-[350px] max-h-[500px] bg-[#0B1017] rounded-xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden transition-transform duration-300"
        >
          {/* Chat Header */}
          <div
            className="bg-[#1E2530] p-4 border-b border-gray-700 cursor-pointer flex justify-between items-center"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-[#3B82F6]" />
              <h1 className="text-lg font-semibold text-white">
                Bhasha-Hub Assistant
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(!isMinimized);
                }}
              >
                <MinusCircle className="w-5 h-5 text-gray-400 hover:text-gray-200" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-200" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 h-[350px] overflow-y-auto py-4 space-y-4 bg-[#141B24] px-4 custom-scrollbar">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 mt-10 animate-fade-in">
                <Bot className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <p className="text-lg">How can I assist you today?</p>
                <p className="text-sm mt-2 text-gray-500">Ask me anything!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-4 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    } animate-slide-in`}
                  >
                    <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg flex-shrink-0">
                      {message.role === "user" ? (
                        <User className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Bot className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-4 py-2 text-sm max-w-[80%] overflow-hidden ${
                        message.role === "user"
                          ? "bg-blue-600 text-white self-end"
                          : "bg-[#1E2530] border border-gray-700 text-gray-100"
                      }`}
                    >
                      <div className="prose prose-invert prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap max-w-none">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="bg-[#1E2530] p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-lg bg-[#141B24] border border-gray-700 px-4 py-2 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

// "use client";
// import React, { useState } from "react";
// import { Send, Bot, User, Loader2, Code2, MessageCircle } from "lucide-react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import ReactMarkdown from "react-markdown";

// interface Message {
//   id: string;
//   content: string;
//   role: "user" | "assistant";
//   timestamp: Date;
// }

// const ChatBot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Initialize API
//   const apiKey = "AIzaSyCb8O6CQYR2uiRF7CEWJ4mkgxASrvBzb1Y";
//   const genAI = new GoogleGenerativeAI(apiKey);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   // Handle Form Submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content: input.trim(),
//       role: "user",
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const result = await model.generateContent([input.trim()]);
//       const response = await result.response;

//       const botMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         content: response.text(),
//         role: "assistant",
//         timestamp: new Date(),
//       };

//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Error communicating with Gemini API:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* Floating Chat Button */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           position: "fixed",
//           right: "20px",
//           bottom: "20px",
//           cursor: "pointer",
//           zIndex: 50,
//         }}
//         className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
//       >
//         <MessageCircle className="w-6 h-6 text-white" />
//       </div>

//       {/* Chat Box */}
//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             right: "20px",
//             bottom: "80px",
//             zIndex: 40,
//           }}
//           className="w-[400px] max-h-[600px] bg-[#0B1017] rounded-xl shadow-lg border border-gray-700 flex flex-col overflow-hidden"
//         >
//           {/* Chat Header */}
//           <div className="bg-[#1E2530] rounded-t-xl p-4 border-b border-gray-700">
//             <div className="flex items-center gap-3">
//               <Code2 className="w-5 h-5 text-[#3B82F6]" />
//               <h1 className="text-lg font-semibold text-white">
//                 Bhasha-Hub Assistant
//               </h1>
//             </div>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 max-h-[400px] overflow-y-auto py-4 space-y-4 bg-[#141B24] px-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
//             {messages.length === 0 ? (
//               <div className="text-center text-gray-400 mt-10">
//                 <Bot className="w-10 h-10 mx-auto mb-4 text-blue-500" />
//                 <p>How can I assist you today?</p>
//               </div>
//             ) : (
//               messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex items-start gap-4 ${
//                     message.role === "user" ? "flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg">
//                     {message.role === "user" ? (
//                       <User className="w-5 h-5 text-blue-400" />
//                     ) : (
//                       <Bot className="w-5 h-5 text-blue-400" />
//                     )}
//                   </div>
//                   <div
//                     className={`rounded-lg px-4 py-2 text-sm max-w-[80%] break-words overflow-hidden ${
//                       message.role === "user"
//                         ? "bg-blue-600 text-white self-end"
//                         : "bg-[#1E2530] border border-gray-700 text-gray-100"
//                     }`}
//                   >
//                     <ReactMarkdown>{message.content}</ReactMarkdown>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Input Area */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-[#1E2530] p-4 rounded-b-xl"
//           >
//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 rounded-lg bg-[#141B24] border border-gray-700 px-4 py-2 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading || !input.trim()}
//                 className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 transition text-white"
//               >
//                 {isLoading ? (
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                 ) : (
//                   <Send className="w-4 h-4" />
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;
