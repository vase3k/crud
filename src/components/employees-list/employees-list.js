import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elements = data.map((e, i) => {
        return <EmployeesListItem {...e} key={i + Math.random().toFixed(3)} />;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
