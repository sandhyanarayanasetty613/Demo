import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import EmployeeForm from './components/employee-form.js';
import EmployeeList from './components/employee-list.js';
import EditEmployee from './components/edit-employee'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">  
      <BrowserRouter>   
       <Header /> 
          <div className='content'>  
            <Switch>   
                 <Route exact path="/" ><EmployeeForm /></Route>     
                  <Route  path="/id" ><EmployeeList/></Route>      
                  <Route path="/1"><EditEmployee/></Route>
                            </Switch>  
                             </div>       
               </BrowserRouter>       
               </div>    
                     );
}
export default App;