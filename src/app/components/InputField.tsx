'use client'

import { FormEvent } from 'react'

interface InputFieldProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export default function InputField({ input, handleInputChange, handleSubmit, isLoading }: InputFieldProps) {
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
      <div className="flex items-center">
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l-lg text-gray-100 bg-gray-700 border-gray-600"
          rows={1}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 bg-blue-600 text-white rounded-r-lg disabled:bg-blue-400"
        >
          Send
        </button>
      </div>
    </form>
  )
}