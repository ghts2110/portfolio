import Header from "../Header";
import styles from "./Summary.module.css";
import React from 'react';

function Summary() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Atualmente, sou estudante da Universidade Católica de Pernambuco (UNICAP) e participo de um grupo de 
          programação competitiva que fundei em 2022 com três colegas e o orientador do grupo. Desde então, tenho 
          me dedicado a aprender continuamente diferentes tipos de algoritmos e explorar diversas abordagens para 
          resolução de problemas.
        </p>
        <p className={styles.text}>
          Em 2023, durante meu primeiro ano de competição, passei da primeira fase da competição da SBC, na qual 
          apenas 65 equipes foram classificadas. Em meados de 2023, iniciei um projeto PIBIC sobre o 
          "Desenvolvimento de Modelos Explicáveis para Detecção de Anomalias em Séries Temporais Baseados no 
          Projeto de Características Orientadas à Aplicação", concluindo o projeto em 2024 com uma bolsa da FACEP.
        </p>
        <p className={styles.text}>
          Atualmente, tenho grande interesse na área de engenharia de software e estou em busca de uma empresa 
          internacional que me ajude a crescer como programador.
        </p>
      </div>
    </div>
  );
}

export default Summary;
