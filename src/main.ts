import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
// import './topics/01-basic-types';
// import './topics/02-object-interface.ts';
// import './topics/03-functions.ts';
// import './topics/04-homework-types.ts';
// import './topics/05-basic-destructuring.ts';
// import './topics/06-function-destructuring.ts';
// import './topics/07-modules.ts';
import './topics/08-classes.ts';
import './topics/09-generics.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hello World
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
