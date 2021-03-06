
import './App.scss';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Form from '../Form/form';
import Results from '../Result/results';
import If from '../if/if';
import Else from '../else/else';
import Loading from '../loading/loading'
import History from '../history/history';
import Home from '../main/home';
import { Route, Switch } from 'react-router-dom';
import Help from '../help/help';

import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';






class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headers:{},
     
      flag: false,
      loading: true,
      // count : 0,
      // results:{},
      url:'',
      method :'',
      save : JSON.parse(localStorage.getItem('save')),
      results:{},
     
  }
  }

  handleForm = (headers,results,method,url,flag ) => {
    console.log('from the parent handler', headers,results,method,url,flag);
    console.log('************',results);
    this.setState({headers,results,method,url,flag });
  }

  toggle = () => {
    //if true then return false else return true

    this.setState({ loading: !this.state.flag });
    console.log('*************************',!this.state.flag )
  }

  // handlers =()=>{


  // }

  render(){
    return (
      <Router>

       <Header />
                  
         <Switch>
             <Route exact path="/"  > <Home  />  </Route>
             <Route exact path="/help"   > <Help /> </Route>
             <Route exact path="/history"  > <History /> </Route>
        </Switch>

     

     
     
      
     
      
      <Footer />


     
     
   
    </Router>

    )
  }
}




export default App;
