import './App.css';
import React, { useState }  from 'react';
import { useContext } from 'react';
import {  Modal } from 'antd';
import { ThemeContext } from "./Theme";
import input from "./input.json"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(input);
  const { theme,toggleTheme  } = useContext(ThemeContext);

  const [MovieDetails, setMovieDetails] = useState({"movie_name":"","actor":""});
  const showModal = (details) => {
    setIsModalOpen(true);
    setMovieDetails(details)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`App ${theme}`}>
      <button className="button" onClick={() => toggleTheme()}>{theme}</button>
      <h1>Movie List</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hero</th>
          </tr>
        </thead>
        <tbody>
         {input.map( (item)=> (
          <tr>
            <td>{item.movie_name}</td>
            <td>{item.actor}</td>
          <td onClick={() => showModal(item)}>More Details</td>
        </tr>
         ))}
        </tbody>
      </table>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{MovieDetails.movie_name}</p>
        <p>{MovieDetails.actor}</p>
        <p>Movie release date : 21/02/2023</p>
        <p>Budget: 600cr</p>
        <p>Director: Shankar</p>
      </Modal>
    </div>


  );
}



export default App;

