import { Icon } from '@/components/ui/icon';
import { IconName } from '@/types/Icon';
import { PlantXL, PlantLG, PlantDraw } from '@/components/ui/ilustrations';

type BeliefItem = {
  id: number;
  icon: IconName;
  title: string;
  description: string;
};

const AboutBeliefs = () => {
  const BELIEFS_LIST = [
    {
      id: 1,
      icon: 'healthcare',
      title: 'Wellbeing and Health',
      description:
        'We prioritize well-being and health through nutritious and balanced dishes that nourish the body and mind',
    },
    {
      id: 2,
      icon: 'animals',
      title: 'Animal Ethics',
      description:
        'We believe in the importance of treating all beings with compassion and respect. Our dishes are an expression of our commitment to animal ethics',
    },
    {
      id: 3,
      icon: 'eco-friendly',
      title: 'Environmental Sustainability',
      description:
        'We are committed to environmental sustainability, using locally sourced ingredients and practices that respect the environment, aiming to minimize the negative impact on the planet',
    },
    {
      id: 4,
      icon: 'better-world',
      title: 'Contribution to a Better World',
      description:
        'We aspire to contribute to a better world, encouraging conscious choices and promoting a diet that is beneficial for the individual and the planet',
    },
  ] as BeliefItem[];

  return (
    <section
      id="about-beliefs"
      className="relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-primary-25 pb-24 pt-8"
    >
      <div className="mb-8 mt-8 flex w-full flex-col items-center text-center md:mb-16">
        <h2 className="mb-2 font-sans text-sm font-bold text-primary-600">
          MAIN REASONS
        </h2>
        <h3 className="text-3xl font-bold text-grey-600 md:text-4xl">
          What we believe
        </h3>
        <p className="mt-4 max-w-[480px] md:max-w-[640px]">
          We believe that every meal is an opportunity to make a difference, and
          every ingredient is an opportunity to show respect for the environment
          and all forms of life
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:gap-16">
        {BELIEFS_LIST.map((belief) => {
          return (
            <div
              key={belief.id}
              className="flex flex-col items-center gap-y-2 md:flex-row md:items-start md:gap-x-4 md:gap-y-0"
            >
              <div className="flex size-[84px] items-center justify-center rounded-full bg-primary-50/50 p-2 text-primary-600">
                <Icon
                  name={belief.icon}
                  className="size-[48px] fill-primary-600"
                />
              </div>

              <div className="mt-2 text-center md:text-left">
                <h4 className="mb-2 text-xl font-semibold">{belief.title}</h4>
                <p className="max-w-[320px] md:max-w-[440px]">
                  {belief.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <PlantXL className="absolute bottom-[20%] hidden opacity-25 md:right-[-40px] md:block" />
      <PlantDraw className="absolute top-[10%] hidden rotate-45 opacity-25 md:left-[420px] lg:block" />
      <PlantLG
        width={58}
        height={65}
        className="absolute top-[20%] hidden opacity-25 md:right-[320px] lg:block"
      />
    </section>
  );
};

export default AboutBeliefs;
