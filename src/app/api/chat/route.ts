import { OpenAIStream, AnthropicStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { Anthropic } from '@anthropic-ai/sdk'

// OpenAI configuration
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

// Anthropic configuration
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages, model } = await req.json()

  if (model === 'gpt-4') {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      stream: true,
      messages
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } else if (model === 'claude-3-sonnet') {
    const stream = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      stream: true,
      messages
    })
    const anthropicStream = AnthropicStream(stream)
    return new StreamingTextResponse(anthropicStream)
  } else {
    return new Response('Invalid model specified', { status: 400 })
  }
}