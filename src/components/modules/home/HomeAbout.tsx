import { Icon } from '@/components/ui/icon';

const HomeAbout = () => {
  return (
    <section
      id="home-about"
      className="flex min-h-[900px] w-full flex-col items-center justify-center bg-white py-8 md:flex-row"
    >
      <div className="flex w-full flex-col items-center text-left md:w-2/3">
        <div className="pl-3">
          <h2 className="mb-2 text-left font-sans text-sm font-bold text-primary-600">
            ABOUT US
          </h2>
          <h3 className="text-left font-serif text-4xl font-bold text-grey-600 md:text-5xl">
            Passion for Vegan Cuisine
          </h3>
          <p className="mt-4 max-w-[700px] text-base text-grey-700/70">
            We believe that plant-based eating promotes a healthier lifestyle by
            providing delicious and nutritious options for our customers.
          </p>
          <div className="mt-4 w-full">
            <p className="mb-4 text-sm font-bold text-grey-500">
              Our main reasons
            </p>

            <div className="mb-4 flex flex-col gap-y-4">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-secondary-25/50 p-2 text-secondary-600">
                  <Icon name="healthcare" className="fill-secondary-600" />
                </div>

                <p className="text-lg font-medium"> Wellbeing and Health</p>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-secondary-25/50 p-2 text-secondary-600">
                  <Icon name="animals" className="fill-secondary-600" />
                </div>

                <p className="text-lg font-medium">Animal Ethics</p>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-secondary-25/50 p-2 text-secondary-600">
                  <Icon name="eco-friendly" className="fill-secondary-600" />
                </div>

                <p className="text-lg font-medium">
                  Environmental Sustainability
                </p>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-secondary-25/50 p-2 text-secondary-600">
                  <Icon name="better-world" className="fill-secondary-600" />
                </div>

                <p className="text-lg font-medium">
                  Contribution to a Better World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 w-full md:w-1/3">
        <img
          src="/home/passion-cuisine.jpg"
          width={465}
          height={653}
          alt="Vegan Plate"
          className="mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default HomeAbout;
