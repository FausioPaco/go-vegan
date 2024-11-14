import { useState } from 'react';
import Meta from '@/components/meta';
import Hero from '@layouts/Hero';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';

const Home = () => {
  const [optionSelected, setOptionSelected] = useState('');
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ];

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
          <Button variant="primary" className="mb-2 ml-4">
            Hello Button
          </Button>

          <Select
            id="option"
            label="Options"
            options={options}
            value={optionSelected}
            onChange={(event) => setOptionSelected(event.target.value)}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
