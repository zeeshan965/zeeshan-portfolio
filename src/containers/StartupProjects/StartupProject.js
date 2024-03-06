import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects, portfolioConstant} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import PortfolioModal from "../../components/Model/PortfolioModal";

export default function StartupProject() {
  const [isOpen, setIsModal] = React.useState(false);
  const [ModalData, setModalData] = React.useState();
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    // <Fade bottom duration={1000} distance="20px">
    <>
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle py-5"
                : "subTitle project-subtitle py-5"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle text-red-500"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })} */}
            {portfolioConstant.map((v, index) => (
              <div
                onClick={() => {
                  setIsModal(true);
                  setModalData(v);
                }}
                className=" opacity-3 transition-all ease-in-out duration-400  overflow-hidden  rounded-lg border  shadow-xl mt-4 p-3 group"
              >
                <div className="m-2 text-justify flex justify-center items-center flex-col text-sm">
                  <img
                    alt="card img"
                    className="rounded-t aspect-auto object-cover object-center w-full  group-hover:scale-[1.05] h-[200px]  transition duration-1000 ease-in-out"
                    src={v.img}
                  />
                  <h2 className="font-semibold my-4 text-2xl   text-center">
                    {v.titleCard}
                  </h2>
                  <p className="text-md font-medium pb-5">
                    {v.subCard.length > 180
                      ? `${v?.subCard.substring(0, 180)}...`
                      : `${v?.subCard}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PortfolioModal
        setIsModal={setIsModal}
        isOpen={isOpen}
        ModalData={ModalData}
      />
    </>
  );
}
