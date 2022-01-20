import React, { useState } from "react"
import { css } from "@emotion/core"
import { LANDING, HOW_I_DO, DOMAIN_TOOLS } from "./index"

const DomainFacade = () => {

  const [pageState, setPageState] = useState(LANDING)

  const changeState = () => {
    switch (pageState) {
      case LANDING:
      default:
        setPageState(HOW_I_DO)
        break
      case HOW_I_DO:
        setPageState(DOMAIN_TOOLS)
        break
      case DOMAIN_TOOLS:
        setPageState(LANDING)
        break
    }
  }

  return <>
    <div id={LANDING} hidden={pageState !== LANDING}>
      <h1>Améliorer votre expérience digital.</h1>
      <button onClick={changeState}>Plus de détails</button>
    </div>
    <div id={HOW_I_DO} hidden={pageState !== HOW_I_DO}>
      <h2>Comment j'interviens?</h2>
      <ol>
        <li>Analyse des besoins, identifications des traitements.</li>
        <li>Prototypage et proposition de budget.</li>
        <li>Développement d'une solution.</li>
        <li>Déploiement et exploitation de la solution.</li>
      </ol>
      <button onClick={changeState}>Mes outils</button>
    </div>
    <div id={DOMAIN_TOOLS} hidden={pageState !== DOMAIN_TOOLS}>
      <h2>Mes outils</h2>
      <h3 css={css`display: inline;`}>Méthodologies: </h3>Agile, Scrum, Kanban et Merise.<br />
      <h3 css={css`display: inline;`}>Design: </h3>Figma.<br />
      <h3 css={css`display: inline;`}>Mobile: </h3>Kotlin et Android Studio.<br />
      <h3 css={css`display: inline;`}>Front side: </h3>Html, Css, Vanilla Javascript, Reactjs et Gatsbyjs.<br />
      <h3 css={css`display: inline;`}>Server side: </h3>
      <ul css={css`list-style-type:none;
                    text-align: left;
                    display: table;`}>
        <li>Kotlin, Groovy, Java et SpringBoot</li>
        <li>Javascript, Node.js et ExpressJs</li>
        <li>PostgreSQL, MySQL, H2 et Firebase</li>
        <li>Docker, Kubernetes et Microkubernetes</li>
      </ul>
      <button onClick={changeState}>Accueil</button>
    </div>
  </>
}

export default DomainFacade