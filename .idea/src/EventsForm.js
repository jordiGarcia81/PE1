import * as React from 'react';
import { whithRouter } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import axios from 'axios';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabView, TabPanel } from 'primereact/tabview';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {Password} from 'primereact/password';
import 'primeflex/primeflex.css';

class EventsForm extends React.Component{
    
    render(){
        return(
<div>
<div className={'display'}>
                <p>This is the report's view</p>
            </div>
</div>
        );
    }
}