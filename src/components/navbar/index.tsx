// Components.
import H2 from '../typography';
import HamburgerMenu from './HamburgerMenu';

// This navbar is used for the entire app.
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <H2 className="z-50">Zain Ul Abdin</H2>

      <HamburgerMenu />
    </nav>
  );
}
