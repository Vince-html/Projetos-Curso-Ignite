import { BrowserRouter as Router } from 'react-router-dom';
import { FoodProvider } from './Hooks/useFood';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <FoodProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </FoodProvider>
  </>
);

export default App;
