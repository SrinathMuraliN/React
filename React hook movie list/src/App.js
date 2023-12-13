import './App.css';
import React, { useState }  from 'react';
import { useContext } from 'react';
import { Button, Modal } from 'antd';
import { ThemeContext } from "./Theme";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { theme,toggleTheme  } = useContext(ThemeContext);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={() => toggleTheme()}>{theme}</button>
      <h1>Movie List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hero</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ice Age</td>
            <td>Akram</td>
            <td onClick={showModal}>More Details</td>
          </tr>
          <tr>
          <td>Avator</td>
            <td>Jason</td>
            <td onClick={showModal}>More Details</td>
          </tr>
          <tr>
          <td>Fight Club</td>
            <td>Dave</td>
            <td onClick={showModal}>More Details</td>
          </tr>
          <tr>
          <td>KGF</td>
            <td>Tom</td>
            <td onClick={showModal}>More Details</td>
          </tr>
          <tr>
          <td>Leo</td>
            <td>Stark</td>
            <td onClick={showModal}>More Details</td>
          </tr>
        </tbody>
      </table>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Movie release date : 21/02/2023</p>
        <p>Budget: 600cr</p>
        <p>Director: Shankar</p>
      </Modal>
    </div>


  );
}



export default App;

