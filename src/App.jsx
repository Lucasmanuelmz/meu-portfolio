import "./Media580.css";
import "./media600.css";
import "./super.css";
import "./App.css";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import author from "./assets/author/author.jpg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";
import HighlightProject from "./Components/slidshow";
import Presentation from "./Components/presentation";
import SkillsComponent from "./Components/skills";
import HeaderComponent from "./Components/header";
import ContactComponent from "./Components/contact";
import MyProjects from "./Components/destack";
import { GrLinkTop } from "react-icons/gr";

export default function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [invisible, setInvisible] = useState("invisible");
  const [unview, setUnview] = useState("unview");
  const [closed, setClosed] = useState("closed");

  const [lightMode, setLightMode] = useState({
    body: "body",
    header: "header",
    strong: 'strong',
    titlePresentation: 'title-presentation',
    visible: "visible",
    presentation: "container-presentation",
    paralax: "parallax",
    feature: "featured-project",
    skills: "skills-container",
    skill: "skill",
    card: "card",
    footer: "footer",
    hiddenContent: "hidden-content",
    project: "project",
    back: "button-back",
    iconColor: "#F7F7F7",
  });

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!isLightMode) {
      body.classList.add("body");
      body.classList.remove("body-light");
    } else {
      body.classList.add("body-light");
      body.classList.remove("body");
    }

    return () => {
      document.body.classList.remove("body", "body-light");
    };
  }, [isLightMode]);

  function modeLight() {
    setIsLightMode((prevBg) => !prevBg);
    setLightMode((prevMode) => ({
      body: prevMode.body === "body" ? "body-light" : "body",
      header: prevMode.header === "header" ? "header-light" : "header",
      strong: prevMode.strong === "strong"? "strong-light" : "strong",
      skills:
        prevMode.skills === "skills-container"
          ? "skills-container-light"
          : "skills-container",
      skill: prevMode.skill === "skill" ? "skill-light" : "skill",
      presentation:
        prevMode.presentation === "container-presentation"
          ? "container-presentation-light"
          : "container-presentation",
      visible: prevMode.visible === "visible" ? "visible-light" : "visible",
      card: prevMode.card === "card" ? "card-light" : "card",
      feature:
        prevMode.feature === "featured-project"
          ? "featured-project-light"
          : "featured-project",
      hiddenContent:
        prevMode.hiddenContent === "hidden-content"
          ? "hidden-content-light"
          : "hidden-content",
      paralax: prevMode.paralax === "parallax" ? "parallax-light" : "parallax",
      project: prevMode.project === "project" ? "project-light" : "project",
      back:
        prevMode.back === "button-back" ? "button-back-light" : "button-back",
      footer: prevMode.footer === "footer" ? "footer-light" : "footer",
      iconColor: prevMode.iconColor === "#F7F7F7" ? "#333" : "#F7F7F7",
    }));
  }

  function closeButtonAndOpen() {
    closed === "closed" ? setClosed("open") : setClosed("closed");
  }

  function handleSetClass() {
    invisible === "invisible"
      ? setInvisible("display")
      : setInvisible("invisible");
  }

  function handleChangeClass() {
    if (unview === "unview") {
      setUnview("view");
    } else {
      setUnview("unview");
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });

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
      <HeaderComponent
        lightMode={lightMode}
        setOpen={setOpen}
        open={open}
        modeLight={modeLight}
        closeButtonAndOpen={closeButtonAndOpen}
        scaleX={scaleX}
        handleLinkCliked={handleLinkCliked}
        handleSetActive={handleSetActive}
        Link={Link}
        motion={motion}
        closed={closed}
      />
      <Element name="about">
        <Presentation
          lightModeAbout={lightMode.about}
          lightModeParalax={lightMode.paralax}
          lightModePresentation={lightMode.presentation}
          author={author} strong={lightMode.strong}
        />
      </Element>
      <Element name="projects">
        <section id="projects" className="container">
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              position: "relative",
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
              <p>
                Este portfólio está em fase de desenvolvimento. Os projetos
                ainda não foram adicionados, e as imagens exibidas atualmente
                servem apenas como demonstração de como ficará o layout final.
                Em breve, todos os projetos serão devidamente incluídos!
              </p>
            </div>
          </h3>
          <h4 className="subtitle">Destaques</h4>
    
            <div className="project-list">
              <HighlightProject
                lightModeFeature={lightMode.feature}
                lightModeHiddenContent={lightMode.hiddenContent}
                strong={lightMode.strong}
              />
            </div>
      
          <h4 className="subtitle">Outros projetos</h4>
          
            <div className="project-list">
              <MyProjects 
              lightModeHiddenContent={lightMode.hiddenContent} 
              lightModeProject={lightMode.project} strong={lightMode.strong} />
            </div>
        </section>
      </Element>
      <Element name="skills">
       <SkillsComponent
            lightModeSkills={lightMode.skills}
            lightModeSkill={lightMode.skill}
          />
      </Element>
      <Element name="contact">
        <ContactComponent
          unview={unview}
          handleChangeClass={handleChangeClass}
          lightMode={lightMode}
          FaGithubAlt={FaGithubAlt}
          FaFacebookF={FaFacebookF}
          FaXTwitter={FaXTwitter}
          FaLinkedinIn={FaLinkedinIn}
          strong={lightMode.strong}
        />
      </Element>
      <div className={lightMode.back}>
        <button style={{cursor: 'pointer',
          backgroundColor: 'transparent'
        }} className={lightMode.body} onClick={scrollToTop}>
        <GrLinkTop size={100} className={lightMode.strong}/>
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
