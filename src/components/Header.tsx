import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/students">Danh sách sinh viên</Link></li>
            <li><Link to="/add-student">Thêm sinh viên</Link></li>
        </ul>
    );
}
export default Header;