import { type ChangeEvent, type ReactElement, useState } from 'react'

type GreetingProps =  BasicHtmlPropType & {
  defaultName?: string;
}

const DEFAULT_PROMPT = "What's your name?"

const formatGreeting = (rawName: string): string => {
  const trimmedName = rawName.trim()
  return trimmedName ? `Hello! ${trimmedName}` : ''
}

export default function Greeting({ className, defaultName = '' }: GreetingProps): ReactElement {
  const [name, setName] = useState<string>(defaultName)
  const [message, setMessage] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleGreet = () => {
    setMessage(formatGreeting(name))
  }

  return (
    <div className={className}>
      <label htmlFor="greeting-name"/>
      <input
        id="greeting-name"
        placeholder={DEFAULT_PROMPT}
        value={name}
        onChange={handleChange}
      />
      <button type="button" onClick={handleGreet} disabled={!name.trim()}>
        Greet
      </button>
      <p aria-live="polite">{message}</p>
    </div>
  )
}

export { DEFAULT_PROMPT, formatGreeting }
