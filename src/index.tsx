import { registerApplication, start } from 'single-spa';
import * as serviceWorker from './registerServiceWorker';

export function tasks(location: Location) {
  return location.href.indexOf(`${location.origin}/tasks`) !== -1;
}
export function notifications(location: Location) {
  return location.href.indexOf(`${location.origin}/notifications`) !== -1;
}
export const navbar = (location: Location) => true;

registerApplication(
  'navbar',
  () => SystemJS.import('//' + process.env.REACT_APP_NAVBAR_URL + '/static/js/bundle.js'),
  navbar
);
registerApplication(
  'tasks',
  () => SystemJS.import('//' + process.env.REACT_APP_TASKS_URL + '/static/js/bundle.js'),
  tasks
);
registerApplication(
  'notifications',
  () => SystemJS.import('//' + process.env.REACT_APP_NOTIFICATION_URL + '/static/js/bundle.js'),
  notifications
);
start();
serviceWorker.unregister();
