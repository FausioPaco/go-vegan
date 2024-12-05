import Meta from '@/components/meta';
import { ContactContent, ContactHero } from '@/components/modules/contact';

const Contact = () => {
  return (
    <>
      <Meta
        name="description"
        title="Go Vegan - Contact us"
        description="We are looking forward to hearing from you! If you have any questions about our vegan menu, or would like to discuss an order you have in mind, please don't hesitate to get in touch with our dedicated team."
      />

      <main className="flex-1">
        <ContactHero />
        <ContactContent />
      </main>
    </>
  );
};

export default Contact;
