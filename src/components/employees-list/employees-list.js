import EmployeeslistItem from '../employees-list-item/employees-list-item';
import "./employees-list.css"

const Employeeslist = () => {
    return(
        <div className="app-list list-group">
            <EmployeeslistItem/>
            <EmployeeslistItem/>
            <EmployeeslistItem/>
            <EmployeeslistItem/>
        </div>
    )
}


export default Employeeslist;