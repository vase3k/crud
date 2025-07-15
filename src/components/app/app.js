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
                    name: 'Vasiliy',
                    lastName: 'Vinogradov',
                    salary: 4000,
                    rise: false,
                    increase: false,
                    id: '3',
                },
                {
                    name: 'maxim',
                    lastName: 'Vinogradov',
                    salary: 5000,
                    rise: false,
                    increase: false,
                    id: '4',
                },
                {
                    name: 'kiril',
                    lastName: 'Vinogradov',
                    salary: 200,
                    rise: false,
                    increase: false,
                    id: '5',
                },
            ],
            term: '',
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
        if (name && lastName && salary > 0) {
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr,
                };
            });
        }
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            const termin = term.toLowerCase(),
                name = item.name.toLowerCase(),
                lastName = item.lastName.toLowerCase();
            return name.indexOf(termin) > -1 || lastName.indexOf(termin) > -1;
        });
    };

    onUpdateSearch = term => {
        this.setState({ term });
    };

    filterProps = prop => this.state.data.filter(item => item[prop]).length;

    render() {
        const { data, term } = this.state;
        const employees = data.length;
        const increase = this.filterProps('increase');
        const rise = this.filterProps('rise');
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase} rise={rise} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
