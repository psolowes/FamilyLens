'use client'

interface ModelSelectorProps {
  model: 'gpt-4' | 'claude-3-sonnet'
  onModelChange: (model: 'gpt-4' | 'claude-3-sonnet') => void
}

export default function ModelSelector({ model, onModelChange }: ModelSelectorProps) {
  return (
    <div className="p-4 border-b border-gray-700 bg-gray-800 rounded-t-lg">
      <select
        value={model}
        onChange={(e) => onModelChange(e.target.value as 'gpt-4' | 'claude-3-sonnet')}
        className="p-2 border rounded text-gray-100 bg-gray-700 border-gray-600"
      >
        <option value="gpt-4">GPT-4</option>
        <option value="claude-3-sonnet">Claude 3 Sonnet</option>
      </select>
    </div>
  )
}