import Head from 'next/head';
import Image from 'next/image';
import CategoryHeader from '../components/CategoryHeader';
import Header from '../components/Header';
import { Divider } from '@chakra-ui/react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" text-white  ">
        <Header />
        <CategoryHeader />
        <Divider className="bg-black pt-[0.4px]" />
        <Hero />
      </div>
    </div>
  );
}
