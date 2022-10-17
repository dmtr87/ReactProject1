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

    render () {
        const {name, skill} = this.state
        const {onAdd} = this.props
        return (
            <div className="app-add-form">
                <h3>Добавьте нового героя</h3>
                <form
                    className="add-form d-flex">
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
    
                    <button type="submit"
                        className="btn btn-outline-light"
                        onSubmit={() => onAdd(name, skill)}
                        >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;