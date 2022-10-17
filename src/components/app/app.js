import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state={
           data: [
            {name: "Dima", skill : 111, increase: false, id :1, like: false},
            {name: "Kiryl", skill : 123, increase: false, id :2, like: false},
            {name: "Slava", skill : 124, increase: false, id :3, like: false},
        ]
        };
        this.maxId = 4;
    }

    deletePlayer = (id) => {
        this.setState(({data})=> {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addPlayer= (event, name, skill) => {
        event.preventDefault();
        console.log(222)
    }

    render() {
        
        return (
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <Employeeslist 
                    data={this.state.data}
                    onDelete={this.deletePlayer}/>
                <EmployeesAddForm
                    onAdd={this.addPlayer}/>
            </div>
        )

    }


}

export default App;