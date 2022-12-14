import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            name:"",
            skill: ""
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.skill);
        this.setState({
            name:"",
            skill: ""
        })
    }
    render () {
        const {name, skill} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового героя</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>                    
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его nickname?"
                        name = 'name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Кавов его рейтинг?"
                        name = 'skill'
                        value={skill}
                        onChange={this.onValueChange} />
    
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;