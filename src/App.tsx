import { myProjects } from "../components/projects.tsx"
import ServicesC from "../components/services.tsx"

import { useState } from "react";

import "../styles/header.css";
import "../styles/aboutMe.css";
import "../styles/global.css";
import "../styles/hability.css";
import "../styles/projects.css";


export default function App() {
  

  return (
    <main className="home">
      <header>
        <img src="" alt="logo" />

        <div className="pages">
          <h2 className="textHeader">
            <a href="#Project" className="link">Projetos</a>
          </h2>

          <h2 className="textHeader">
            <a href="#" className="link">Serviços</a>
          </h2>

          <h2 className="textHeader">
            <a href="#" className="link">Contatos</a>
          </h2>
        </div>
      </header>

      <div className="aboutMe">
        <div className="textAboutMe">
          <h1 className="titleRGB">Quem sou eu?</h1>
          <h3 className="textRGB">
            Sou um jovem de 16 anos e atuo com desenvolvimento web,
            manuntenção de computadores e suporte técnico. Gosto de
            transformar problemas em soluções simples e rápida!
          </h3>
        </div>

        <div className="cardMe">
          <img
            src="https://avatars.githubusercontent.com/u/204924784?v=4"
            alt="icon_Marcos"
          />

          <div className="text">
            <h1 className="titleRGB">Marcos G.</h1>
            <h3 className="textRGB">Desenvolvedor FullStack</h3>
            <h3 className="textRGB">Suporte Técnico</h3>
          </div>
        </div>
      </div>

      <div className="cardsHability">
        <h1 className="title">Habilidades</h1>

        <div className="cards">
          <div className="card">
            <h1 className="cardTitle">FrontEnd</h1>

            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>

          <div className="card">
            <h1 className="cardTitle">BackEnd</h1>

            <ul>
              <li>Node.JS</li>
              <li>Express.js</li>
              <li>APIs</li>
            </ul>
          </div>

          <div className="card">
            <h1 className="cardTitle">Infra</h1>

            <ul>
              <li>Linux</li>
              <li>Redes</li>
              <li>Hardware</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="title" id="Project">
        Projetos
      </h1>

      <div className="projects">
      </div>

      <div className="services">
        <h1 className="title">Serviços</h1>

        <ServicesC />
      </div>
      <h1 className="title">Onde me encontrar?</h1>
    </main>
  );
}