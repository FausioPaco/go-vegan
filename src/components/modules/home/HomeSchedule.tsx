import {
  PlantSM,
  PlantXL,
  PlantLG,
  PlantDraw,
} from '@/components/ui/ilustrations';

const HomeSchedule = () => {
  return (
    <section
      id="home-schedule"
      className="relative flex min-h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-primary-25"
    >
      <div className="mb-6 flex w-full flex-col items-center text-center">
        <h2 className="mb-2 font-sans text-sm font-bold text-primary-600">
          SCHEDULES
        </h2>
        <h3 className="font-serif text-4xl font-bold text-grey-600 md:text-5xl">
          Opening Hours
        </h3>
      </div>

      <div className="mt-6 flex w-full flex-col px-4 md:max-w-[500px]">
        <h4 className="font-sans text-3xl font-bold text-primary-700">
          Winter Hours
        </h4>
        <dl className="mt-4 divide-y divide-primary-700/20">
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Monday - Friday</dt>
            <dd className="text-lg text-grey-700">8h00 - 22h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Saturday</dt>
            <dd className="text-lg text-grey-700">9h00 - 22h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Sunday</dt>
            <dd className="text-lg text-grey-700">9h00 - 21h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Holidays</dt>
            <dd className="text-lg text-grey-700">10h00 - 15h00</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex w-full flex-col px-4 md:max-w-[500px]">
        <h4 className="font-sans text-3xl font-bold text-primary-700">
          Summer Opening Hours
        </h4>
        <dl className="mt-4 divide-y divide-primary-700/20">
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Monday - Friday</dt>
            <dd className="text-lg text-grey-700">8h00 - 23h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Saturday</dt>
            <dd className="text-lg text-grey-700">9h00 - 23h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Sunday</dt>
            <dd className="text-lg text-grey-700">9h00 - 22h00</dd>
          </div>
          <div className="flex w-full justify-between py-3">
            <dt className="text-lg text-grey-700">Holidays</dt>
            <dd className="text-lg text-grey-700">10h00 - 16h00</dd>
          </div>
        </dl>
      </div>

      <PlantXL className="absolute top-[20%] hidden opacity-25 md:left-[-40px] md:block" />
      <PlantSM className="absolute bottom-[20%] hidden rotate-180 opacity-25 lg:left-[120px] lg:block" />
      <PlantLG className="absolute top-[20%] hidden opacity-25 md:right-[-20px] lg:block" />
      <PlantLG
        width={58}
        height={65}
        className="absolute top-[40%] hidden opacity-25 md:right-[420px] lg:block"
      />
      <PlantDraw className="absolute bottom-[10%] hidden opacity-25 md:right-[420px] lg:block" />
    </section>
  );
};

export default HomeSchedule;
