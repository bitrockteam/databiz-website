import { html, render } from 'lit-html';

const slides = items => items.map(e => html`
  <li>
    <img src=${e.logo} alt="Confluent">
    <p>${e.description}</p>
  </li>
`);

export const partners = content => {
  const template = html`
    <article>
      <div>
        <header>
          <h2>${content.title}</h2>
        </header>
      </div>
      <div>
        <ul id="slider">
          ${slides(content.items)}
        </ul>
      </div>
    </article>
  `;

  const wrapper = document.querySelector('#partners .wrapper');
  render(template, wrapper);
}