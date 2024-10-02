'use client'

import { Message } from 'ai'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css' // You can choose any highlight.js theme
import { useState } from 'react'

export default function MessageList({ messages }: { messages: Message[] }) {
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)

  const handleCopy = (text: string, messageId: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedMessageId(messageId)
        setTimeout(() => setCopiedMessageId(null), 2000) // Reset after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-3/4 p-3 rounded-lg ${
            message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'
          }`}>
            <div className="flex items-start">
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  AI
                </div>
              )}
              <ReactMarkdown rehypePlugins={[rehypeHighlight]} className="flex-1">
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}