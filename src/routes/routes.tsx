import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../page/homepage/HomePage";
import ListStudents from "../page/students/ListStudents";
import StudentDetail from "../page/students/StudentDetail";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/students', element: <ListStudents /> },
            { path: '/student/:id', element: <StudentDetail /> },
        ]
    }
]);