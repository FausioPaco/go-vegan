import Meta from '@/components/meta';
import { ContactContent, ContactHero } from '@/components/modules/contact';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <motion.div
      className="flex-1"
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
      <Meta
        name="description"
        title="Go Vegan - Contact us"
        description="We are looking forward to hearing from you! If you have any questions about our vegan menu, or would like to discuss an order you have in mind, please don't hesitate to get in touch with our dedicated team."
      />

      <main className="flex-1">
        <ContactHero />
        <ContactContent />
      </main>
    </motion.div>
  );
};

export default Contact;
