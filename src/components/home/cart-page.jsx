


import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useContext, useEffect, useRef } from "react";
import { CartProvider, useCart } from "react-use-cart";

import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "../../context/products";
import { CartDispatchContext, addToCart } from "../../context/cart";

import ProductCard from "../../components/home/Product";



export const CartPage = ({ data, props }) => (


  <div className="home_body">
    <div className="products-wrapper">
    <div className="products">
    {data?.map((ev) => (
     
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <a className="card" href={`/events/${ev.id}`}>
          <div className="image">
            <Image width={600} height={400} alt={ev.title} src={ev.image} />
          </div>
          <ProductCard key={ev.id} ev={ev}></ProductCard>
          
          
        </a>

     
      </Link>

    ))}
</div>
    </div>
    </div>
)
