import React from 'react';
import './App.css';

// props
// element: thuộc tính
// function component: tham số


function Button1({ str_button }: { str_button: string }) {
  return (
    <button id="id_btn" className="cl_btn">{str_button}</button>
  );
}

function Button2({ str_button, class_button }: { str_button: string, class_button: string }) {
  return (
    <button id="id_btn" className={class_button}>{str_button}</button>
  );
}
interface MyButton {
  str_button: string;
  class_button: string;
}
function Button3({ str_button, class_button }: MyButton) {
  return (
    <button id="id_btn" className={class_button}>{str_button}</button>
  );
}

interface Student {
  id: string;
  name: string;
}
function ListStudent({ students }: { students: Student[] }) {
  return (
    <ul>
      {students.map(st =>
      (<li key={st.id}>
        <h3>{st.name}</h3>
        <p>{st.id}</p>
      </li>)
      )}
    </ul>
  );
}

function App() {
  const sts = [
    { id: "PH123456", name: "Nguyễn Xuân Huy" },
    { id: "PH126789", name: "Nguyễn Xuân Huy" },
  ];
  return (
    <div className="App">
      <h1>React - Typescript</h1>
      <Button1 str_button="Button 1" />
      <Button2 str_button="Button 2" class_button="cl_button" />
      <Button3 str_button="Button 3" class_button="cl_button" />
      <ListStudent students={sts} />
    </div>
  );
}

export default App;
