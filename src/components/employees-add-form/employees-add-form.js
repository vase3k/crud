import { Component } from 'react';
import nextId from 'react-id-generator';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            salary: '',
        };
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.lastName, this.state.salary, nextId());
        this.setState({
            name: '',
            lastName: '',
            salary: '',
        });
    };

    render() {
        const { name, salary, lastName } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как фамилия?"
                        name="lastName"
                        value={lastName}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
