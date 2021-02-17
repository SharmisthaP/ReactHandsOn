
import CompanyDetailsList from './Components/companieslistcomponent';
import LoginComponent from './Components/logincomponent';
import WatchListComponent from './Components/watchlistcomponent';
import PerformanceComponent from './Components/performancecomponent';
import AuthContextProvider from './Contexts/AuthContext';
import MenuComponent from './Components/menucomponent';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    
    <AuthContextProvider>
    <Router>
       <MenuComponent />
     <Switch>
       
        <Route path="/" exact component={LoginComponent} />
        <Route path="/companies" component={CompanyDetailsList} />
        <Route path="/watchlist" component={WatchListComponent} />
        <Route path="/performance" component={PerformanceComponent} />

      </Switch>
     
    </Router>
    </AuthContextProvider>
   
   
  );
}

export default App;
