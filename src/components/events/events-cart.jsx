import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartItems = ({ data }) => {
  return (
    <div className="cart_items">
        
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card">
            <Image src={ev.image} alt={ev.title} width={500} height={500} /> <h2>{ev.title} </h2>
            <Link href="/cart" passHref>
              <Image id="foo" alt="logo" src={'/images/shopping-cart.png'} width={50} height={50}>
              </Image>
            </Link>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CartItems;