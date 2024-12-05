import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';
const ContactContent = () => {
  return (
    <section
      id="contact"
      className="my-8 flex flex-col justify-center gap-y-4 md:flex-row md:gap-x-72 md:gap-y-0"
    >
      <ContactForm />
      <ContactSocial />
    </section>
  );
};

export default ContactContent;
