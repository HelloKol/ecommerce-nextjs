import type { NextPage } from "next";
import styles from "./styles.module.scss";

const Footer: NextPage = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.topFooter}>
          <h1 className={styles.title}>Salve</h1>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Call us</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">Store location</a>
            </li>
            <li>
              <a href="#">Legal notice</a>
            </li>
            <li>
              <a href="#">Privacy poicy</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
          <form className={styles.form} action="" method="">
            <h3>sign up for our news</h3>
            <input type="text" placeholder="Email address" />
            <p>
              By registering you accept to the Terms & Conditionsnd have read
              the Privacy Policy. Opt out anytime by clicking 'Unsubscribe' at
              the bottom of our emails.
            </p>
          </form>
        </div>
        <hr className={styles.hr} />
        <div className={styles.bottomFooter}>
          <div>
            <p>follow Salve</p>
            <span>
              <a href="">
                <img src="" alt="fb" />
              </a>
              <a href="">
                <img src="" alt="ig" />
              </a>
              <a href="">
                <img src="" alt="tw" />
              </a>
            </span>
          </div>
          <p>Developoed by shehab @2022</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
