import { useState } from 'react';
import './App.css'
import Header from './components/Header/'

function App() {

  const [contador, setContador] = useState(0)

  // let contador = 0;

  function handleButtonCount() {
    // contador = contador + 1;
    // console.log(contador);
    // contador++;
    setContador(contador+1);
  }

  const handleButtonClick = () => {
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite outro número'))
    let soma = n1+n2 
    let imparOuPar = soma %2 == 0 ? 'par' : 'impar'
    alert(`A soma vale ${soma} e o número ${imparOuPar}`)

  }

  return (
    <>
    <Header title = 'A desconjuração é brutal' />
     <h2>Campinas</h2>
     <button onClick={handleButtonClick}>Clique aqui</button>
     <Header title = {contador}/>
     <button onClick={handleButtonCount}>Count</button>
     
    </>
  )
}

export default App
