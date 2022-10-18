import './app-info.css';

const AppInfo = ({players, increased}) => {
    return (
        <div className="app-info">
            <h1>Учёт игроков в компании Apex : </h1>
            <h2>Общее кол-во игроков: {players} </h2>
            <h2>Лучшие игроки: {increased} </h2>
        </div>
    )   
}

export default AppInfo;