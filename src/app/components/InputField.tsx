'use client'

import { FormEvent } from 'react'

interface InputFieldProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export default function InputField({ input, handleInputChange, handleSubmit, isLoading }: InputFieldProps) {
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-l-lg text-gray-100 bg-gray-700 border-gray-600"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 bg-green-600 text-white rounded-r-lg disabled:bg-green-400"
        >
          Send
        </button>
      </div>
    </form>
  )
}