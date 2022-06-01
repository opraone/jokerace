import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
// CTA looking element (like button and links)
export const button = cva(
  [
    'inline-flex items-center justify-center',
    'tracking-wide',
    'rounded-full',
    'transition-colors transition-500',
    'disabled:opacity-50 disabled:pointer-events-none'
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-primary-10 hover:bg-primary-9 focus:bg-primary-11 hover:focus:bg-opacity-95',
          'text-primary-3',
          'border-transparent',
        ],
        'neutral': [
          'bg-neutral-2',
          'text-true-white',
          'border-transparent'
        ],
        'neutral-outline': [
            'bg-true-white bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-100 hover:focus:bg-opacity-95',
            'text-true-white focus:text-true-black',
            'border-neutral-10 hover:border-neutral-11 hover:focus:border-neutral-12 focus:border-true-white',
        ],
      },
      size: {
        default: ['text-xs', 'py-2 px-4 sm:px-5', 'font-bold', 'border'],
        sm: ['text-2xs', 'py-2 px-2.5', 'font-bold', 'border']
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
  },
)

export type SystemUiButtonProps = VariantProps<typeof button>

export default button