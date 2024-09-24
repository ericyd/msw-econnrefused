import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: configDefaults.exclude,
      setupFiles: './test/setup.ts',
      reporters: ['basic'],
    },
  })
);
