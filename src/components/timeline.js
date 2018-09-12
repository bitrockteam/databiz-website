import { html } from 'lit-html';

export const timeline = data => {
  const items = data.map(e => html`
    <div class="timeline__item">
      <div class="timeline__content">
        <h3>${e.year}</h3>
        <p>${e.content}</p>
      </div>
    </div>
  `);

  const markup = html`
    <article id="timeline">
      <div class="timeline">
        <div class="timeline__wrap">
          <div class="timeline__items">
            ${items}
          </div>
        </div>
      </div>
    </article>
  `;
  
  return markup;
}