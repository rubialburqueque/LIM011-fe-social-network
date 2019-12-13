import { components } from '../view/index.js.js.js.js';

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
        case '#/contactenos':
            { return sectionMain.appendChild(components[id]()); }
        default:
            { return sectionMain.appendChild(components.different()); }
    }
};