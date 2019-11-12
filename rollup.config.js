import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'src/index.js',
  plugins: [terser()],
  output: {
    file: 'umd/anna-string-library.js',
    format: 'umd',
    name: 'annaStringLibrary',
    esModule: false,
  }
},

{
  input: 'src/index.js',
  output: {
    file: 'esm/index.js',
    format: 'esm'
  }
}
]