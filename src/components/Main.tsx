import { useEffect, useState } from "react";

interface Student {
    id: string;
    name: string;
    score: number;
}
const Main = () => {
    const [student, setStudent] = useState<Student[]>([]);
    useEffect(() => {
        const getStudent = async () => {
            try {
                const res = await fetch('http://localhost:3001/students');
                const data = await res.json();
                setStudent(data);
            } catch (error) {
                console.log(error);

            }
        }
        getStudent();
    }, []);
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {student.map(st => (
                    <tr key={st.id}>
                        <td>{st.id}</td>
                        <td>{st.name}</td>
                        <td>{st.score}</td>
                        <td><button>Sửa</button> | <button>Xóa</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Main;