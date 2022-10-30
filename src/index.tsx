import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse"
import "bootstrap/js/dist/modal"
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);