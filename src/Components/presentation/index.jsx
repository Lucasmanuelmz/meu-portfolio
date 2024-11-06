import { FadeIn, getIncrementor } from 'anima-react';

export default function Presentation({
  lightModeAbout,
  lightModePresentation,
  lightModeParalax,
  author,
  strong,
  photo,
  content,
  textColor,
  btnContact
}) {

  const getDelay = getIncrementor(0, 0.15);

  return (
    <section
      id={lightModeAbout}
      className={`${lightModePresentation} ${lightModeParalax}`}
    >
      <div className="container">
        <div className={photo}>
          <div className={content}>
          <FadeIn orientation="up" delay={getDelay()}>
            <h2 className={strong}>Desenvolvedor web full-stack</h2>
            </FadeIn>
            <p className={textColor}>
              Olá, meu nome é <strong className={strong}> Lucas</strong>. Sou{" "}
              <strong className={strong}>desenvolvedor web full-stack</strong>, com aproximadamente
              três anos de experiência em projetos pessoais utilizando
              tecnologias modernas como JavaScript, React e Node.js. Estou
              sempre em busca de aprendizado e aplico as melhores práticas de
              desenvolvimento. Como autodidata, valorizo a prática constante
              para aprimorar minhas habilidades e garantir a qualidade dos
              projetos que desenvolvo.
            </p>
            <div className="button-container">
              <button className={btnContact}>Sobre</button>
              <button className={btnContact}>Contato</button>
            </div>
            
          </div>
          <figure>
            <img src={author} alt="Lucas, desenvolvedor web fullstack" />
          </figure>
        </div>
        
      </div>
    </section>
  );
}
