import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Student } from "../../interfaces/Student";
import Button from "../../components/Button";
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
    }, [student]);
    const handleDeleteStudent = (id: string) => {
        // console.log(id);
        const deleteStudent = async () => {
            try {
                const res = await fetch(`http://localhost:3001/students/${id}`, { method: "DELETE" });
                // const data = await res.json();
            } catch (error) {
                console.log(error);
            }
        }
        if (window.confirm('Bạn có muốn xóa không?')) {
            deleteStudent();
        }
    }
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
                        <td>
                            <Link to={`/update-student/${st.id}`}>Sửa</Link> |
                            <Button title="Xóa" onClick={() => handleDeleteStudent(`${st.id}`)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ListStudents;