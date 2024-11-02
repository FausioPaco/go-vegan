import { Icon } from '@/components/ui/Icon';
import Meta from '@/components/meta';
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
        <h1>
          Hello Home <Icon name="animals" />
        </h1>
      </main>
    </>
  );
};

export default Home;
