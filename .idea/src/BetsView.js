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


export class BetsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            betsList: [],
            value : '',
         }

    }
    componentDidMount(){
        this.getBets();
        
    }
    render() {
        return (
            <div>
           
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                    <Button label="Filter" type="text" onClick={(value) => this.filterEmail(value)}/>
                        <InputText placeholder="Email"  />
                
                
                <Button label="Filter" type="text" onClick={(value) => this.filterMarket(value)}/>
                        <InputText placeholder="Market"  />
                
                
                <Button label="Filter" type="text" />
                        <InputText placeholder="Event"  />

                        <Button label="Add Bet"/>
                        <InputText placeholder="Block Market"/>
                        <Button icon="pi pi-lock" className="p-button-danger"/>
                    </div>
                </div>


               
            </div>
            <div className="display">
                <DataTable value={this.state.betsList}>
                    <Column field="ApuestaId" header="ApuestaId"></Column>
                    <Column field="TipoApuesta" header="TipoApuesta"></Column>
                    <Column field="TipoMercado" header="TipoMercado"></Column>
                    <Column field="Dinero" header="Dinero"></Column>
                    <Column field="Fecha" header="Fecha"></Column>
                    <Column field="MercadoId" header="MercadoId"></Column>
                    <Column field="UsuarioId" header="UsuarioId"></Column>
                    
                </DataTable>
            </div>
            
        </div>

        );
    }
    getBets = () => {
        axios.get('https://localhost:44317/api/Apuestas/GetApuestas').then((response) => {
            this.setState({ betsList: response.data });
            console.log(this.state.betsList);
        });
    }
    filterEmail = (event) => {
        axios.get('https://localhost:44317/api/Apuestas/GetApuestaEmail?email='+event.target.value).then((response) => {
            this.setState({ value: event.target.value });
            console.log(response.data);
        }).catch(err=>alert('Error\n'+err));

    }
    filterMarket = (event) => {
        axios.get('https://localhost:44317/api/Apuestas/GetMercadoId?mercado='+event.target.value).then((response) => {
            this.setState({ value: event.target.value  });
            console.log(response.data);
        }).catch(err=>alert('Error\n'+err));

    }
   
}


export default BetsView;