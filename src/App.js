import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Serveses from './components/Serveses/Serveses';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Faqs from './components/Faqs/Faqs';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/serveses">
            <Serveses></Serveses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="blog">
            <Blog></Blog>
          </Route>
          <Route path="/faqs">
            <Faqs></Faqs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
