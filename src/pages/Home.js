import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Olá, Meu Nome é Fellipe!</h2>
        <div className='prompt'> 
          <p>Eu sou um Desenvolvedor FullStack Junior em busca de sucesso.</p> 
        </div>
      </div>
      <div className='skills'>
        <h1> Habilidades</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span> ReactJs, HTML5, CSS, React Native, BootStrap, MaterialUI</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span> MySQL, PHP, NodeJS(Iniciante)</span>
          </li>
          <li className='item'>
            <h2> Linguagens de Programação</h2>
            <span> JavaScript, C#, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
