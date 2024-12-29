import reactLogo from '../src/assets/react.svg'
import '../src/index.css'
export default function Header() {
  return (
    <>
      <nav>
        <img src={reactLogo} alt="React Logo" />
        <ul className="box">
          <li>Pricing</li>
          <li>About</li>
          <li>List Items</li>
        </ul>
      </nav>
    </>
  );
}
