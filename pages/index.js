import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';
import { useLocation, useNavigate } from 'react-router-dom'
import Link from 'next/link';


export default function Home({ data }) {
  // const location = useLocation('')
  return (

    <div className='homepage'>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
