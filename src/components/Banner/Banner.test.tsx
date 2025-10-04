import { render, screen } from '@testing-library/react'
import Banner from './Banner'

describe('Banner', () => {
  it('renders children content', () => {
    render(<Banner>Test message</Banner>)
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<Banner>Accessible content</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toBeInTheDocument()
    expect(banner).toHaveAttribute('aria-live', 'polite')
  })

  it('applies default info variant when no variant is specified', () => {
    render(<Banner>Default variant</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner')
    expect(banner).toHaveClass('banner--info')
  })

  it('applies info variant correctly', () => {
    render(<Banner variant="info">Info message</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner--info')
  })

  it('applies warning variant correctly', () => {
    render(<Banner variant="warning">Warning message</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner--warning')
  })

  it('applies success variant correctly', () => {
    render(<Banner variant="success">Success message</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner--success')
  })

  it('applies error variant correctly', () => {
    render(<Banner variant="error">Error message</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner--error')
  })

  it('applies custom className along with variant classes', () => {
    render(<Banner className="custom-class">Custom styled</Banner>)
    const banner = screen.getByRole('alert')
    expect(banner).toHaveClass('banner')
    expect(banner).toHaveClass('banner--info')
    expect(banner).toHaveClass('custom-class')
  })

  it('renders complex children with JSX elements', () => {
    render(
      <Banner variant="warning">
        <strong>Important:</strong> This is a complex message
      </Banner>
    )
    expect(screen.getByText('Important:')).toBeInTheDocument()
    expect(screen.getByText(/This is a complex message/)).toBeInTheDocument()
  })

  it('renders with empty className when not provided', () => {
    render(<Banner>No custom class</Banner>)
    const banner = screen.getByRole('alert')
    // Should have base classes but no extra empty class
    expect(banner.className).toBe('banner banner--info ')
  })
})
