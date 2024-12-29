import { motion } from 'motion/react';

const LoadingPage = () => {
  return (
    <motion.div
      className="flex flex-1 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
      }}
    >
      <div className="flex h-full animate-blink flex-col items-center justify-center gap-y-4">
        <svg
          width="59"
          height="71"
          viewBox="0 0 59 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.42196 53.8589C1.82988 49.8101 -0.39971 42.3349 1.44015 35.696C2.8631 30.5475 6.15309 26.0079 10.0957 22.5043C13.005 19.9142 16.2859 18.4555 19.8388 16.9923C26.6725 14.1931 33.896 12.4572 40.6301 9.40813C45.343 7.26329 49.8385 4.81399 54.1526 1.96027C55.2946 1.21049 55.2402 1.17868 56.4366 0.528865C56.7538 0.360732 57.1707 -0.193635 57.4245 0.0699252C58.5665 1.2514 57.787 4.52319 57.7145 5.80464C57.5151 10.008 57.2432 14.1704 56.935 18.3737C56.6994 21.8818 56.491 25.4171 55.4759 28.798C51.7055 41.4897 42.0802 49.3693 30.2888 54.2133C26.2918 55.8538 22.3856 56.6081 18.0714 56.7308C15.1349 56.8126 12.1712 56.649 9.59717 55.1449"
            fill="#5F793A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.37397 70.4895C3.8392 61.0695 8.4162 52.5493 14.4796 45.2151C20.5702 37.8672 28.1471 31.7144 36.5489 27.0794C36.8842 26.884 36.993 26.466 36.8117 26.1342C36.6304 25.7843 36.1954 25.6753 35.8691 25.8571C27.3133 30.5739 19.6004 36.8402 13.4101 44.338C7.21981 51.8131 2.54315 60.5106 0.0235386 70.126C-0.0761583 70.5032 0.150426 70.8758 0.522023 70.9758C0.893621 71.0757 1.27427 70.8531 1.37397 70.4895Z"
            fill="#445A23"
          />
        </svg>
        <p className="font-bold text-primary-800">Please wait...</p>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
