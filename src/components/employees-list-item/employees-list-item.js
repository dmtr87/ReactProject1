import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState((state) => ({
            increase: !state.increase
        }))
    }

    addLike = () => {
        this.setState((state) => ({
            like: !state.like
        }))
    }

    render () {

        const {name, skill,onDelete} = this.props
        const {increase,like} = this.state



        let className = "list-group-item d-flex justify-content-between";

        if(increase){
            className += " increase"
        }
        if(like){
            className += " like"
        }
        
        
        return (
            <li className= {className}>
                <span className="list-group-item-label"
                onClick={this.addLike}>
                    {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={"skill:" + skill}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
        
    }


}

export default EmployeesListItem;