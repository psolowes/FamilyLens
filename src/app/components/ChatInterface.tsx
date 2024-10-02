'use client'

import { useState, useEffect } from 'react'
import { useChat } from 'ai/react'
import MessageList from './MessageList'
import InputField from './InputField'
import ModelSelector from './ModelSelector'
import ErrorDisplay from './ErrorDisplay'
import LoadingIndicator from './LoadingIndicator'
import DocumentList from './DocumentList'

export default function ChatInterface() {
  const [model, setModel] = useState<'gpt-4o-2024-08-06' | 'gpt-4o-mini' | 'claude-3-sonnet'>('gpt-4o-2024-08-06')
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: { model },
  })

  useEffect(() => {
    const savedModel = localStorage.getItem('selectedModel')
    if (savedModel) {
      setModel(savedModel as 'gpt-4o-2024-08-06' | 'gpt-4o-mini' | 'claude-3-sonnet')
    }
  }, [])

  const handleModelChange = (newModel: 'gpt-4o-2024-08-06' | 'gpt-4o-mini' | 'claude-3-sonnet') => {
    setModel(newModel)
    localStorage.setItem('selectedModel', newModel)
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <div className="w-1/4 p-4 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Family History Analyzer</h1>
        <ModelSelector model={model} onModelChange={handleModelChange} />
        <button className="w-full mt-4 p-2 bg-gray-700 text-white rounded">
          Upload Document
        </button>
        <DocumentList />
      </div>
      <div className="flex-1 flex flex-col">
        <MessageList messages={messages} />
        {isLoading && <LoadingIndicator />}
        {error && <ErrorDisplay error={error} />}
        <InputField
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}