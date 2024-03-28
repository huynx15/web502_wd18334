import React, { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { Student } from "../../interfaces/Student";
import { useNavigate, useParams } from "react-router";
const UpdateStudent = () => {
    const [student, setStudent] = useState<Student>({});
    const nav = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const getStudent = async () => {
            try {
                const res = await fetch(`http://localhost:3001/students/${id}`);
                const data = await res.json();
                setStudent(data);
            } catch (error) {
                console.log(error);
            }
        }
        getStudent();
    }, []);
    const handleChangeField = (key: string, value: string | number) => {
        setStudent({ ...student, [key]: value })
    }
    const handleCreateStudent = () => {
        const addStudent = async () => {
            try {
                const res = await fetch(`http://localhost:3001/students/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(student)
                });
                const data = await res.json();
                if (data?.id) {
                    nav('/students');
                }
            } catch (error) {
                console.log(error);
            }
        }
        addStudent();
        // console.log(student);
    }
    return (
        <div>
            <h2>Thêm sinh viên</h2>
            <TextField
                placeholder="Tên sinh viên"
                value={student.name}
                onChange={(e) => handleChangeField('name', e)}
            />
            <TextField
                placeholder="Điểm sinh viên"
                value={`${student.score}`}
                onChange={(e) => handleChangeField('score', e)}
            />
            <Button
                title="Sửa sinh viên"
                onClick={handleCreateStudent}
            />
        </div>
    );
}
export default UpdateStudent;