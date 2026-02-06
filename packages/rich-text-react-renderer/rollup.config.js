import config from '../../rollup.config';
import { dependencies } from './package.json';

const overrides = {
  input: 'src/index.tsx',
  external: [...Object.keys(dependencies), 'react'],
};

export default config('index', overrides);
