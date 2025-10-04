import { type ChangeEvent, type KeyboardEvent, type ReactElement, useState } from 'react'
import './Greeting.css'

type GreetingProps =  BasicHtmlPropType & {
  defaultName?: string;
  buttonLabel?: string;
}

const DEFAULT_PROMPT = "What's your name?"
const DEFAULT_BUTTON_LABEL = 'Register'

const formatGreeting = (rawName: string): string => {
  const trimmedName = rawName.trim()
  return trimmedName ? `Hello! ${trimmedName}` : ''
}

export default function Greeting({ className, defaultName = '', buttonLabel = DEFAULT_BUTTON_LABEL }: GreetingProps): ReactElement {
  const [name, setName] = useState<string>(defaultName)
  const [message, setMessage] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleGreet = () => {
    setMessage(formatGreeting(name))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && name.trim()) {
      handleGreet()
    }
  }

  return (
    <div className={`greeting-container ${className || ''}`}>
      <label htmlFor="greeting-name"/>
      <input
        id="greeting-name"
        placeholder={DEFAULT_PROMPT}
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleGreet} disabled={!name.trim()}>
        {buttonLabel}
      </button>
      <p aria-live="polite">{message}</p>
    </div>
  )
}

export { DEFAULT_PROMPT, DEFAULT_BUTTON_LABEL, formatGreeting }
