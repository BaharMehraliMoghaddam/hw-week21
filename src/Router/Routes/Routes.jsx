import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import ADDRoutes from "../PathRouters/ConfigRoutes";
import HomePage from "../../Pages/HomePage";
import LoginPage from "../../Pages/LoginPage";
import SignupPage from "../../Pages/SignupPage";
import CoursesPage from "../../Pages/CoursesPage";
import AddCoursePage from "../../Pages/AddCoursePage";
import ShowCourse from "../../Pages/ShowCourse";



 const router = createBrowserRouter([
    {
        path:ADDRoutes.Home,
        element:<Layout/>,
        errorElement:<Navigate to={"/"}/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:ADDRoutes.Login,
                element:<LoginPage/>
            },
            {
                path:ADDRoutes.Signup,
                element:<SignupPage/>
            },
            {
                path:ADDRoutes.Courses,
                element:<CoursesPage/>
            },
            {
                path: ADDRoutes.AddCourse,
                element: <AddCoursePage/>
            },
            {
                path: ADDRoutes.ShowCourse,
                element: <ShowCourse/>
            }
        ]
    }
])


export default router