  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
     {/* Primeira etapa */}
     <nav id="header">
        <ul className="menu">
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      
      <div className="container">
        <div className="texto">
          <p className="bold-text">Olá, eu sou James Desenvolvedor Full Stack</p>
          <p>Siga-me para mais informações do meu perfil</p>          
        </div>
        <div className="botao">Clique Aqui</div>
      </div>
      
      {/* Segunda etapa */}
      <div className="container-colunas">
        <h2 className="titulo-blog">BLOG</h2>
        <div className="coluna"></div>
        <div className="coluna"></div>
      </div>
          </>
          ) 
          
  }

  export default App
