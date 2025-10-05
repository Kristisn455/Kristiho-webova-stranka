import App from './App.js';

const container = document.getElementById('root');
const react = window.React;
const reactDOM = window.ReactDOM;

if (!container) {
  console.error('Root element not found.');
} else if (!react || !reactDOM) {
  container.innerHTML = '<p style="color:#fff;font-family:sans-serif;text-align:center;padding:2rem;">Nepodarilo sa naËÌtaù React. Sk˙ste obnoviù str·nku.</p>';
} else {
  const root = reactDOM.createRoot(container);
  root.render(react.createElement(App));
}
