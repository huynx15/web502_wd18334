import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Student } from "./ListStudents";
const StudentDetail: React.FC = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<Student>();
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
    return (
        <div>
            <h2>Thông tin sinh viên</h2>
            <h3>Họ và tên: {student?.name}</h3>
            <p>ID: {student?.id}</p>
            <p>Name: {student?.name}</p>
        </div>
    );
}
export default StudentDetail;