import styles from './FooterForm.module.scss';

import ContactForm from '../form/ContactForm';

export default function FooterForm() {
  return (
    <div className={styles.form}>
      <ContactForm />
      <img className={styles.img} src="/png/form-contact-girl.png" alt='Свяжитесь с 30XSales' />
    </div>
  )
}