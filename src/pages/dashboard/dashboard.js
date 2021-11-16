const Dashboard = ({setLoggedIn}) => {
    return(
        <div>
            <h1>Te ai logat cu succes. Aici o sa vezi programarile etc etc</h1>
            <button onClick = {() => {setLoggedIn(false)}}>Logout</button>
        </div>
    )
}

export default Dashboard;