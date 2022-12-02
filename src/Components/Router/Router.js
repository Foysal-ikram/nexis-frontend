import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Signup1 from "../Signup/Signup1";
import Signup2 from "../Signup/Signup2";
import Signup3 from "../Signup/Signup3";
import Test from "../Test/Test";

const router = createBrowserRouter([
    {
        path :'/' ,
        element : <Main></Main> ,
        children : [
            {
                path : '/signup' ,
                element : <Signup></Signup> ,
                children : [
                    {
                        path : '/signup' ,
                        element : <Signup1></Signup1>
                    },
                    {
                        path : '/signup/2' ,
                        element : <Signup2></Signup2>
                    },
                    {
                        path : '/signup/3' ,
                        element : <Signup3></Signup3>
                    },

                ]
            },
            {
                path : '/login' ,
                element :  <Login></Login>
            },
            {
                path : '/list' ,
                element : <Test></Test>
            }
        ]
    }
])

export default router ;