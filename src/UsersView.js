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



export class UsersView extends React.Component {


    constructor(props) {
        super(props);
        this.state ={
            userList: [],
            UsuarioId : '',
            value : '',

        }
       // this.filterName=this.filterName.bind(this);
        
    }
   
    componentDidMount() {
        this.getUsers();
        this.actionBodyTemplate();
        
    }
    render() {
        return (
            <div className="card">
                <div>
                <Button label="Filter" type="text"  onClick={(value) => this.filterName(value)}/>
                        <InputText placeholder="Name"  />
                
                
                <Button label="Filter" type="text" onClick={(value) => this.filterSurname(value)}/>
                        <InputText placeholder="Surname"   />
                
                
                <Button label="Filter" type="text" onClick={(value) => this.filterEmail(value)}/>
                        <InputText placeholder="Email"  />
                        </div>
                <div className="display">
                <DataTable value={this.state.userList}>
                        <Column field="UsuarioId" header="UsuarioId"></Column>
                        <Column field="Nombre" header="Nombre"></Column>
                        <Column field="Apellidos" header="Apellidos"></Column>
                        <Column field="Edad" header="Edad"></Column>
                        <Column body={this.actionBodyTemplate}  header="Acciones"></Column>
                    </DataTable>
                    </div>
                    </div>
        );
        
    }

    getUsers = () => {
        axios.get('https://localhost:44317/api/Usuarios/GetUsuarios').then((response) => {
            this.setState({ userList: response.data });
            //console.log(this.state.userList);
        }).catch(err=>alert('Error\n'+err));
    }
    actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
               <Button icon="pi pi-key" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.changePaword(rowData)} >
                </Button>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.deleteUser(rowData.UsuarioId)} />
            </React.Fragment>
        );
    }
     changePaword = (user) => {
        console.log(user);
    }
    
   deleteUser = (UsuarioId ) => {
        axios.delete('https://localhost:44317/api/Usuarios/DeleteUsuarios?id='+UsuarioId ).then(()=> {
            console.log(UsuarioId);
            alert(UsuarioId + 'eliminado');
           
        }).catch(err=>alert('Error\n'+err));
        
    }
    filterName = (event) => {
        axios.get('api/Usuarios/GetUsuarioNombre?nombre='+event.target.value).then((response) => {
            this.setState({ value: event.target.value });
            alert('A name was submitted: ' + this.state.value);
            console.log(response.data);
        }).catch(err=>alert('Error\n'+err));

    }
    filterSurname = (event) => {
        axios.get('api/Usuarios/GetUsuarioApellido?apellido=='+event.target.value).then((response) => {
            this.setState({ value: event.target.value  });
            console.log(response.data);
        }).catch(err=>alert('Error\n'+err));

    }
    filterEmail = (event) => {
        axios.get('api/Usuarios/GetUsuarioEmail?email='+event.target.value).then((response) => {
            this.setState({ value: event.target.value  });
            console.log(response.data);
        }).catch(err=>alert('Error\n'+err));

    }


}

export default UsersView;