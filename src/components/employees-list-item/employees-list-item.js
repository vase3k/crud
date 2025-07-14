import './employees-list-item.css';

const EmployeesListItem = props => {
    const { name, lastName, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } =
        props;

    let classNames = 'list-group-item d-flex justify-content-between';
    classNames = increase ? classNames + ' increase' : classNames;
    classNames = rise ? classNames + ' like' : classNames;

    return (
        <div>
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleRise}>
                    {name} {lastName}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm " onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </div>
    );
};

export default EmployeesListItem;
