import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

// props
// element: thuộc tính
// function component: tham số


// function Button1({ str_button }: { str_button: string }) {
//   return (
//     <button id="id_btn" className="cl_btn">{str_button}</button>
//   );
// }

// function Button2({ str_button, class_button }: { str_button: string, class_button: string }) {
//   return (
//     <button id="id_btn" className={class_button}>{str_button}</button>
//   );
// }
// interface MyButton {
//   str_button: string;
//   class_button: string;
// }
// function Button3({ str_button, class_button }: MyButton) {
//   return (
//     <button id="id_btn" className={class_button}>{str_button}</button>
//   );
// }


// function ListStudent({ students }: { students: Student[] }) {
//   return (
//     <ul>
//       {students.map(st =>
//       (<li key={st.id}>
//         <h3>{st.name}</h3>
//         <p>{st.id}</p>
//       </li>)
//       )}
//     </ul>
//   );
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
