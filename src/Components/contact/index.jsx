import { PropTypes } from "prop-types";

export default function ContactComponent({
  unview,
  handleChangeClass,
  lightMode,
  FaGithubAlt,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  strong
}) {
  return (
    <section id="contact" className="social-contacts">
      <div style={{ position: "relative", width: "100%" }}>
        <div className={unview}>
          <p>
            Atualmente, estou focado no aprimoramento das minhas habilidades em
            desenvolvimento web, dedicando meu tempo a estudos autodidatas e
            projetos práticos. Como parte desse processo, tenho optado por
            reduzir minha atividade em redes sociais, como Facebook, LinkedIn e
            X, para priorizar o aprendizado em fontes técnicas especializadas.
            Por esse motivo, minhas redes sociais podem estar temporariamente
            desatualizadas.
          </p>
        </div>
      </div>
      <h3
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          maxWidth: "90%",
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
        <a className={strong} href="https://github.com/Lucasmanuelmz">
          <div className="div-card" data-aos="fade-up-left">
            <div className={lightMode.card}>
              <FaGithubAlt className={strong} size={16} />
            </div>
            <p>GitHub</p>
          </div>
        </a>
        <a className={strong} href="https://www.linkedin.com/in/lucas-manuel199988463/">
          <div className="div-card" data-aos="fade-up-left">
            <div className={lightMode.card}>
              <FaLinkedinIn size={16} className={strong} />
            </div>
            <p>Linkedin</p>
          </div>
        </a>
        <a className={strong} href="https://www.linkedin.com/in/lucas-manuel199988463/">
        <div className="div-card" data-aos="fade-up-left">
          <div className={lightMode.card}>
            <FaFacebookF className={strong} size={16} />
          </div>
          <p>Facebook</p>
        </div>
        </a>
        <a className={strong} href="https://www.linkedin.com/in/lucas-manuel199988463/">
        <div className="div-card" data-aos="fade-up-left">
          <div className={lightMode.card}>
            <FaXTwitter style={{ fontSize: 18 }} className={strong} />
          </div>
          <p>Twiter</p>
        </div>
        </a>
      </div> 
    </section>
  );
}

ContactComponent.propTypes = {
  unview: PropTypes.node.isRequired,
  handleChangeClass: PropTypes.func.isRequired,
  lightMode: PropTypes.object.isRequired,
  FaGithubAlt: PropTypes.elementType.isRequired,
  FaFacebookF: PropTypes.elementType.isRequired,
  FaXTwitter: PropTypes.elementType.isRequired,
  FaLinkedinIn: PropTypes.elementType.isRequired,
}
