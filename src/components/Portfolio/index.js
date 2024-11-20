import Header from "../Header";
import styles from "./Portfolio.module.css";
import React from 'react';

const projects = [
  {
    image: "/competitiveProgramming.jpeg",
    title: "Competitive Programming",
    description: `Programação Competitiva envolve resolver problemas desafiadores usando algoritmos e estruturas de dados. 
      É uma área que desenvolve habilidades analíticas, otimização de código e trabalho em equipe. 
      As questões variam entre grafos, teoria dos números, busca, dinâmica e outros tópicos avançados.`,
      link: "https://github.com/ghts2110/competitive_programing",
  },
  {
    image: "link-da-imagem-projeto2",
    title: "Projeto 2",
    description: "Descrição breve do Projeto 2.",
    link: "https://github.com/seu-usuario/projeto2",
  },
  {
    image: "link-da-imagem-projeto3",
    title: "Projeto 3",
    description: "Descrição breve do Projeto 3.",
    link: "https://github.com/seu-usuario/projeto3",
  },
];

function Portfolio() {
  return (
    <div>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Portfolio;
