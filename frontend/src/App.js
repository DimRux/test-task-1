import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import initI18next from './i18next.js';
import store from './slices/index.js';
import { Catalog } from './Components/Catalog.js';
import { Basket } from './Components/Basket.js';
import { PayForm } from './Components/PayForm.js';

function App() {
  initI18next();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/pay" element={<PayForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;