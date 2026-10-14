import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, Trash2, ArrowRight, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AskRajAi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! I am Raj Patil's AI Assistant. Ask me anything about his NLP projects, CGPA (8.48), DATAVERSE leadership, or internship availability!",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const quickQuestions = [
    'Why should we hire Raj?',
    'Explain Unified Intelligent Search',
    'What did he do in DATAVERSE?',
    'What are his core DSA skills?',
    'How can I contact Raj?',
  ];

  const getAiAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes('why hire') || q.includes('hire raj') || q.includes('why should') || q.includes('strengths')) {
      return `Raj brings a rare combination of theoretical rigor and hands-on execution:
1. Strong Academic Record: B.Tech in AI & Data Science with an 8.48 CGPA at RCPIT.
2. Production-grade NLP: Hands-on experience with Dense Vector Embeddings, TF-IDF, Hugging Face, NLTK, and PostgreSQL.
3. DSA & Engineering Core: Proficient in Java and Python with clean OOP and algorithmic foundations.
4. Proven Leadership: Heads club DATAVERSE, coordinated events for 140+ participants, and mentors ~80 school students weekly in AI literacy.`;
    }

    if (q.includes('search') || q.includes('unified') || q.includes('intelligent search')) {
      return `Unified Intelligent Search is Raj's flagship information retrieval engine:
• Overcomes keyword-matching limitations by combining dense vector embeddings with statistical TF-IDF scoring.
• Uses PostgreSQL for resilient document persistence and NLTK for text preprocessing (tokenization, normalization).
• Benchmarked to outrank conventional BM25 search queries on complex conceptual research paper searches.`;
    }

    if (q.includes('sentiment') || q.includes('vader') || q.includes('analyser')) {
      return `Sentiment Analyser is an end-to-end review analysis application:
• Combines NLTK, TextBlob, and VADER pipelines to classify reviews into positive, negative, or neutral scores.
• Supports dual modes: live single-text testing and bulk CSV/TXT uploads for business analytics.
• Built as a reusable daily operational tool rather than an isolated script.`;
    }

    if (q.includes('dataverse') || q.includes('leadership') || q.includes('club') || q.includes('heist')) {
      return `As Head of Club for DATAVERSE at RCPIT:
• Raj leads the premier student AI and Data Science community.
• He spearheaded "The Heist Carnival" at Converges-26, managing 35 competitive teams and 140+ participants.
• He also hosted a full-house masterclass on "Introduction to LinkedIn" for 200+ students.`;
    }

    if (q.includes('skills') || q.includes('dsa') || q.includes('tech stack') || q.includes('java') || q.includes('python')) {
      return `Raj's Core Technical Arsenal:
• Languages: Python (Advanced), Java (Intermediate)
• AI & NLP: Vector Embeddings, Semantic Search, TF-IDF, Hugging Face Transformers, NLTK, TextBlob, VADER
• Databases & Tools: PostgreSQL, MySQL, Git & GitHub, VS Code
• DSA Foundations: Arrays, Trees & BST, Graph Traversals, Dynamic Programming, and Divide & Conquer.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return `You can reach Raj Patil directly:
• Email: rajjpatil1801@gmail.com
• Phone: +91 98251 43904
• LinkedIn: linkedin.com/in/raj-patil-a85947331
• GitHub: github.com/rajjpatil1801
• CodeChef: codechef.com/users/vincenzo_18
He is actively open to Summer Internships and AI/ML opportunities!`;
    }

    if (q.includes('tutor') || q.includes('teaching') || q.includes('students')) {
      return `In the AI Future Builders Program, Raj serves as an AI Tutor:
• He teaches AI and computational thinking to ~80 Class VI students in weekly sessions.
• He designs gamified lesson plans, live AI demonstrations, and assessment rubrics to build foundational tech literacy.`;
    }

    if (q.includes('cgpa') || q.includes('education') || q.includes('college')) {
      return `Education Snapshot:
• B.Tech in AI & Data Science (2024 – Present) at R.C. Patel Institute of Technology (Shirpur) — CGPA: 8.48 / 10.
• 12th State Board: 77% (2024, Sett RJJ High School Valsad)
• 10th State Board: 78% (2022, Sett RJJ High School Valsad).`;
    }

    // Default intelligent fallback
    return `Thanks for asking! Raj is an AI & Data Science undergraduate at RCPIT (CGPA 8.48) with deep focus on NLP, Vector Search, and Java/Python DSA. Feel free to ask about his "projects", "DATAVERSE leadership", "skills", or type "contact" to get his email and phone number!`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = getAiAnswer(text);
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: answer };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Action Trigger in Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-2xl hover:scale-105 transition-all duration-300 border border-neutral-700/50"
            title="Ask Raj's AI Copilot"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-purple-400 dark:text-purple-600 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-neutral-900 dark:ring-white" />
            </div>
            <span className="text-xs font-bold tracking-tight">Ask Raj AI</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 dark:text-purple-700">
              PRO
            </span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-5 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-neutral-900 text-white dark:bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    Raj Patil AI Copilot
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-neutral-400">
                  Trained on Resume & Projects
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([messages[0]])}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                  </div>
                )}
                
                <div
                  className={`max-w-[82%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-br-xs font-medium'
                      : 'bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 rounded-bl-xs border border-neutral-200/60 dark:border-neutral-700/60'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-neutral-400 text-xs pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce delay-300" />
                <span className="text-[10px] ml-1">Raj AI is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Pills */}
          <div className="px-3 py-2 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder="Ask anything about Raj..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 disabled:opacity-40 hover:opacity-90 transition-opacity"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
