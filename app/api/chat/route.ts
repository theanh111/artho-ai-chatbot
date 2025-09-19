import { openai } from "@ai-sdk/openai"
import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: prompt,
    abortSignal: req.signal,
    maxTokens: 2000,
    temperature: 0.7,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("Chat request aborted")
      }
    },
    consumeSseStream: consumeStream,
  })
}
