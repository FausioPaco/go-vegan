import { useState } from 'react';
import ThankYouMessage from '../messages/ThankYouMessage';
import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';

type VisibleContent = 'form' | 'thanks';

const ContactContent = () => {
  const [visibleContent, setVisibleContent] = useState<VisibleContent>('form');

  return (
    <section
      id="contact"
      className="my-8 flex flex-col justify-center gap-y-4 md:flex-row md:gap-x-72 md:gap-y-0"
    >
      {visibleContent === 'form' ? (
        <ContactForm onFinish={() => setVisibleContent('thanks')} />
      ) : (
        <ThankYouMessage
          title="Thanks!"
          message="Your message has been sent successfully. We will contact you as soon as possible."
          onClose={() => setVisibleContent('form')}
        />
      )}

      <ContactSocial />
    </section>
  );
};

export default ContactContent;
