
import './App.css';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import UsersView from './UsersView';
import BetsView from './BetsView';
import { TabMenu } from 'primereact/tabmenu';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import EventsView from './EventsView';
import ReportsView from './ReportsView';
import { InputText } from 'primereact/inputtext';
//import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

function App() {

  /* const items=[
     { label: 'Home', icon: 'pi pi-fw pi-users' , command: () => {
       window.location = '/App';}},
     { label: 'Users', icon: 'pi pi-fw pi-users' , command: () => {
       window.location = '/users';}},
     { label: 'Bets', icon: 'pi pi-fw pi-money-bill',command: () => {
       window.location = '/bets';} },
     { label: 'Events', icon: 'pi pi-fw pi-ticket',command: () => {
       window.location = '/events';} },
     { label: 'Reports', icon: 'pi pi-fw pi-copy',command: () => {
       window.location = '/reports';} }
   ];*/
  const items = [
    {
      label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
        window.location = '/App';
      }
    },
    {
      label: 'Users', icon: 'pi pi-fw pi-users', command: () => {
        window.location = '/users';
      }
    },
    {
      label: 'Bets', icon: 'pi pi-fw pi-money-bill', command: () => {
        window.location = '/bets';
      }
    },
    {
      label: 'Events', icon: 'pi pi-fw pi-ticket', command: () => {
        window.location = '/events';
      }
    },
    {
      label: 'Reports', icon: 'pi pi-fw pi-copy', command: () => {
        window.location = '/reports';
      }
    },
    
  ];
  return (
    <div className="App">
      <div>
        <TabMenu
          model={items}>

        </TabMenu>

      </div>



      <Switch>

        <Route path={'/users'}>
          <UsersView />
        </Route>
        <Route path={'/bets'}>
          <BetsView />
        </Route>
        <Route path={'/events'}>
          <EventsView />
        </Route>
        <Route path={'/reports'}>
          <ReportsView />
        </Route>
        

      </Switch>
    </div>
  );
}



/*<div className="App">
  <div>
    <button><NavLink activeClassName={'nav-active'} to={'/users'}>Users</NavLink></button>
  </div>
  <div>
    <button><NavLink activeClassName={'nav-active'} to={'/bets'}>Bets</NavLink></button>
  </div>
  <div className={'display'}>
 <Switch>
    <Route path={'/users'}>
      <UsersView/>
    </Route>
    <Route path={'/bets'}>
      <BetsView/>
    </Route>
    <Route  path={'*'}>
      <h3 className={'error'} >Sorry , but the requested view is not available</h3>
    </Route>
 </Switch>
 </div>
</div>*/

export default App;
