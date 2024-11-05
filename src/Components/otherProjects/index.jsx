import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

export default function Otherprojects({
  projects,
  lightModeProject,
  lightModeHiddenContent,
}) {
  return (
    <>
      {projects && (
        <div data-aos="fade-up" className="project-grid">
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.01 }}
              key={project.id}
              className={lightModeProject}
            >
              <img src={project.image} alt={project.description} />
              <div className={lightModeHiddenContent}>
                <h5>Shop cart</h5>
                <p>{project.description}</p>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: 14,
                    color: "#efefef",
                  }}
                  href={project.link}
                  className="hidden-button"
                >
                  Saiba mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}

Otherprojects.propTypes = {
  projects: PropTypes.array.isRequired,
  lightModeProject: PropTypes.string.isRequired ,
  lightModeHiddenContent: PropTypes.string.isRequired,
}
