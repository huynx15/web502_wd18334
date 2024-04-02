import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../page/homepage/HomePage";
import ListStudents from "../page/students/ListStudents";
import StudentDetail from "../page/students/StudentDetail";
import AddStudent from "../page/students/AddStudent";
import UpdateStudent from "../page/students/UpdateStudent";
import Register from "../page/auth/Register";
import Login from "../page/auth/Login";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/students', element: <ListStudents /> },
            { path: '/student/:id', element: <StudentDetail /> },
            { path: '/add-student', element: <AddStudent /> },
            { path: '/update-student/:id', element: <UpdateStudent /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
        ]
    }
]);