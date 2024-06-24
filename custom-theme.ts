import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
  name: 'custom-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-color-base': 'var(--color-surface-900)',
    '--theme-font-color-dark': 'var(--color-surface-50)',
    '--theme-rounded-base': '8px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '2px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #2d48d2
    '--color-primary-50': '224 228 248', // #e0e4f8
    '--color-primary-100': '213 218 246', // #d5daf6
    '--color-primary-200': '203 209 244', // #cbd1f4
    '--color-primary-300': '171 182 237', // #abb6ed
    '--color-primary-400': '108 127 224', // #6c7fe0
    '--color-primary-500': '45 72 210', // #2d48d2
    '--color-primary-600': '41 65 189', // #2941bd
    '--color-primary-700': '34 54 158', // #22369e
    '--color-primary-800': '27 43 126', // #1b2b7e
    '--color-primary-900': '22 35 103', // #162367
    // secondary | #2dd2b7
    '--color-secondary-50': '224 248 244', // #e0f8f4
    '--color-secondary-100': '213 246 241', // #d5f6f1
    '--color-secondary-200': '203 244 237', // #cbf4ed
    '--color-secondary-300': '171 237 226', // #abede2
    '--color-secondary-400': '108 224 205', // #6ce0cd
    '--color-secondary-500': '45 210 183', // #2dd2b7
    '--color-secondary-600': '41 189 165', // #29bda5
    '--color-secondary-700': '34 158 137', // #229e89
    '--color-secondary-800': '27 126 110', // #1b7e6e
    '--color-secondary-900': '22 103 90', // #16675a
    // tertiary | #b72dd2
    '--color-tertiary-50': '244 224 248', // #f4e0f8
    '--color-tertiary-100': '241 213 246', // #f1d5f6
    '--color-tertiary-200': '237 203 244', // #edcbf4
    '--color-tertiary-300': '226 171 237', // #e2abed
    '--color-tertiary-400': '205 108 224', // #cd6ce0
    '--color-tertiary-500': '183 45 210', // #b72dd2
    '--color-tertiary-600': '165 41 189', // #a529bd
    '--color-tertiary-700': '137 34 158', // #89229e
    '--color-tertiary-800': '110 27 126', // #6e1b7e
    '--color-tertiary-900': '90 22 103', // #5a1667
    // success | #48d22d
    '--color-success-50': '228 248 224', // #e4f8e0
    '--color-success-100': '218 246 213', // #daf6d5
    '--color-success-200': '209 244 203', // #d1f4cb
    '--color-success-300': '182 237 171', // #b6edab
    '--color-success-400': '127 224 108', // #7fe06c
    '--color-success-500': '72 210 45', // #48d22d
    '--color-success-600': '65 189 41', // #41bd29
    '--color-success-700': '54 158 34', // #369e22
    '--color-success-800': '43 126 27', // #2b7e1b
    '--color-success-900': '35 103 22', // #236716
    // warning | #d2b72d
    '--color-warning-50': '248 244 224', // #f8f4e0
    '--color-warning-100': '246 241 213', // #f6f1d5
    '--color-warning-200': '244 237 203', // #f4edcb
    '--color-warning-300': '237 226 171', // #ede2ab
    '--color-warning-400': '224 205 108', // #e0cd6c
    '--color-warning-500': '210 183 45', // #d2b72d
    '--color-warning-600': '189 165 41', // #bda529
    '--color-warning-700': '158 137 34', // #9e8922
    '--color-warning-800': '126 110 27', // #7e6e1b
    '--color-warning-900': '103 90 22', // #675a16
    // error | #d22d48
    '--color-error-50': '248 224 228', // #f8e0e4
    '--color-error-100': '246 213 218', // #f6d5da
    '--color-error-200': '244 203 209', // #f4cbd1
    '--color-error-300': '237 171 182', // #edabb6
    '--color-error-400': '224 108 127', // #e06c7f
    '--color-error-500': '210 45 72', // #d22d48
    '--color-error-600': '189 41 65', // #bd2941
    '--color-error-700': '158 34 54', // #9e2236
    '--color-error-800': '126 27 43', // #7e1b2b
    '--color-error-900': '103 22 35', // #671623
    // surface | #292424
    '--color-surface-50': '223 222 222', // #dfdede
    '--color-surface-100': '212 211 211', // #d4d3d3
    '--color-surface-200': '202 200 200', // #cac8c8
    '--color-surface-300': '169 167 167', // #a9a7a7
    '--color-surface-400': '105 102 102', // #696666
    '--color-surface-500': '41 36 36', // #292424
    '--color-surface-600': '37 32 32', // #252020
    '--color-surface-700': '31 27 27', // #1f1b1b
    '--color-surface-800': '25 22 22', // #191616
    '--color-surface-900': '20 18 18' // #141212
  }
};
