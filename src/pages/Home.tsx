import { useState } from 'react';
import Meta from '@/components/meta';
import Hero from '@layouts/Hero';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const Home = () => {
  const [optionSelected, setOptionSelected] = useState('');
  const [data, setData] = useState('');
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

        <div className="flex w-full justify-center">
          <div className="my-8 flex w-[300px] flex-col justify-center">
            <Button variant="primary">Hello Button</Button>

            <Select
              id="option"
              label="Options"
              options={options}
              value={optionSelected}
              onChange={(event) => setOptionSelected(event.target.value)}
            />
            <Input
              id="labelId"
              label="Label"
              placeholder="Example Place"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
