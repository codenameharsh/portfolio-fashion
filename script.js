const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); button?.setAttribute('aria-expanded', 'false'); if (button) button.textContent = 'Menu';
}));

const cases = {
  aura: { kicker: '01 / Luxury fashion brand & illustration', title: 'Aura', lede: 'Aura began as a study in how a fashion brand can feel refined before a single garment reaches the rack.', brief: 'I set out to give a luxury fashion concept a visual language with enough depth to carry across illustration, editorial layout, and brand storytelling.', approach: 'I explored silhouettes, styling, and color through original fashion illustration, then built a cohesive lookbook that paired the work with intentional typography and pacing.', gallery: [
    ['assets/aura/aura-visual-system.png', 'Aura visual system and collection boards'],
    ['assets/aura/aura-astria-collection.png', 'Astria Collection fashion illustration'],
    ['assets/aura/aura-brand-seal.png', 'Aura celestial seal design'],
    ['assets/aura/aura-color-palette.png', 'Aura Bloom color palette'],
    ['assets/aura/aura-logo-variations.png', 'Aura logo variations'],
    ['assets/aura/aura-type-system.png', 'Aura typography system'],
    ['assets/aura/aura-light-play.png', 'Aura light play color system'],
    ['assets/aura/aura-web-concept.png', 'Aura website concept'],
    ['assets/aura/aura-packaging.png', 'Aura packaging concept'],
    ['assets/aura/aura-celestial-seal.png', 'Aura line-art celestial seal']
  ] },
  madras: { kicker: '02 / Apparel graphic design', title: 'Madras Merch', lede: 'Madras Merch translates a rich local visual culture into graphics made to travel across apparel and lifestyle products.', brief: 'The brief was to create an ownable graphic collection rooted in Chennai references while ensuring every design could work in different product formats.', approach: 'I researched cultural and visual references, developed eight original graphics, and prepared adaptable artwork for apparel and lifestyle merchandise. The collection generated 850+ sales.', gallery: [
    ['assets/madras/madras-tamil-type.png', 'Tamil type exploration'],
    ['assets/madras/madras-heritage-architecture.png', 'Chennai heritage architecture illustration'],
    ['assets/madras/madras-winterpodu.png', 'Chennai winter graphic'],
    ['assets/madras/madras-super-king.png', 'Chennai Super King graphic'],
    ['assets/madras/madras-nightscape.png', 'Chennai nightscape illustration'],
    ['assets/madras/madras-city-map.png', 'Madras city map illustration'],
    ['assets/madras/madras-filter-concept.png', 'Madras filter coffee concept'],
    ['assets/madras/madras-dance-illustration.png', 'Bharatanatyam dance illustration'],
    ['assets/madras/madras-dance-alternate.png', 'Bharatanatyam color exploration'],
    ['assets/madras/madras-idli-vada.png', 'Idli vada graphic']
  ] },
  bloom: { kicker: '03 / Pattern play & surface design', title: 'Bloom & Glow', lede: 'Bloom & Glow is a surface-design exploration where playful florals turn everyday apparel into a moment of color and character.', brief: 'I developed three patterns for print-on-demand application, creating a flexible surface-design set that could move between repeat artwork and garment placement.', approach: 'I used bright florals, a simple line-based repeat, and layered botanical elements to create distinct pattern directions. I then tested the floral artwork on a dress mockup to show scale, composition, and wearability.', gallery: [
    ['assets/bloom/bloom-floral-repeat.png', 'Bloom & Glow floral repeat pattern'],
    ['assets/bloom/bloom-line-repeat.png', 'Bloom & Glow organic line repeat pattern'],
    ['assets/bloom/bloom-floral-dress.png', 'Floral surface design on dress mockup'],
    ['assets/bloom/bloom-dress-detail.png', 'Floral dress surface-design detail']
  ] },
  kiddo: { kicker: '04 / Kidswear concept', title: 'Kiddo Kraft', lede: 'Kiddo Kraft is a kidswear concept built around curiosity, making, and the joyful imperfections of play.', brief: 'I wanted to create a visual world that could speak to children’s creativity while still feeling considered and easy for families to engage with.', approach: 'The direction pairs tactile color, cheerful forms, and craft-inspired details to create a playful foundation for apparel, packaging, and storytelling.' }
};
const modal = document.querySelector('.case-modal');
const close = document.querySelector('.modal-close');
document.querySelectorAll('.project[data-project]').forEach(card => card.addEventListener('click', () => {
  const item = cases[card.dataset.project];
  document.querySelector('#case-kicker').textContent = item.kicker;
  document.querySelector('#case-title').textContent = item.title;
  document.querySelector('#case-lede').textContent = item.lede;
  document.querySelector('#case-body').innerHTML = `<section><h3>The brief</h3><p>${item.brief}</p></section><section><h3>My approach</h3><p>${item.approach}</p></section>`;
  const gallery = document.querySelector('#case-gallery');
  gallery.innerHTML = item.gallery ? `<h3>Visual direction</h3><div class="gallery-grid">${item.gallery.map(([source, alt]) => `<figure><img src="${source}" alt="${alt}" loading="lazy" /><figcaption>${alt}</figcaption></figure>`).join('')}</div>` : '';
  modal.showModal();
}));
close?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', event => { if (event.target === modal) modal.close(); });
