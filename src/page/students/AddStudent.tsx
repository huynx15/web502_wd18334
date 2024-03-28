import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { Student } from "../../interfaces/Student";
import { useNavigate } from "react-router";
const AddStudent = () => {
    const [student, setStudent] = useState<Student>({});
    const nav = useNavigate();
    const handleChangeField = (key: string, value: string | number) => {
        setStudent({ ...student, [key]: value })
    }
    const handleCreateStudent = () => {
        const addStudent = async () => {
            try {
                const res = await fetch('http://localhost:3001/students', {
                    method: "POST",
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
                onChange={(e) => handleChangeField('name', e)}
            />
            <TextField
                placeholder="Điểm sinh viên"
                onChange={(e) => handleChangeField('score', e)}
            />
            <Button
                title="Thêm sinh viên"
                onClick={handleCreateStudent}
            />
        </div>
    );
}
export default AddStudent;