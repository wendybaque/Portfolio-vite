import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        left container
        <div className="intro-left-wrapper">
          <h2 className="intro-hello">Hello, my name is</h2>
          <h1 className="intro-name">Wendy Baqué</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">
                Développeuse web full stack
              </div>
              <div className="intro-title-item">Javascript</div>
              <div className="intro-title-item">React.js</div>
              <div className="intro-title-item">Express.js | Node.js </div>
              <div className="intro-title-item">Auteure de romans</div>
            </div>
          </div>
          <div className="intro-description">
            Après un bilan de compétences réalisé en full remote, je suis en
            reconversion dans le domaine du développement web et web mobile. 💻
            {/* <div><p>Je suis une personne rigoureuse, ce qui me permet de mener à bien
            mes #projets et activités confiées de A à Z et de bien gérer mon
            temps de travail. Je fais également preuve de #créativité et d
            imaginativité, ce qui me pousse à trouver des solutions innovantes
            et originales pour répondre aux besoins des clients. Enfin, ma
            curiosité me donne un goût certain pour l apprentissage et l actualisation de mes acquis dans un monde en constante évolution.
            Etre autonome dans ma pratique est important pour moi afin d envisager tous les possibles qui s'offrent à moi et repose avant
            tout sur un climat de confiance établi avec le client. Lui être
            utile apparaît aussi primordial pour donner un sens à mon travail.
            <p>🎯 Ainsi, mon objectif est de m épanouir dans un métier porteur d
            avenir et de sens, me permettant de mettre à profit mes points
            forts au service de mes clients et/ou de mon entreprise. Je
            m oriente donc vers les secteurs du digital, du numérique et de l
            informatique, notamment comme développeuse web. 🚀 Les
            valeurs les plus importantes dans le monde du travail sont, selon
            moi, l’entraide, l’écoute, l’expression de soi, l épanouissement et
            la réussite.</p></div>
            <div><p>➕ Mon petit plus ? Je suis développeuse, mais aussi
            psychologue ! Ainsi, tout naturellement, je suis attirée par l UX
            et l UI. C'est un domaine qui me parle, et qui me tient toujours à
            cœur. Mon regard est un bonus : 100% user first ! Mes domaines de
            prédilection son la #esanté et la littérature / édition. </p></div> */}
          </div>
        </div>
      </div>
      <div className="intro-right">
        right container
        <div className="intro-right-wrapper" />
      </div>
    </div>
  );
}
export default Intro;
