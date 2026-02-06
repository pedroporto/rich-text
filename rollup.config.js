import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import json from 'rollup-plugin-json';

export default (outputFile, overrides = {}) => ({
  input: 'src/index.ts',
  output: [
    {
      file: `dist/cjs/${outputFile}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `dist/esm/${outputFile}.mjs`,
      format: 'es',
      sourcemap: true,
    }
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    swc({
      swc: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2019',
          loose: false,
          minify: {
            compress: false,
            mangle: false,
          },
        },
        minify: false,
      },
    }),
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
    }),
  ],
  ...overrides,
});
