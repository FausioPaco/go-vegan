const AboutStory = () => {
  return (
    <section
      id="about-story"
      className="flex w-full flex-col justify-center px-2 py-10 md:flex-row"
    >
      <div className="flex w-full flex-col items-center md:w-1/2">
        <div className="my-2 text-left">
          <h2 className="mb-2 font-sans text-sm font-bold text-primary-600">
            OUR STORY
          </h2>
          <h3 className="text-3xl font-bold text-grey-700 md:text-4xl">
            How was the restaurant born?
          </h3>
          <p className="mt-4">
            Go Vegan was born from a shared passion for delicious, healthy food
            that doesn't compromise the planet. Since our opening in 2021, we
            have been proud to offer creative and nutritious vegan dishes that
            delight palates and support a healthy, sustainable lifestyle.
          </p>

          <h3 className="mt-8 text-2xl font-bold text-grey-700 md:text-3xl">
            Why Vegan?
          </h3>
          <p className="mt-4">
            At Go Vegan, we believe that every choice counts. Our vegan approach
            is not just limited to delicious dishes, but also reflects our
            commitment to health, animal welfare and protecting the environment.
            Each meal is carefully designed to offer a dining experience that is
            kind to the body and the planet.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center px-2 md:w-1/2">
        <img
          src="/about/about-restaurant.jpg"
          className="rounded-md"
          alt="Men cooking vegan food"
          width={679}
          height={573}
        />
      </div>
    </section>
  );
};

export default AboutStory;
