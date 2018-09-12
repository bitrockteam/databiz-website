import { html, render } from 'lit-html';
import dbzLogoWhite from './../assets/logos/DatabizLogo.white.svg';

const credits = () => {
  const year = new Date().getFullYear();
  const template = html`
    <article>
      <figure>
        <img src=${dbzLogoWhite} alt="Databiz Group">
      </figure>
    
      <p>Copyright <span class="year">${year}</span> 
        Databiz Group s.r.l - Partita IVA/C.F.: 04268680263</p>
    </article>
  `;

  return template;
}

export const footer = () => {
  const wrapper = document.querySelector('footer.credits .wrapper');
  render( credits(), wrapper);
}