import logo from './logo.png';
import { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuario já existe');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  }



  return (
    <div className="App">
      <img src={logo} className='DIGUE' alt="logo"/>
      <hr/>
      <h2>Adicionar usuario</h2>
      <input
        type='text'
        placeholder='Digite o nome do usuario'
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />  
    
      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuarios</h2>
      <ol>{usuarios.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ol>
    
    
    
    </div>
  );
}

export default App;
