import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export interface Student {
    id: string;
    name: string;
    score: number;
}
const ListStudents: React.FC = () => {
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
                        <td><Link to={`/student/${st.id}`}>{st.name}</Link></td>
                        <td>{st.score}</td>
                        <td><button>Sửa</button> | <button>Xóa</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ListStudents;