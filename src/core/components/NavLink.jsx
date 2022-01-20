import styles from "./NavLink.module.css";

export const NavLink = ({ url, displayText, tag, icon }) => {
  let navLink = (
    <a className={styles.NavLink} href={url}>
      {displayText}
    </a>
  );
  if (!url) {
    navLink = displayText;
  }
  return navLink;
};
