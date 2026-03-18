import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      '.next/**',
      '.next*/**',
      '.next_stale*/**',
      '.lighthouse/**',
      'node_modules/**',
      'out/**',
      'dist/**',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx,d.ts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];
