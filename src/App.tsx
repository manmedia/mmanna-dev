import Greeting from "./components/Greeting";
import Banner from "./components/Banner";
import javascriptLogo from "./javascript.svg";

export default function App() {
  return (
    <div>
      <Banner variant="warning">
        🚧 <strong>Site Under Construction</strong> 🚧
      </Banner>
      
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
      >
        <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello, Welcome to this simple site!</h1>
      <Greeting className="card" defaultName="Alice" />
    </div>
  );
}
