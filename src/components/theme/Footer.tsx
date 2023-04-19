import { socialLinks } from '../../config';

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            target="_blank"
            href={social.link}
            rel="noopener noreferrer"
          >
            {<social.icon className="social-link" title={social.title} />}
          </a>
        ))}
      </div>
      <p>
        © 2022
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.loqo71la.dev"
        >
          loqo71la
        </a>
      </p>
    </footer >
  );
}
