import Header from "../Header";
import styles from "./Portfolio.module.css";
import React from 'react';

function Portfolio() {
  // Dados dos projetos
  const projects = [
    {
      image: "/competitiveProgramming.jpeg", // Substitua pelo link da imagem
      title: "Programação Competitiva",
      description: `Programação Competitiva envolve resolver problemas desafiadores usando algoritmos e estruturas de dados. 
      É uma área que desenvolve habilidades analíticas, otimização de código e trabalho em equipe. 
      As questões variam entre grafos, teoria dos números, busca, dinâmica e outros tópicos avançados.`,
      links: [
        { type: "GitHub", url: "https://github.com/ghts2110/competitive_programing" },
      ],
    },
    {
      image: "/fenix.jpg", // Substitua pelo link da imagem
      title: "Instituição Fênix",
      description: `O Instituto Fênix é uma organização dedicada à reintegração social e ao apoio a pessoas privadas de liberdade 
      e egressos do sistema prisional. Sua missão é oferecer oportunidades e construir um caminho de transformação, 
      reescrevendo histórias.`,
      links: [
        { type: "GitHub", url: "https://github.com/ghts2110/Fenix" },
        { type: "Site", url: "https://www.fenix.org.br" }, // Substitua pelo link correto do site
      ],
    },
  ];

  if (!projects || projects.length === 0) {
    return <p>Carregando projetos...</p>;
  }

  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <hr className={styles.separator} />
            <div className={styles.links}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.type === "GitHub" ? styles.githubLink : styles.siteLink}
                >
                  {link.type}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
