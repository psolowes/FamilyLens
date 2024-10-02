'use client'

type ModelType = "gpt-4o-2024-08-06" | "gpt-4o-mini" | "claude-3-sonnet";

interface ModelSelectorProps {
  model: ModelType;
  onModelChange: (model: ModelType) => void;
}

export default function ModelSelector({ model, onModelChange }: ModelSelectorProps) {
  return (
    <div className="w-full">
      <select
        value={model}
        onChange={(e) => onModelChange(e.target.value as ModelType)}
        className="w-full p-2 rounded text-gray-100 bg-gray-700 border-gray-600"
      >
        <option value="gpt-4o-2024-08-06">OpenAI GPT-4</option>
        <option value="gpt-4o-mini">GPT-4o Mini</option>
        <option value="claude-3-sonnet">Claude 3 Sonnet</option>
      </select>
    </div>
  )
}