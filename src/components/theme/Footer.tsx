import { socialLinks } from '../../App.config';

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
            {<social.icon />}
          </a>
        ))}
      </div>
      <p className="text-sm mt-4 text-gray-400">
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
