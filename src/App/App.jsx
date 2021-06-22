
import './App.scss';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Form from '../Form/form';
import Results from '../Result/results';

// function App() {
//  }


//   return (
//    <React.Fragment>
//    <Header />
//    <Form />
//    <Footer />
   
//    </React.Fragment>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
      // results:"",
      count : 0,
      results:{},
      url:'',
      headers:{}
  }
  }

  handleForm = (results,count,url,headers) => {
    console.log('from the parent handler', results);
    console.log('************',results);
    this.setState({results,count,url,headers });
}

  render(){
    return (
      <React.Fragment>
      <Header />
      <Form  handler={this.handleForm}/>
      <Results  test={this.state}/>
      <Footer />
   
    </React.Fragment>

    )
  }
}

export default App;