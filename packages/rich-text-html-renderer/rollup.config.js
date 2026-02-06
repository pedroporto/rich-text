import config from '../../rollup.config';
import { dependencies } from './package.json';

export default config('index', {
  external: Object.keys(dependencies),
});
