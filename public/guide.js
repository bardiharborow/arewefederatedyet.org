// Enhance the static guide. All assessments remain readable without JavaScript.
const technicalDetails = [...document.querySelectorAll('.technical-details')];
const expandButton = document.querySelector('#expand-details');
const syncButton = () => {
  const expanded = technicalDetails.every((detail) => detail.open);
  expandButton.textContent = expanded ? 'Collapse technical details' : 'Expand technical details';
  expandButton.setAttribute('aria-expanded', String(expanded));
};
expandButton.hidden = false;
expandButton.addEventListener('click', () => {
  const open = !technicalDetails.every((detail) => detail.open);
  technicalDetails.forEach((detail) => { detail.open = open; });
  syncButton();
});
technicalDetails.forEach((detail) => detail.addEventListener('toggle', syncButton));

const revealTarget = () => {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  let parent = target;
  while (parent) {
    if (parent instanceof HTMLDetailsElement) parent.open = true;
    parent = parent.parentElement;
  }
  requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
};
window.addEventListener('hashchange', revealTarget);
if (location.hash) revealTarget();

let printState;
window.addEventListener('beforeprint', () => {
  printState = [...document.querySelectorAll('details')].map((detail) => [detail, detail.open]);
  printState.forEach(([detail]) => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  printState?.forEach(([detail, open]) => { detail.open = open; });
  printState = undefined;
});
