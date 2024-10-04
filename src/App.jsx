
import './Media580.css';
import './media600.css';
import './super.css';
import "./App.css";
import laptop from "./assets/laptop.jpg";
import projeto from "./assets/projeto1.png";
import paisage from "./assets/paisage.jpg";
import imagelap from "./assets/image-lap.jpg";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";

export default function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [flyIn, setFlyIn] = useState(false);
  const [invisible, setInvisible] = useState('invisible');
  const [unview, setUnview] = useState('unview');
  const [closed, setClosed] = useState('closed');
  const [lightMode, setLightMode] = useState(
    {
    body:'body',
    header: 'header',
    visible: 'visible',
    presentation: 'container-presentation',
    paralax: 'parallax',
    feature: 'featured-project',
    sills: 'skills-container',
    skill: 'skill',
    card: 'card',
    footer: 'footer',
    hiddenContent: 'hidden-content',
    project: 'project',
    back: 'button-back',
    iconColor: '#F7F7F7'
  }
);

const [isLightMode, setIsLightMode] = useState(false);

useEffect(() => {  
  const body = document.querySelector('body');
  if(!isLightMode) {
    body.classList.add('body');
    body.classList.remove('body-light');
  } else {
    body.classList.add('body-light');
    body.classList.remove('body')
  }

  return () => {
    document.body.classList.remove('body', 'body-light')
  }
},[isLightMode])

  function modeLight() {
    setIsLightMode(prevBg =>!prevBg);
    setLightMode(prevMode => (
      {
      body: prevMode.body === 'body' ? 'body-light' : 'body',
      header: prevMode.header === 'header' ? 'header-light' : 'header',
      skills: prevMode.sills === 'skills-container'? 'skills-container':'skills-container-light',
      skill: prevMode.skill === 'skill' ? 'skill-light' : 'skill',
      presentation: prevMode.presentation === 'container-presentation'? 'container-presentation-light': 'container-presentation',
      visible: prevMode.visible === 'visible'? 'visible-light': 'visible',
      card: prevMode.card === 'card' ? 'card-light' : 'card',
      feature: prevMode.feature === 'featured-project'? 'featured-project-light': 'featured-project',
      hiddenContent: prevMode.hiddenContent === 'hidden-content'? 'hidden-content-light': 'hidden-content',
      paralax: prevMode.paralax === 'parallax'? 'parallax-light': 'parallax',
      project: prevMode.project === 'project'? 'project-light': 'project',
      back: prevMode.back === 'button-back'? 'button-back-light': 'button-back',
      footer: prevMode.footer === 'footer' ? 'footer-light' : 'footer',
      iconColor: prevMode.iconColor === '#F7F7F7'? '#333': '#F7F7F7'
    }));
  }

  function closeButtonAndOpen() {
    closed === 'closed'? setClosed('open') : setClosed('closed')
  }

  function handleSetClass() {
    invisible === 'invisible'? setInvisible('display'): setInvisible('invisible')
  }

  function handleChangeClass() {
    if(unview === 'unview') {
      setUnview('view');
    } else {
      setUnview('unview')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlyIn(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });

    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  function handleSetActive(to) {
    console.log(to);
  }

  function handleLinkCliked() {
    setOpen(false);
  }

  return (
    <>
      <header className={lightMode.header}>
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
          <button  className="button"></button>
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
      <Element name="about">
        <section id={lightMode.about} className={`${lightMode.presentation} ${lightMode.paralax}`}>
          <div className={`container about ${flyIn ? "fly-in" : ""}`}>
            <h2>Desenvolvedor web full-stack</h2>
            <p>
              <strong>Olá, meu nome é Lucas.</strong> Sou um desenvolvedor web
              full-stack apaixonado por criar soluções digitais inovadoras que
              atendem às necessidades dos usuários e impulsionam o crescimento
              das empresas. Com experiência em tecnologias modernas como
              JavaScript, React e Node.js, estou sempre em busca de aprender e
              aplicar as melhores práticas de desenvolvimento. Aprendo de forma
              autodidata e valorizo a prática constante para aprimorar minhas
              habilidades.
            </p>
          </div>
        </section>
      </Element>
      <Element name="projects">
        <section id="projects" className="container">
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '20px',
              position: 'relative'
            }}
          >
            Meus projetos{" "}
            <span
              style={{
                color: "#80B165",
                cursor: "pointer",
                fontSize: "12px",
                width: "20px",
                height: "20px",
                border: "solid 0.4px #80B165",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "5px",
              }}

              onClick={handleSetClass}
            >
              &#8505;
            </span>
            <div className={invisible}>
            <p>Este portfólio está em fase de desenvolvimento. Os projetos ainda não foram adicionados, e as imagens exibidas atualmente servem apenas como demonstração de como ficará o layout final. Em breve, todos os projetos serão devidamente incluídos!</p>
          </div>
          </h3>
          
          <div className="project-list">
            <h4>Destaques</h4>
            <div className="project-feature">
              <div data-aos="fade-up-right" className={lightMode.feature}>
                <img src={laptop} alt="Projeto Destaque" />
                <div className={lightMode.hiddenContent}>
                  <h5>Espaço reservado</h5>
                  <p>
                    Este conteúdo é apenas para reserva de espaço e para manter
                    as características visuais do espaço; não é um projeto do
                    portfólio.
                  </p>
                  <button className="hidden-button">Saiba mais</button>
                </div>
              </div>
            </div>
            <h4>Outros projetos</h4>
            <div className="project-grid">
              <div data-aos="fade-up-right" className={lightMode.project}>
                <img src={projeto} alt="Projeto 1" />
                <div className={lightMode.hiddenContent}>
                  <h5>Shop cart</h5>
                  <p>
                  Shop Cart is a project developed during the full-stack web development course offered by The Odin Project. The goal was to build an application that consumes an API using React.js, implementing dynamic and responsive shopping cart functionalities.
                  </p>
                  <a style={{textDecoration: 'none', fontSize: 14, color: '#efefef'}} href='https://fackeshopp.vercel.app/' className="hidden-button">Saiba mais</a>
                </div>
              </div>
              <div data-aos="fade-up-right" className={lightMode.project}>
                <img src={imagelap} alt="Projeto 2" />
                <div className={lightMode.hiddenContent}>
                  <h5>Imagem de um laptop</h5>
                  <p>
                    Este conteúdo é apenas para reserva de espaço e para manter
                    as características visuais do espaço; não é um projeto do
                    portfólio.
                  </p>
                  <button className="hidden-button">Saiba mais</button>
                </div>
              </div>
              <div data-aos="fade-up-right" className={lightMode.project}>
                <img src={paisage} alt="Projeto 3" />
                <div className={lightMode.hiddenContent}>
                  <h5>Codigo js</h5>
                  <p>
                    Este conteúdo é apenas para reserva de espaço e para manter
                    as características visuais do espaço; não é um projeto do
                    portfólio.
                  </p>
                  <button className="hidden-button">Saiba mais</button>
                </div>
              </div>
              <div data-aos="fade-up-right" className={lightMode.project}>
                <img src={laptop} alt="Projeto 4" />
                <div className={lightMode.hiddenContent}>
                  <h5>Belo computador</h5>
                  <p>
                    Este conteúdo é apenas para reserva de espaço e para manter
                    as características visuais do espaço; não é um projeto do
                    portfólio.
                  </p>
                  <button className="hidden-button">Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="skills">
        <section id="skills" className={lightMode.sills}>
          <h3>Minhas Habilidades</h3>
          <div className="skills-icons">
            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
              <p>HTML</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
              <p>CSS</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
              <p>JavaScript</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#8ed6fb"
                  d="M117.29 98.1L66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71z"
                ></path>
                <path
                  fill="#1c78c0"
                  d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"
                ></path>
              </svg>
              <p>Webpack</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
              <p>Reactjs</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#38bdf8"
                  d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
                ></path>
                <path
                  fill="#fff"
                  d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
                ></path>
              </svg>
              <p>Tailwindcss</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="url(#a)"
                  d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
                ></path>
                <path
                  fill="url(#b)"
                  d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
                ></path>
                <path
                  fill="url(#c)"
                  d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="34.513"
                    x2="27.157"
                    y1="15.535"
                    y2="30.448"
                    gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3F873F"></stop>
                    <stop offset=".33" stopColor="#3F8B3D"></stop>
                    <stop offset=".637" stopColor="#3E9638"></stop>
                    <stop offset=".934" stopColor="#3DA92E"></stop>
                    <stop offset="1" stopColor="#3DAE2B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="30.009"
                    x2="50.533"
                    y1="23.359"
                    y2="8.288"
                    gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".138" stopColor="#3F873F"></stop>
                    <stop offset=".402" stopColor="#52A044"></stop>
                    <stop offset=".713" stopColor="#64B749"></stop>
                    <stop offset=".908" stopColor="#6ABF4B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="21.917"
                    x2="40.555"
                    y1="22.261"
                    y2="22.261"
                    gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".092" stopColor="#6ABF4B"></stop>
                    <stop offset=".287" stopColor="#64B749"></stop>
                    <stop offset=".598" stopColor="#52A044"></stop>
                    <stop offset=".862" stopColor="#3F873F"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p>Nodejs</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
              </svg>
              <p>Express</p>
            </div>
            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <defs>
                  <radialGradient
                    id="b"
                    cx="9.36"
                    cy="10.57"
                    fx="9.36"
                    fy="10.57"
                    r="7.07"
                    gradientTransform="matrix(73.03125 0 0 37.1875 29.797 56.535)"
                  >
                    <stop
                      offset={0}
                      style={{ stopColor: "#f2f2f2", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".58"
                      style={{ stopColor: "#eee", stopOpacity: 1 }}
                    />
                    <stop
                      offset={1}
                      style={{ stopColor: "#e6e6e6", stopOpacity: 1 }}
                    />
                  </radialGradient>
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="2.59"
                    y1="10.16"
                    x2="15.41"
                    y2="10.16"
                    gradientTransform="scale(7.11111)"
                  >
                    <stop
                      offset={0}
                      style={{ stopColor: "#005ba1", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".07"
                      style={{ stopColor: "#0060a9", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".36"
                      style={{ stopColor: "#0071c8", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".52"
                      style={{ stopColor: "#0078d4", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".64"
                      style={{ stopColor: "#0074cd", stopOpacity: 1 }}
                    />
                    <stop
                      offset=".82"
                      style={{ stopColor: "#006abb", stopOpacity: 1 }}
                    />
                    <stop
                      offset={1}
                      style={{ stopColor: "#005ba1", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "url(#a)",
                  }}
                  d="M64 36.55c-25.172 0-45.582-7.109-45.582-16.495v87.89c0 9.032 20.055 16.356 44.941 16.5H64c25.172 0 45.582-7.113 45.582-16.5v-87.89c0 9.172-20.41 16.496-45.582 16.496Zm0 0"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#e8e8e8",
                    fillOpacity: 1,
                  }}
                  d="M109.582 20.055c0 9.172-20.41 16.496-45.582 16.496s-45.582-7.11-45.582-16.496c0-9.387 20.41-16.5 45.582-16.5s45.582 7.113 45.582 16.5"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#50e6ff",
                    fillOpacity: 1,
                  }}
                  d="M98.988 18.703c0 5.832-15.718 10.524-34.988 10.524s-34.988-4.692-34.988-10.524C29.012 12.871 44.73 8.25 64 8.25s34.988 4.691 34.988 10.453"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#198ab3",
                    fillOpacity: 1,
                  }}
                  d="M64 21.332a82.193 82.193 0 0 0-27.664 4.055A81.213 81.213 0 0 0 64 29.227a79.334 79.334 0 0 0 27.664-4.125A84.332 84.332 0 0 0 64 21.332Zm0 0"
                />
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "url(#b)",
                  }}
                  d="M91.734 81.066V56.891h-6.402v29.367h17.496v-5.192ZM40.961 69.191a13.064 13.064 0 0 1-3.629-2.203 3.13 3.13 0 0 1-.852-2.277 2.418 2.418 0 0 1 1.067-2.133 4.847 4.847 0 0 1 2.988-.855 11.533 11.533 0 0 1 7.11 2.062v-6.113a18.236 18.236 0 0 0-7.11-1.137 11.67 11.67 0 0 0-7.754 2.414 7.68 7.68 0 0 0-2.984 6.332c0 3.625 2.273 6.469 7.11 8.602 1.57.668 3.05 1.527 4.41 2.562a2.982 2.982 0 0 1 1.066 2.274c0 .879-.426 1.699-1.137 2.207a5.786 5.786 0 0 1-3.203.781 11.801 11.801 0 0 1-7.75-2.988v6.613a15.411 15.411 0 0 0 7.61 1.707c2.98.176 5.933-.648 8.39-2.348a7.681 7.681 0 0 0 2.348-6.468 7.458 7.458 0 0 0-1.778-4.977 17.225 17.225 0 0 0-5.902-4.055Zm37.262 11.305a16.634 16.634 0 0 0 2.347-8.957A16.509 16.509 0 0 0 78.223 64a12.87 12.87 0 0 0-4.977-5.332 14.228 14.228 0 0 0-7.113-1.852 15.015 15.015 0 0 0-7.68 1.922A13.217 13.217 0 0 0 53.262 64a17.48 17.48 0 0 0-1.848 8.105 16.06 16.06 0 0 0 1.707 7.114 12.526 12.526 0 0 0 4.906 5.261 14.679 14.679 0 0 0 7.11 2.133l6.117 7.11h8.605l-8.75-7.82a12.736 12.736 0 0 0 7.114-5.407Zm-7.114-1.777a6.673 6.673 0 0 1-5.402 2.488 6.538 6.538 0 0 1-5.406-2.559 10.842 10.842 0 0 1-2.063-7.109 10.903 10.903 0 0 1 2.063-7.113 7.104 7.104 0 0 1 5.547-2.63 6.181 6.181 0 0 1 5.336 2.63 11.533 11.533 0 0 1 1.918 7.113 10.353 10.353 0 0 1-1.993 7.18Zm0 0"
                />
              </svg>
              <p>SQL</p>
            </div>
            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#00618A"
                  d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
                ></path>
              </svg>
              <p>Mysql</p>
            </div>
            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"></path>
                <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 01-4.962 1.568c-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129 27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529a270.708 270.708 0 0110.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z"></path>
                <path
                  fill="#336791"
                  d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
                ></path>
                <path
                  fill="#fff"
                  d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 011.64-1.55 1.594 1.594 0 011.55 1.639c-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 011.71-1.472 1.597 1.597 0 011.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466a6.71 6.71 0 01-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 01-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517A245.272 245.272 0 0145.88 73.046a1.596 1.596 0 012.304 2.208c-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zm69.429-13.445a1.596 1.596 0 01-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 01.631-2.025c.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zm.76 10.21c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 11-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6.162 6.162 0 01-.54-.401c-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zm-45.562 8.915c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009a41.146 41.146 0 00-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zm12.269-7.36a1.596 1.596 0 01-1.575-1.354 8.218 8.218 0 01-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 01-1.335 1.819l-.244.02zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zm9.63-.677c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zm2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81a5.823 5.823 0 00-.821-.059c-.812 0-1.243.183-1.345.282zm43.605-1.245c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zm-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zm3.965 32.843a1.594 1.594 0 01-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31a1.595 1.595 0 113.186-.172c.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411a1.596 1.596 0 01-1.328.708z"
                ></path>
              </svg>
              <p>Postgresql</p>
            </div>

            <div data-aos="fade-up-right" className={lightMode.skill}>
              <svg viewBox="0 0 128 128">
                <path
                  fill="#2f406a"
                  d="M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36"
                ></path>
                <path
                  fill="#2379bd"
                  d="M26.4 86.4l37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4"
                ></path>
                <path
                  fill="#03afef"
                  d="M26.4 42.32l-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32"
                ></path>
                <path
                  fill="#2f406a"
                  d="M63.53 81.33l-.41-.42V64.27l.41-.21.1-.41 14.27-8.32.44.1v17.15l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M48.48 73.11V55.3h.41l14.51 8.45.12.33v17.25l-15.04-8.22"
                ></path>
                <path
                  fill="#03afef"
                  d="M63.29 46.54L48.48 55.3l15.05 8.76 14.8-8.64-15.04-8.88"
                ></path>
                <path
                  fill="#2f406a"
                  d="M45.11 92.19l-.41-.42V75.13l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M30.06 84V66.16h.41L45 74.59l.12.33v17.27L30.06 84"
                ></path>
                <path
                  fill="#03afef"
                  d="M44.86 57.4l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
                ></path>
                <path
                  fill="#2f406a"
                  d="M83.27 92.6l-.41-.42V75.54l.41-.21.1-.41 14.27-8.32.44.1v17.14L83.27 92.6"
                ></path>
                <path
                  fill="#2379bd"
                  d="M68.22 84.38V66.57h.41L83.15 75l.12.33V92.6l-15.05-8.22"
                ></path>
                <path
                  fill="#03afef"
                  d="M83 57.81l-14.8 8.76 15.05 8.76 14.8-8.64L83 57.81"
                ></path>
                <path
                  fill="#2f406a"
                  d="M64.85 103.46l-.41-.42V86.4l.41-.21.1-.41 14.27-8.32.44.1V94.7l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M49.8 95.23v-17.8h.41l14.51 8.45.12.33v17.27L49.8 95.23"
                ></path>
                <path
                  fill="#03afef"
                  d="M64.6 68.67l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
                ></path>
                <path
                  fill="#2f406a"
                  d="M63.53 57.73l-.41-.42V40.67l.41-.21.1-.41 14.27-8.33.44.1V49l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M48.48 49.5V31.7h.41l14.51 8.45.12.33v17.25L48.48 49.5"
                ></path>
                <path
                  fill="#03afef"
                  d="M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88"
                ></path>
                <path
                  fill="#2f406a"
                  d="M45.11 68.59l-.41-.42V51.53l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23"
                ></path>
                <path
                  fill="#03afef"
                  d="M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
                ></path>
                <path
                  fill="#2f406a"
                  d="M83.27 69l-.41-.42V51.94l.41-.21.1-.41L97.64 43l.44.1v17.14L83.27 69"
                ></path>
                <path
                  fill="#2379bd"
                  d="M68.22 60.77V43h.41l14.51 8.45.12.33V69l-15.04-8.23"
                ></path>
                <path
                  fill="#03afef"
                  d="M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21"
                ></path>
                <path
                  fill="#2f406a"
                  d="M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
                ></path>
                <path
                  fill="#2379bd"
                  d="M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63"
                ></path>
                <path
                  fill="#03afef"
                  d="M64.6 45.06l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
                ></path>
              </svg>
              <p>Sequelize</p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="contact">
        <section id="contact" className="social-contacts">
          <div style={{position: 'relative', width: '100%'}}>
          <div className={unview}>
              <p>Atualmente, estou focado no aprimoramento das minhas habilidades em desenvolvimento web, dedicando meu tempo a estudos autodidatas e projetos práticos. Como parte desse processo, tenho optado por reduzir minha atividade em redes sociais, como Facebook, LinkedIn e X, para priorizar o aprendizado em fontes técnicas especializadas. Por esse motivo, minhas redes sociais podem estar temporariamente desatualizadas.</p>
            </div>
          </div>
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: 'relative',
              maxWidth: '90%'
            }}
          >
            Contatos{" "}
            <span
              style={{
                color: "#80B165",
                cursor: "pointer",
                fontSize: "12px",
                width: "20px",
                height: "20px",
                border: "solid 0.4px #80B165",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "5px",
              }}
              onClick={handleChangeClass}
            >
              &#8505;
            </span>
          </h3>

          
          <div className="social-card">
            <div className="div-card" data-aos="fade-up-left">
              <div className={lightMode.card}>
                <FaGithubAlt color="#80B165" size={16} />
              </div>
              <p>GitHub</p>
            </div>
            <div className="div-card" data-aos="fade-up-left">
              <div className={lightMode.card}>
                <FaLinkedinIn size={16} color="#80B165" />
              </div>
              <p>Linkedin</p>
            </div>
            <div className="div-card" data-aos="fade-up-left">
              <div className={lightMode.card}>
                <FaFacebookF color="#80B165" size={16} />
              </div>
              <p>Facebook</p>
            </div>
            <div className="div-card" data-aos="fade-up-left">
              <div className={lightMode.card}>
                <FaXTwitter style={{fontSize: 18}} color="#80B165" />
              </div>
              <p>Twiter</p>
            </div>
          </div>
        </section>
      </Element>
      <div className={lightMode.back}>
        <button className="back" onClick={scrollToTop}>
          Voltar para o topo
        </button>
      </div>
      <footer className={lightMode.footer}>
        <p>
          Entre em contato:{" "}
          <a href="mailto:testadoron1@gmail.com">envie um email</a>
        </p>
        <p>
          &copy; Desenvolvido por: <strong>Lucas Manuel Alface</strong>
        </p>
      </footer>
    </>
  );
}
