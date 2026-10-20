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

const projectLinks = [...document.querySelectorAll('[data-case]')];
const workIndexLinks = [...document.querySelectorAll('[data-work-index]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scrollBehavior = () => reducedMotion.matches ? 'auto' : 'smooth';
const setProject = (caseId, open, shouldScroll = false, updateUrl = false) => {
  projectLinks.forEach(link => {
    const target = document.getElementById(link.dataset.case);
    const active = link.dataset.case === caseId && open;
    target.hidden = !active;
    link.setAttribute('aria-expanded', String(active));
    link.querySelector('.project-toggle').textContent = active ? 'Close case study ↑' : 'Open case study ↓';
  });
  workIndexLinks.forEach(link => {
    const active = link.dataset.workIndex === caseId && open;
    link.classList.toggle('is-active', active);
    active ? link.setAttribute('aria-current', 'true') : link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.mobile-project-switcher a').forEach(link => {
    const active = link.dataset.openCase === caseId && open;
    link.classList.toggle('is-active', active);
    active ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
  });
  if (updateUrl) history.pushState({ caseId: open ? caseId : null }, '', open ? `#${caseId}` : '#work');
  if (open && shouldScroll) requestAnimationFrame(() => document.getElementById(caseId)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }));
};
projectLinks.forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  const isOpen = link.getAttribute('aria-expanded') === 'true';
  setProject(link.dataset.case, !isOpen, !isOpen, true);
  if (isOpen) requestAnimationFrame(() => link.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }));
}));
if (location.hash && document.querySelector(`[data-case="${location.hash.slice(1)}"]`)) setProject(location.hash.slice(1), true, true);

window.addEventListener('popstate', () => {
  const caseId = location.hash.slice(1);
  if (document.querySelector(`[data-case="${caseId}"]`)) {
    setProject(caseId, true, true);
  } else {
    setProject(null, false);
  }
});

document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(link.dataset.scroll)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  });
});

document.querySelectorAll('[data-open-case]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    setProject(link.dataset.openCase, true, true, true);
  });
});

document.querySelectorAll('[data-close-project]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    setProject(null, false, false, true);
    requestAnimationFrame(() => document.querySelector('#work')?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }));
  });
});

const cursorLabel = document.querySelector('.cursor-label');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (cursorLabel && canHover) {
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('pointerenter', () => cursorLabel.classList.add('is-visible'));
    element.addEventListener('pointerleave', () => cursorLabel.classList.remove('is-visible'));
  });
  document.addEventListener('pointermove', event => {
    cursorLabel.style.transform = `translate3d(${event.clientX + 18}px, ${event.clientY + 16}px, 0)`;
  });
  window.addEventListener('scroll', () => cursorLabel.classList.remove('is-visible'), { passive: true });
}
