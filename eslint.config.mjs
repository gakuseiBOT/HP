import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import prettier from 'eslint-config-prettier';

const flatCompat = new FlatCompat();

/**
 * @type {import("eslint").Linter.Config}
 */
const config = [
  ...fixupConfigRules(
    flatCompat.extends('next/core-web-vitals'),
    flatCompat.extends('next/typescript'),
  ),
  prettier,
];

export default config;