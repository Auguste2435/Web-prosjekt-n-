import Image from 'next/image';
import { useRouter } from 'next/router';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";
import addToCart from '../../../redux/cart.slice';
// import "../styles/cart.css";
import { useSelector, useDispatch } from 'react-redux';


const SingleEvent = ({ data }) => {
  const loli = useSelector((state) => state.loli);

  // Getting the count of items
  const getItemsCount = () => {
    return loli.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <h3>$ {data.price}</h3>
      <button
        onClick={() => dispatch(addToCart(data.title))}
        className="styles-button"
      >
        Add to Cart
      </button>
      <form onSubmit={onSubmit} className="email_registration">
        <label> Add product to shopping cart</label>


        <Link href="/cart" passHref>
          <Image id="foo" alt="logo" src={'/images/shopping-cart.png'} width={50} height={50}></Image>

        </Link>
        <button

        >
          Add to Cart
        </button>



        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>



    </div>
  );
};

export default SingleEvent;