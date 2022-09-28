import './app-filter.css'

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button className='btn btn-outline-light'
                    type='button'>
                        Все игроки</button>
            <button className='btn btn-outline-light'
                    type='button'>
                        Лучшие игроки</button>
            <button className='btn btn-outline-light'
                    type='button'>
                        Рейтинг игроков</button>
        </div>
    )
}

export default AppFilter;