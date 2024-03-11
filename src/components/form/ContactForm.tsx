import styles from './Form.module.scss';

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.text}>Заполните форму ниже, оставьте заявку и мы свяжемся с вами в ближайшее время</p>
      <div className={styles.row}>
        <div className={styles.inputBox}>
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="mail">Email</label>
          <input type="email" name="mail" id="mail" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="desctription">Комментарий</label>
        <textarea name="desctription" id="desctription" />
      </div>
      <div className={styles.inputBox}>
        <input type="checkbox" name="iAgree" id="iAgree" />
        <label htmlFor="iAgree">Я принимаю</label>
      </div>
      <div className={styles.inputBox}>
        <button className={styles.btn} type="submit">Отправить</button>
      </div>
    </form>
  )
}