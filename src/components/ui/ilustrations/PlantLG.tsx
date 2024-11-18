import { IlustrationProps } from '@/types/Ilustration';

export const PlantLG = ({ className, ...props }: IlustrationProps) => {
  return (
    <svg
      width="111"
      height="135"
      viewBox="0 0 111 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1123 102.408C3.4794 94.7094 -0.759955 80.4961 2.73837 67.8727C5.44398 58.0833 11.6996 49.4516 19.196 42.79C24.7279 37.865 30.9663 35.0915 37.7217 32.3094C50.7155 26.987 64.4503 23.6863 77.2545 17.8887C86.2158 13.8105 94.7634 9.15337 102.966 3.72728C105.138 2.30163 105.034 2.24115 107.309 1.00559C107.912 0.6859 108.705 -0.368179 109.188 0.132957C111.359 2.37943 109.877 8.60044 109.739 11.037C109.36 19.0292 108.843 26.9437 108.257 34.936C107.809 41.6062 107.413 48.3284 105.482 54.7568C98.3135 78.889 80.0118 93.8713 57.5915 103.082C49.9917 106.201 42.5642 107.635 34.3612 107.869C28.7777 108.024 23.1424 107.713 18.2482 104.853"
        fill="#5F793A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.61248 134.03C7.2999 116.118 16.0027 99.9181 27.5316 85.9727C39.1123 72.0013 53.5192 60.3024 69.4944 51.4893C70.132 51.1177 70.3388 50.3229 69.9941 49.6921C69.6495 49.0268 68.8223 48.8195 68.2019 49.1651C51.9338 58.1337 37.2683 70.0486 25.4981 84.305C13.7278 98.5183 4.83557 115.056 0.0447566 133.339C-0.144808 134.056 0.286021 134.764 0.99258 134.954C1.69914 135.144 2.42292 134.721 2.61248 134.03Z"
        fill="#445A23"
      />
    </svg>
  );
};
