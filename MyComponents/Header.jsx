import chefIcon from './cheficon.png'
import './header.css' 
export default function Header() {
  return (
    <>
      <header>
        <img src={chefIcon} alt="Icon Logo" />
        <h2>Chef Claude</h2>
      </header>
    </>
  );
}
