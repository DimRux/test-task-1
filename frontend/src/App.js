import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './slices/index.js';
import { Catalog } from './Components/Catalog.js';
import { Basket } from './Components/Basket.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;