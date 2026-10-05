declare module 'vite' {
  import type { InlineConfig } from 'vite';

  export interface ViteEnv {
    VITE_API_URL: string;
    VITE_ENV: 'development' | 'production';
  }

  export function defineConfig(config: InlineConfig): InlineConfig;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_API_URL?: string;
      VITE_ENV?: string;
    }
  }
}

export {};
