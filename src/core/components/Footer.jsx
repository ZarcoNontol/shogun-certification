import { useSpace } from "../providers/space.provider";
import { NavLink } from "./NavLink";

import styles from "./Footer.module.css";

const Footer = () => {
  const { navSections } = useSpace();
  return (
    <footer className={styles.FooterWrapper}>
      <div>LOGO</div>
      <div>
        {navSections &&
          navSections.map((section) => {
            return (
              <div>
                <h3>
                  <NavLink
                    className={styles.FooterLink}
                    displayText={section.displayText}
                    url={section.url}
                  />
                </h3>
                <ul>
                  {section.navLinks.map((link) => {
                    return (
                      <li>
                        <NavLink
                          displayText={link.displayText}
                          url={link.url}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </footer>
  );
};

export default Footer;
