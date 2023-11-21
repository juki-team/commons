import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      // file: './dist/cjs/index.js',
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      // file: './dist/esm/index.js',
      dir: 'dist/esm',
      format: 'es',
    },
  ],
  external: [ ...Object.keys(pkg.peerDependencies || {}) ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};