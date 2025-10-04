import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Greeting, { DEFAULT_PROMPT } from './Greeting'

describe('Greeting', () => {
  test('greets the provided name when clicking the Greet button', async () => {
    const user = userEvent.setup()

    render(<Greeting />)

    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)
    await user.type(input, 'foo')
    await user.click(screen.getByRole('button', { name: /greet/i }))

    expect(screen.getByText('Hello! foo')).toBeInTheDocument()
  })

  test('does not display a message when clicking button with empty input', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const button = screen.getByRole('button', { name: /greet/i })

    await user.click(button)

    // Message should be empty, not a greeting
    expect(screen.queryByText(/Hello!/)).not.toBeInTheDocument()
  })

  test('does not display a message when clicking button with only whitespace in input', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)
    const button = screen.getByRole('button', { name: /greet/i })

    await user.type(input, '   ')
    await user.click(button)

    // Message should be empty, not a greeting
    expect(screen.queryByText(/Hello!/)).not.toBeInTheDocument()
  })

  test('button is disabled when input is empty', () => {
    render(<Greeting />)
    const button = screen.getByRole('button', { name: /greet/i })

    expect(button).toBeDisabled()
  })

  test('button becomes enabled when user types text', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)
    const button = screen.getByRole('button', { name: /greet/i })

    expect(button).toBeDisabled()

    await user.type(input, 'John')

    expect(button).toBeEnabled()
  })

  test('button becomes disabled when user deletes all text', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)
    const button = screen.getByRole('button', { name: /greet/i })

    await user.type(input, 'Hi')
    expect(button).toBeEnabled()

    await user.clear(input)
    expect(button).toBeDisabled()
  })

  test('button remains disabled when input only contains whitespace', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)
    const button = screen.getByRole('button', { name: /greet/i })

    await user.type(input, '   ')

    expect(button).toBeDisabled()
  })

  test('submits greeting when pressing Enter key', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)

    await user.type(input, 'Alice')
    await user.keyboard('{Enter}')

    expect(screen.getByText('Hello! Alice')).toBeInTheDocument()
  })

  test('does not submit when pressing Enter with empty input', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)

    // Focus the input and press Enter
    input.focus()
    await user.keyboard('{Enter}')

    expect(screen.queryByText(/Hello!/)).not.toBeInTheDocument()
  })

  test('does not submit when pressing Enter with only whitespace', async () => {
    const user = userEvent.setup()

    render(<Greeting />)
    const input = screen.getByPlaceholderText(DEFAULT_PROMPT)

    await user.type(input, '   ')
    await user.keyboard('{Enter}')

    expect(screen.queryByText(/Hello!/)).not.toBeInTheDocument()
  })
})
