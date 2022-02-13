import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// @ts-ignore
const DummyPage = dynamic(() => import('DummyPage/DummyPage'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Home: NextPage = () => {
  return (
    <>
      <div>test</div>
      <DummyPage />
    </>
  );
};

export default Home;
