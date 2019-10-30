import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './registerServiceWorker';

export function tasks(location: Location) {
  return location.href.indexOf(`${location.origin}/tasks`) !== -1;
}

export const navbar = (location: Location) => true;

registerApplication('navbar', () => SystemJS.import('//localhost:3000/static/js/bundle.js'), () => true);
// registerApplication('tasks', () => SystemJS.impo rt('@portal/tasks'), tasks);
start();
serviceWorker.unregister();

