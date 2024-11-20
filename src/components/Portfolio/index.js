import Header from "../Header";
import styles from "./Portfolio.module.css";
import React from 'react';

function Portfolio() {
  // Dados dos projetos
  const projects = [
    {
      image: "/competitiveProgramming.jpeg",
      title: "Programação Competitiva",
      description: `Programação Competitiva envolve resolver problemas desafiadores usando algoritmos e estruturas de dados. 
      É uma área que desenvolve habilidades analíticas, otimização de código e trabalho em equipe. 
      As questões variam entre grafos, teoria dos números, busca, dinâmica e outros tópicos avançados.`,
      links: [
        { type: "GitHub", url: "https://github.com/ghts2110/competitive_programing" },
      ],
    },
    {
      image: "/fenix.jpg",
      title: "Instituição Fênix",
      description: `O Instituto Fênix é uma organização dedicada à reintegração social e ao apoio a pessoas privadas de liberdade 
      e egressos do sistema prisional. Sua missão é oferecer oportunidades e construir um caminho de transformação, 
      reescrevendo histórias.`,
      links: [
        { type: "GitHub", url: "https://github.com/ghts2110/Fenix" },
        { type: "Site", url: "" },
      ],
    },
    {
      image: "/mfcc.png", 
      title: "MFCC (Mel-Frequency Cepstral Coefficients)",
      description: `MFCC é uma representação compacta de áudio usada principalmente em reconhecimento de fala e análise de som. 
      Ele extrai características do espectro de frequência baseado na percepção humana, utilizando a escala Mel para representar 
      frequências percebidas.`,
      links: [
        { type: "PDF", url: "/ARTIGO FACEP - Documentos Google.pdf" },
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
              {project.links.map((link, i) =>
                link.type === "PDF" ? (
                  <a
                    key={i}
                    href={link.url}
                    download
                    className={styles.downloadButton}
                  >
                    Baixar PDF
                  </a>
                ) : (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.type === "GitHub" ? styles.githubLink : styles.siteLink}
                  >
                    {link.type}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
