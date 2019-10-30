import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './registerServiceWorker';

export function tasks(location: Location) {
  return location.href.indexOf(`${location.origin}/tasks`) !== -1;
}
export function notifications(location: Location) {
  return location.href.indexOf(`${location.origin}/notifications`) !== -1;
}
export const navbar = (location: Location) => true;

registerApplication('navbar', () => SystemJS.import('//localhost:3000/static/js/bundle.js'), navbar);
registerApplication('tasks', () => SystemJS.import('//localhost:3001/static/js/bundle.js'), tasks);
registerApplication('notifications', () => SystemJS.import('//localhost:3003/static/js/bundle.js'), notifications);
start();
serviceWorker.unregister();

