import styles from './Footer.module.scss';

import ContactForm from "../form/ContactForm"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactForm />
    </footer>
  )
}