import { components } from '../view-screen/index.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';


  switch (hash) {
    case '':
    case '#':
    case '#/':
    { return sectionMain.appendChild(components.home()); }
    case '#/register':
    case '#/foro':
    { return sectionMain.appendChild(components[id]()); }
    case '#/foro/#contact':
    { return sectionMain.appendChild(components.contact()); }
    default:
    { return sectionMain.appendChild(components.different()); }
  }
};
