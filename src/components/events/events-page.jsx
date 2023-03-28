import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">

      {data?.map((ev) => (

        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card">
            <Image id="foo" alt="logo" src={'/images/shopping-cart.png'} width={50} height={50}></Image>
            <Image src={ev.image} alt={ev.title} width={500} height={500} /> <h2>{ev.title} </h2>

          </a>

        </Link>

      ))}
    </div>
  );
};
// export async function getStaticProps() {
//   const data = await getProducts();
//   return { props: { data } };
// }
// export default AllEvents;