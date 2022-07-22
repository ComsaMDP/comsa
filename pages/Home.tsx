import { Header } from '../components/Header';
import heroBackground from '../assets/hero_background.png';
import Image from 'next/image';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Image src={heroBackground} alt="pest control" objectFit="cover" />
        <div className="bgred w-2 h-screen" />
        <div className="bg-blue-500 w-2 h-screen" />
      </main>
    </>
  );
};
