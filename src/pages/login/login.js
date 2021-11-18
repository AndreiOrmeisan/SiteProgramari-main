import Footer from "./components/footer";
import Main from "./components/main";
import TopBar from "./components/topBar";

const LogIn =({setLoggedIn,setRegister})=>{

    return(
        <div>
            <TopBar/>
            <Main setLoggedIn = {setLoggedIn} setRegister = {setRegister}/>
            <Footer/>
        </div>
    )
}

export default LogIn;
