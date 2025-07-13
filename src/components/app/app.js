import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'ivanov', lastName: 'inov', salary: 2000, id: '1' },
                { name: 'petrov', lastName: 'onod', salary: 1200, id: '2' },
                { name: 'govnov', lastName: 'ipod', salary: 4000, id: '3' },
            ],
        };
    }

    deleteItem = id => {
        this.setState(({ data }) => ({ data: data.filter(e => e.id !== id) }));
    };

    addItem = (name, lastName, salary, id) => {
        const newItem = {
            name,
            lastName,
            salary,
            increase: false,
            id: id,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
