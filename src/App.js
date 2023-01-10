import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
<Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
</Switch>
    </Router>
  );
}

export default App;