import React from 'react'; 
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homePage'
import Header from './components/header/Header';
import VideoUpload from './pages/videoUploadPage';

function App() {
    return (
      <BrowserRouter>
      <Header /> 
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/videos/:id" component={HomePage}/>
          <Route path="/upload" component={VideoUpload} />
        </Switch>
      </BrowserRouter>
    );
  }

export default App;