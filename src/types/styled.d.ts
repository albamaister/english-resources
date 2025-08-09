/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import type { AppTheme } from '../lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

import 'styled-components';
import type { Theme } from '../lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
