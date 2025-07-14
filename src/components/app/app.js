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
                {
                    name: 'ivanov',
                    lastName: 'inov',
                    salary: 2000,
                    rise: false,
                    increase: false,
                    id: '1',
                },
                {
                    name: 'petrov',
                    lastName: 'onod',
                    salary: 1200,
                    rise: false,
                    increase: false,
                    id: '2',
                },
                {
                    name: 'govnov',
                    lastName: 'ipod',
                    salary: 4000,
                    rise: false,
                    increase: false,
                    id: '3',
                },
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
            rise: false,
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

    onToggleProp = (id, selector) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = { ...old, increase: !old.increase };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr,
        //     };
        // });

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [selector]: !item[selector] };
                }
                return item;
            }),
        }));
    };

    render() {
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
