import { Fragment } from "react";
import { PropTypes } from "prop-types";
import { MotionValue } from "framer-motion";

export default function HeaderComponent({
  lightMode,
  setOpen,
  open,
  modeLight,
  closeButtonAndOpen,
  scaleX,
  handleLinkCliked,
  handleSetActive,
  Link,
  motion,
  closed,
}) {
  return (
    <Fragment>
      <header className="">
        <div className={lightMode.header}>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="menu-button"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                color={lightMode.iconColor}
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-close"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                color={lightMode.iconColor}
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-open"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          <h1>Portfólio</h1>
          <div onClick={modeLight}>
            <div onClick={closeButtonAndOpen} className={closed}>
              <button className="button"></button>
            </div>
          </div>
        </div>
      </header>
      <motion.div style={{ scaleX }} className="progress-bar" />

      <nav className={`menu ${open ? lightMode.visible : "hidden"}`}>
        <h2>Bem vindo ao meu portfólio de desenvolvedor web : )</h2>
        <ul>
          <li>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
              duration={500}
              onClick={handleLinkCliked}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
              duration={500}
              onClick={handleLinkCliked}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
              duration={500}
              onClick={handleLinkCliked}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
              duration={500}
              onClick={handleLinkCliked}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

HeaderComponent.propTypes = {
  lightMode: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modeLight: PropTypes.func.isRequired,
  closeButtonAndOpen: PropTypes.func.isRequired,
  scaleX: PropTypes.instanceOf(MotionValue).isRequired,
  handleLinkCliked: PropTypes.func.isRequired,
  handleSetActive: PropTypes.func.isRequired,
  Link: PropTypes.elementType.isRequired,
  motion: PropTypes.elementType.isRequired,
  closed: PropTypes.node.isRequired,
}