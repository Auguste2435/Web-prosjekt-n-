import Link from 'next/link';
import Image from 'next/image';
// import Cart from "../../../pages/_app"
// import { handleClientScriptLoad } from 'next/script';
import { useSelector, useDispatch } from 'react-redux';


export const Header = () => {
  
  
  return (
    <header>
      <div className="container">      <h2>Search products</h2>      <input id="searchbar" autocomplete="off" onkeyup="search()" type="text" name="search" placeholder="What are you looking for?" onload="loadSearchData()" />      <div id="list">               </div>      </div>
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            <Image id="foo" alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a>Home</a>
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
                  <a>Cart</a>
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
