import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elements = data.map(e => {
        const { id, ...itemProps } = e;
        return <EmployeesListItem key={id} {...itemProps} />;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
