// Components.
import { Big } from '../typography';
import HamburgerMenu from './HamburgerMenu';

// This navbar is used for the entire app.
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <Big className="z-50">Zain Ul Abdin</Big>

      <HamburgerMenu />
    </nav>
  );
}
