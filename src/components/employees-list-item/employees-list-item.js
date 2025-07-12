import { Component, useState } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        };
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({ increase: !increase }));
    };

    like = () => {
        this.setState(({ like }) => ({ like: !like }));
    };
    render() {
        const { name, lastName, salary } = this.props;
        const { increase, like } = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        classNames = increase ? classNames + ' increase' : classNames;
        classNames = like ? classNames + ' like' : classNames;

        return (
            <div>
                <li className={classNames}>
                    <span className="list-group-item-label" onClick={this.like}>
                        {name} {lastName}
                    </span>
                    <input
                        type="text"
                        className="list-group-item-input"
                        defaultValue={salary + '$'}
                    />
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}
                        >
                            <i className="fas fa-cookie"></i>
                        </button>

                        <button type="button" className="btn-trash btn-sm ">
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
            </div>
        );
    }
}

export default EmployeesListItem;
