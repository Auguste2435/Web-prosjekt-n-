import Image from 'next/image';
import { useRouter } from 'next/router';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";
import addToCart from '../../../redux/cart.slice';
// import "../styles/cart.css";
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from "../../../redux/cart.slice";

import { useSnackbar } from "notistack";
import Product from "../../../pages/Product";


const SingleEvent = ({ data }) => {


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
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        <Product key={data.id} data={data} />
      </div>
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