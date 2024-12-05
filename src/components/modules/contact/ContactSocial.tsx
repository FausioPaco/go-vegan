import { Icon } from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ContactSocial = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="mb-2 text-sm text-grey-500">Where you can find us</p>
      <div className="flex items-center gap-x-4">
        <div className="rounded-full bg-primary-25/50 p-2">
          <Icon
            name="contact-location"
            width={24}
            height={24}
            className="fill-primary-800"
          />
        </div>

        <p className="text-lg font-medium">
          Avenue Julius Nyerere, Maputo nº 12
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="rounded-full bg-primary-25/50 p-2">
          <Icon name="contact-email" className="fill-primary-800" />
        </div>

        <p className="text-lg font-medium">support@govegan.co.mz</p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="rounded-full bg-primary-25/50 p-2">
          <Icon
            name="contact-phone"
            className="fill-primary-800"
            width={24}
            height={24}
          />
        </div>

        <p className="text-lg font-medium">(+258) 82900000 </p>
      </div>
      <div className="mt-2">
        <p className="mb-4 text-sm text-grey-500">Our social media</p>
        <div className="flex items-center gap-x-4">
          <Link to="/#">
            <Icon name="facebook" className="fill-primary-800" />
          </Link>
          <Link to="/#">
            <Icon name="instagram" className="fill-primary-800" />
          </Link>
          <Link to="/#">
            <Icon name="twitter" className="fill-primary-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSocial;
