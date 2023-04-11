import Link from 'next/link';
import Image from 'next/image';
// import Cart from "../../../pages/_app"
// import { handleClientScriptLoad } from 'next/script';
import { useSelector, useDispatch } from 'react-redux';

import { ShoppingBasket } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import { Nav } from 'rsuite';
import Home from "../../../pages/index"
import Carta from "../../../pages/Carta"
import SearchBar from '../../../pages/SearchBar';


export const Header = () => {





  const { cart } = useSelector((state) => state);


  return (
    <header>

      <div className="relative">

        <Link href="/Carta" passHref>
          <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

        </Link>
        {cart.length > 0 && (
          <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
            {cart.length}
          </div>

        )}

        <SearchBar />
      </div>
      <div>
        <div className="topNav">
          <Link href="/" passHref>
            <Image id="foo" alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          </Link>
          <nav >
            <ul className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              <li>
                <Link href="/" passHref>
                  {/* <a>Home</a> */}
                  <Home />
                </Link>
              </li >
              <li>
                <Link href="/events" passHref>
                  <a>   Products </a>
                </Link>
              </li>
              <li   >
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
              <li   >
                <Link href="/login" passHref>
                  <a> Login</a>
                </Link>
              </li>
              <li  >
                <Link href="/signup" passHref>
                  <a> Signup</a>
                </Link>
              </li>
              <li >

                <Link href="/" passHref>
                  <a>Home</a>
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
