export default function Presentation({
  lightModeAbout,
  lightModePresentation,
  lightModeParalax,
  author,
  strong,
  photo,
  content,
  textColor
}) {
  return (
    <section
      id={lightModeAbout}
      className={`${lightModePresentation} ${lightModeParalax}`}
    >
      <div className="container about">
        <div className={photo}>
          <div className={content}>
            <h2 className={strong} data-aos="fade-up-right">Desenvolvedor web full-stack</h2>
            <p className={textColor} data-aos="fade-up-left">
              Olá, meu nome é <strong className={strong}> Lucas</strong>. Sou{" "}
              <strong className={strong}>desenvolvedor web full-stack</strong>, com aproximadamente
              três anos de experiência em projetos pessoais utilizando
              tecnologias modernas como JavaScript, React e Node.js. Estou
              sempre em busca de aprendizado e aplico as melhores práticas de
              desenvolvimento. Como autodidata, valorizo a prática constante
              para aprimorar minhas habilidades e garantir a qualidade dos
              projetos que desenvolvo.
            </p>
          </div>
          <figure>
            <img src={author} alt="Lucas, desenvolvedor web fullstack" />
          </figure>
        </div>
      </div>
    </section>
  );
}
