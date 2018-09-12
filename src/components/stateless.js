import { html, render } from 'lit-html';
import { timeline } from './timeline';
import { footer } from './footer';
import { partners } from './partners';
import bubblesImg from './../assets/logos/HeroBubbles.svg';
import aboutImg from './../assets/img/img-about.jpg';

const getWrapper = section => document.querySelector(`#${section} .wrapper`);

export const navigation = content => {
  const ul = html`<ul>
    ${content.map(e => html`
      <li><a href=${e.link}>${e.label}</a></li>
    `)}
  </ul>`;
  const nav = document.querySelector('header.topbar nav');
  render(ul, nav);
}

export const hero = content => {
  const template = html`
    <article>
      <header>
        <div class="claim">
          <h2>${content.titles.secondary}</h2>
          <h3>${content.titles.main}</h3>
        </div>
        <a class="cta" href=${content.cta.link}>
          ${content.cta.label}
        </a>
      </header>
      <figure>
        <img src=${bubblesImg} alt="Databiz Group">
      </figure>
    </article>
  `;

  render(template, getWrapper('hero'));
}

export const about = content => {
  const template = html`
    <article>
      <div>
        <header>
          <h2>${content.title}</h2>
        </header>
        <figure>
          <img src=${aboutImg}
            alt=${content.title}>
        </figure>
      </div>
      <div>
        <h3>${content.post.title}</h3>
        <p>${content.post.content}</p>
      </div>
    </article>
  `;
  const markup = html`${template}${timeline(content.timeline)}`;
  render(markup, getWrapper('about'));
}

export const group = content => {
  const posts = content.posts.map(e => html`
    <div>
      <img src=${e.logo} alt=${e.company}>
      <h3>${e.title}</h3>
      <p>${e.content}</p>
      <a class="cta" href=${e.cta.link} target="_blank" rel="noopener">
        ${e.cta.label}
      </a>
    </div>
  `);
  
  const markup = html`
    <article>
      <div>
        <header>
          <h2>${content.title}</h2>
        </header>
      </div>
      ${posts}
    </article>
  `;

  render(markup, getWrapper('group'));
}

export const philosophy = content => {
  const markup = html`
    <article>
      <div>
        <header>
          <h2>${content.title}</h2>
        </header>
        <figure>
          <img src=${content.cover} alt=${content.title}>
        </figure>
      </div>
      <div>
        <h3>${content.post.title}</h3>
        <p>${content.post.content}</p>
      </div>
    </article>
  `;

  render(markup, getWrapper('philosophy'));
}

export { footer, partners };
