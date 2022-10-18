import EmployeeslistItem from '../employees-list-item/employees-list-item';
import "./employees-list.css"

const Employeeslist = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        return (
            <EmployeeslistItem 
            key={item.id} 
            name = {item.name} 
            skill = {item.skill} 
            increase = {item.increase} 
            like = {item.like}
            onDelete={() => onDelete(item.id)}
            onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}

            />
        )
    });

    return(
        <div className="app-list list-group">
            {elements}
        </div>
    )
}


export default Employeeslist;