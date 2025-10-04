import { type ReactElement, type ReactNode } from 'react'
import './Banner.css'

interface BannerProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'success' | 'error'
  className?: string
}

export default function Banner({ 
  children, 
  variant = 'info',
  className = ''
}: BannerProps): ReactElement {
  return (
    <aside 
      role="alert" 
      aria-live="polite"
      className={`banner banner--${variant} ${className}`}
    >
      {children}
    </aside>
  )
}

export { Banner }
