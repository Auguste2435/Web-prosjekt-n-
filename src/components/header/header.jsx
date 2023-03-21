import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {

  return (
    <header>
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            <Image id="foo" alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a> Home </a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a>   Products </a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
              <li>
                <Link href="/login" passHref>
                  <a> Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup" passHref>
                  <a> Signup</a>
                </Link>
              </li>
              <li>
                <Link href="/cart" passHref>
                  <a> Cart</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Food shop</p>
      </div>
    </header>
  );
};
