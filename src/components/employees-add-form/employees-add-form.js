import './employees-add-form.css'

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового героя</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его nickname?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Кавов его рейтинг?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;