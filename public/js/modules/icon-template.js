const emptyTemplate = html`<span class="icon"></span>`;
const svgTemplate = html`<svg class="icon" width="20" height="20" aria-hidden="true">
  <use xlink:href="#icon-star"></use>
</svg>`;

function getVerifiedIconTemplate(isVerified) {
  return isVerified ? svgTemplate : emptyTemplate;
}

export {getVerifiedIconTemplate};
