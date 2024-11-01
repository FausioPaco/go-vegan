import Meta from '@components/Meta';
import Hero from '@layouts/Hero';

const Home = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Where Vegan Cuisine Excels Without Sacrificing Taste!"
        description="Where Vegan Cuisine Excels Without Sacrificing Taste!"
      />
      <main className="flex-1">
        <Hero backgroundImage="hero">
          <h1>Hello Hero Message</h1>
        </Hero>

        {/* Hero Section Here */}
        <h1>Hello Home</h1>
      </main>
    </>
  );
};

export default Home;
