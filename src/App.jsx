import { useState } from 'react';
import './App.css'
import BarcodeScanner from './components/BarcodeScanner'

function App() {
  const [isbn, setIsbn] = useState(''); // Estado para guardar el código ISBN

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {isbn}
      </h1>
      <BarcodeScanner 
        isbn={isbn}
        setIsbn={setIsbn}
        />
    </>
  )
}

export default App
