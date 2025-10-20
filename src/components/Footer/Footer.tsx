import React from "react";
import styles from "./styles.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaMailBulk,
  FaRegClipboard,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {
  linkedinUrl: string;
  telegramUrl: string;
  githubUrl: string;
  email: string;
  joinFormUrl: string;
  mediumUrl: string;
  twitterUrl: string;
};

function TelegramIcon() {
  return null;
}

export default function CustomFooter({
  mediumUrl,
  twitterUrl,
  linkedinUrl,
  telegramUrl,
  githubUrl,
  email,
  joinFormUrl,
}: Props) {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.topRow}>
        <div className={styles.contact}>
          <h3 className={styles.title}>ارتباط با ما</h3>
          <div className={styles.contactLinks}>
            <a className={styles.link} href={`mailto:${email}`}>
              <MdEmail />
              <span>{email}</span>
            </a>
            <a
              className={styles.link}
              href={joinFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flexDirection: "row-reverse" }}
            >
              <FaRegClipboard />
              <span>عضویت در نشریه</span>
            </a>
          </div>
        </div>

        <div className={styles.socials}>
          <h3 className={styles.title}>ما را دنبال کنید</h3>
          <div className={styles.socialLinks}>
            <a
              className={styles.link}
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
              <span>Telegram</span>
            </a>
            <a
              className={styles.link}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              className={styles.link}
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              className={styles.link}
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            {/*<a className={styles.link} href={mediumUrl} target="_blank" rel="noopener noreferrer">*/}
            {/*    <FaMedium/><span>Medium</span>*/}
            {/*</a>*/}
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <div className={styles.copy}>
        © نشریه‌ی علمی فرهنگی بایت - دانشکده مهندسی کامپیوتر - دانشگاه صنعتی
        شریف
      </div>
    </footer>
  );
}
