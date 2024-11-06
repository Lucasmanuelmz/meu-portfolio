import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion";
import laptop from "../../assets/laptop.jpg";
import project from "../../assets/projeto1.png";
import paisage from "../../assets/paisage.jpg";
import imagelap from "../../assets/image-lap.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from 'react-icons/gr';

const buttonStyle = {
  width: "30px",
  background: '#ececec',
  border: '0px',
  padding: '10px, 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function MyProjects(
  {
    lightModeHiddenContent, 
    lightModeProject,
    strong
  }) {
    const properties = {
      prevArrow: <button style={{ ...buttonStyle }}><GrFormPrevious size={28} className={strong} /></button>,
      nextArrow: <button style={{ ...buttonStyle }}><MdOutlineNavigateNext size={28} className={strong} /></button>
    }
  return (
   <div data-aos="fade-up">
    <Slide {...properties} slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={true} responsive={[{
  breakpoint: 800,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
}, {
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}]}>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={project} alt='Primeiro projeto'/>
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={imagelap} alt='Projeto' />
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={laptop} alt='Segundo projeto' />
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={imagelap} alt='Terceiro projeto' />
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={paisage} alt='Quarto projeto' />
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>

        <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.01 }}
    className={lightModeProject}
    >
      <img src={laptop} alt='Quinto projeto' />
      <div className={lightModeHiddenContent}>
      <h5>Shop cart</h5>
      <p>Deacricao</p>
      <a
        style={{
        textDecoration: "none",
        fontSize: 14,
        color: "#efefef",
        }}
        href='#'
        className="hidden-button"
        >
          Saiba mais
        </a>
        </div>
        </motion.div>
    </Slide>
    </div>
    );
};

