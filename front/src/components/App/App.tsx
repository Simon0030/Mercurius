import ReactLogo from '../UI/ReactLogo/ReactLogo';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './MainPageArea/MainPage';
import SalesArea from './SalesArea/SalesArea';
import Maintenance  from "./MaintenanceArea/Maintenance";
import Statistics from "./StatisticsArea/Statistics";
import Help from "./HelpArea/Help";
export enum APP_PAGE {
  HOME = '/',
  HELP = '/help',
  MAINTENANCE = '/maintenance',
  STATISTICS = '/statistics',
  SALES = '/sales',
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={APP_PAGE.HOME} component={MainPage} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.MAINTENANCE} component={Maintenance} />
        <Route path={APP_PAGE.STATISTICS} component={Statistics} />
        <Route path={APP_PAGE.HELP} component={Help} />
      </div>
    </Router>
  );
}

export default App;
