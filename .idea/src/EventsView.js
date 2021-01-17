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

class EventsView extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { 
            eventList: [],
            value : '',
         }

    }
    componentDidMount(){
        this.getEvents();
        
    }
    render(){
        return(
            <div>
           
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                    <Button label="Filter" type="text" onClick={(value) => this.filterVisitor(value)}/>
                        <InputText placeholder="Visitor"  />
                
                
                <Button label="Filter" type="text" onClick={(value) => this.filterLocal(value)}/>
                        <InputText placeholder="Local"  />
                
                
                        <Button label="Filter" type="text" onClick={(event) => this.filterDate(event)}/>
                        <InputText placeholder="Date" value={this.state.value} />
                        <Button label="Add Event" href="EventsView.js" />
                        <Button label="Modify event date"/>
                        
                    </div>

                   
                </div>


               
            </div>
            <div className="display">
            <DataTable value={this.state.eventList}>
                <Column field="EventoId" header="EventoId"></Column>
                <Column field="Visitante" header="Visitante"></Column>
                <Column field="Local" header="Local"></Column>
                <Column field="Fecha" header="Fecha"></Column>
                <Column body={this.actionBodyTemplate}  header="Acciones"></Column>
            </DataTable>
        </div>
        </div>
            
        );
    }

getEvents = () => {
    axios.get('https://localhost:44317/api/Eventos/GetEvento').then((response) => {
        this.setState({ eventList: response.data });
        console.log(this.state.eventList);
    });
}
deleteUser = (EventoId ) => {
    axios.delete('api/Eventos/DeleteEventos?id='+EventoId ).then(()=> {
        console.log(EventoId);
        alert(EventoId + 'eliminado');
       
    }).catch(err=>alert('Error\n'+err));
    
}
actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
           
            <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.deleteUser(rowData.EventoId)} />
        </React.Fragment>
    );
}
filterVisitor = (event) => {
    axios.get('https://localhost:44317/api/Eventos/GetEventoVisitante?visitante='+event.target.value).then((response) => {
        this.setState({ value: event.target.value });
        console.log(response.data);
    }).catch(err=>alert('Error\n'+err));

}
filterLocal = (event) => {
    axios.get('https://localhost:44317/api/Eventos/GetEventoLocal?local='+event.target.value).then((response) => {
        this.setState({ value: event.target.value });
        console.log(response.data);
    }).catch(err=>alert('Error\n'+err));

}
filterDate = (event) => {
    axios.get('https://localhost:44317/api/Eventos/GetEventoVisitante?fecha='+event.target.value).then((response) => {
        this.setState({ value: event.target.value });
        console.log(response.data);
    }).catch(err=>alert('Error\n'+err));

}
}
export default  EventsView;
