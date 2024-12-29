import { ButtonLink } from '@/components/ui/button';
import { PlantLG, PlantXL } from '@/components/ui/ilustrations';

const FaqsPersistent = () => {
  return (
    <section
      id="faqs-persistent"
      className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-primary-25"
    >
      <div className="mb-6 flex w-full flex-col items-center gap-y-8 text-center">
        <h2 className="font-serif text-4xl font-bold text-primary-700 md:text-5xl">
          Still have questions?
        </h2>
        <p className="max-w-[980px] text-xl leading-relaxed text-primary-800 md:text-2xl">
          Didn't find the answer to your question? Do not hesitate to contact us
          through our communication channels. We are here to help and will be
          happy to answer your questions
        </p>
        <ButtonLink href="/contact" size="md" variant="secondary">
          Contact us
        </ButtonLink>
      </div>

      <PlantLG className="absolute top-[20%] hidden opacity-25 md:right-[-20px] lg:block" />
      <PlantXL className="absolute top-[20%] hidden opacity-25 md:left-[-40px] md:block" />
      <PlantLG
        width={58}
        height={65}
        className="absolute top-[60%] hidden opacity-25 md:right-[15%] md:block"
      />
    </section>
  );
};

export default FaqsPersistent;
