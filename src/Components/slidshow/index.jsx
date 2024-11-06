import { PropTypes } from "prop-types";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
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

export default function HighlightProject({
  lightModeFeature,
  lightModeHiddenContent,
  strong
}) {
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><GrFormPrevious size={28} className={strong} /></button>,
    nextArrow: <button style={{ ...buttonStyle }}><MdOutlineNavigateNext size={28} className={strong} /></button>
  }
  return (
    <div data-aos="fade-down">
    <Slide {...properties} slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
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
    <div data-aos="fade-up" className={lightModeFeature}>
      <img src={laptop} alt='Projeto em destaque numero 1' />
        <div className={lightModeHiddenContent}>
          <h5>Espaço reservado</h5>
          <p>Texto discritivo</p>
          <a href='#' className="hidden-button">Saiba mais</a>
        </div>
    </div>
      
      <div data-aos="fade-rght" className={lightModeFeature}>
        <img src={imagelap} alt='Projeto em destaque 2' />
        <div className={lightModeHiddenContent}>
          <h5>Espaço reservado</h5>
          <p>Texto discritivo</p>
          <a href='#' className="hidden-button">Saiba mais</a>
        </div>
      </div>

      <div data-aos="fade-down" className={lightModeFeature}>
        <img src={paisage} alt='Projeto em destaque 3' />
        <div className={lightModeHiddenContent}>
          <h5>Espaço reservado</h5>
          <p>Texto discritivo</p>
          <a href='#' className="hidden-button">Saiba mais</a>
          </div>
      </div>

      <div data-aos="fade-up" className={lightModeFeature}>
        <img src={project} alt='projeto em destaque 4' />
          <div className={lightModeHiddenContent}>
            <h5>Espaço reservado</h5>
            <p>Texto discritivo</p>
            <a href='#' className="hidden-button">Saiba mais</a>
            </div>
        </div>

      <div data-aos="fade-up-left" className={lightModeFeature}>
        <img src={laptop} alt='Projeto em deataque 5' />
          <div className={lightModeHiddenContent}>
            <h5>Espaço reservado</h5>
            <p>Texto discritivo</p>
            <a href='#' className="hidden-button">Saiba mais</a>
          </div>
        </div>
      </Slide>
    </div>
  );
}

HighlightProject.propTypes = {
  lightModeFeature: PropTypes.string.isRequired,
  lightModeHiddenContent: PropTypes.string.isRequired,
}
