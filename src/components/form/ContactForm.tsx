import styles from './Form.module.scss';

type Props = {
  mode?: boolean
}

export default function ContactForm({ mode }: Props) {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <p className={styles.text}>Заполните форму ниже, оставьте заявку и мы свяжемся с вами<br /> в ближайшее время</p>
      <div className={styles.row}>
        <div className={styles.inputBox}>
          <label htmlFor="name">Имя</label>
          <input placeholder='Введите ваше имя' type="text" name="name" id="name" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="mail">Email</label>
          <input placeholder='Введите ваш Email' type="email" name="mail" id="mail" />
        </div>
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Комментарий</label>
        <textarea placeholder='Ваш комментарий' name="description" id="description" />
      </div>
      <div className={styles.checkBox}>
        <input type="checkbox" name="iAgree" id="iAgree" />
        <label htmlFor="iAgree">Я принимаю</label>
      </div>
      <div className={styles.inputBox}>
        {mode ? <button data-color="white" className={styles.btn} type="submit">Отправить</button> : <button className={styles.btn} type="submit">Отправить</button>}
      </div>
    </form>
  )
}