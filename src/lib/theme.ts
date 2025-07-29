export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef3c7',
      400: '#fbbf24',
      500: '#f59e0b',
    },
    red: {
      100: '#fee2e2',
      500: '#ef4444',
      800: '#991b1b',
    },
    green: {
      100: '#dcfce7',
      800: '#166534',
    },
    blue: {
      100: '#dbeafe',
      800: '#1e40af',
    },
    purple: {
      100: '#f3e8ff',
      800: '#6b21a8',
    },
    pink: {
      100: '#fce7f3',
      800: '#9d174d',
    },
    indigo: {
      100: '#e0e7ff',
      800: '#3730a3',
    },
    teal: {
      100: '#ccfbf1',
      800: '#115e59',
    },
    orange: {
      100: '#fed7aa',
      800: '#9a3412',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    default: '0.2s ease-in-out',
    fast: '0.15s ease-in-out',
  },
};

export type Theme = typeof theme;