import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' with { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      // file: './dist/cjs/index.js',
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames: 'index.cjs',
      exports: 'named',
    },
    {
      // file: './dist/esm/index.js',
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: 'index.js',
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
