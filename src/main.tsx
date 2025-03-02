import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
      <Toaster position="top-right"/>
    </Provider>
);
