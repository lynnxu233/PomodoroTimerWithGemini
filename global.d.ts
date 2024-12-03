declare global {
    interface Window {
      ai?: {
        languageModel: {
          create: (options: {
            initialPrompts?: Array<{role: string, content: string}>,
            temperature?: number,
            topK?: number
          }) => Promise<{
            prompt: (userPrompt: string) => Promise<string>
          }>;
        };
      };
    }
  }
  
  export {};