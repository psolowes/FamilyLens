'use client'

import { useState, useEffect } from 'react'
import { useChat } from 'ai/react'
import MessageList from './MessageList'
import InputField from './InputField'
import ModelSelector from './ModelSelector'
import ErrorDisplay from './ErrorDisplay'
import LoadingIndicator from './LoadingIndicator'

export default function ChatInterface() {
  const [model, setModel] = useState<'gpt-4' | 'claude-3-sonnet'>('gpt-4')
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: { model },
  })

  useEffect(() => {
    const savedModel = localStorage.getItem('selectedModel')
    if (savedModel) {
      setModel(savedModel as 'gpt-4' | 'claude-3-sonnet')
    }
  }, [])

  const handleModelChange = (newModel: 'gpt-4' | 'claude-3-sonnet') => {
    setModel(newModel)
    localStorage.setItem('selectedModel', newModel)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      <ModelSelector model={model} onModelChange={handleModelChange} />
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
  )
}