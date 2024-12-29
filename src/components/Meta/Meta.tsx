import { useEffect } from 'react';

type MetaProps = {
  title: string;
  name: string;
  description: string;
};

const Meta = ({ title, name, description }: MetaProps) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let metaDescription = document.querySelector(`meta[name=${name}]`);
      if (!metaDescription) {
        metaDescription = document.createElement('meta') as HTMLMetaElement;
        metaDescription.setAttribute('name', name);

        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute('description', description);
    }
  }, [title, name, description]);

  return null;
};

export default Meta;
