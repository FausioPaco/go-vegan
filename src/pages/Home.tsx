import Meta from '@/components/meta';
import Hero from '@layouts/Hero';
import { Button } from '@/components/ui/Button';

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

        <div className="container my-8">
          <Button variant="primary" className="ml-4">
            Hello Button
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
