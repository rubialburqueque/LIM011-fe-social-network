import { components } from '../view/components.js';

export const changeView = (hash) => {
  const id = hash.split('/')[1];
  const sectionIndex = document.getElementById('perfil');
  sectionIndex.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/': { return sectionIndex.appendChild(components.home()); }
    case '#/perfil': { return sectionIndex.appendChild(components[id]()); }
    default:
      /* break; */
  }
};
