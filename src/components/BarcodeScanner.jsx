// imports

import { useEffect, useState } from "react";

// material UI
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';

// Componente BarcodeScanner
function BarcodeScanner({
  isbn,
  setIsbn,
}) {

  // UseState

  const [books, setBooks] = useState([]); // Estado para guardar los libros
  const [newBook, setNewBook] = useState({ title: '', authors: '', value: '' }); // Estado para guardar el nuevo libro que se ingresa manualmente

  // useEffect

  useEffect(() => {
    // Si el ISBN tiene 13 caracteres, se consulta la API y se resetea el ISBN input
    if (isbn.length === 13) {
        fetchBookInfo();
        setIsbn('');
    }
}, [isbn]);

  // Funciones

  // Función para manejar el cambio en el input del ISBN
  const handleInputChange = (e) => {
    // console.log('handleInputChange', e.target.value);
    setIsbn(e.target.value);
  };

  // Función para manejar el cambio en el input del nuevo libro que se ingresa manualmente
  const handleNewBookChange = (field, value) => {
    // console.log('handleNewBookChange', field, value);
    // seteo el objeto newBook con el valor del campo que se está modificando (title, authors, value)
    setNewBook(prev => ({ ...prev, [field]: value })); 
};

  // Función para consultar la API de Google Books
  const fetchBookInfo = async () => {
    
    // try catch para manejar errores
    try {
      const API_KEY = import.meta.env.VITE_API_KEY_GOOGLE_BOOKS; // API KEY de Google Books
      const query = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`; // Query (GET) para consultar la API
      const response = await fetch(query); 
      const data = await response.json();
      if (data.items) {
        const bookData = data.items[0].volumeInfo;
        setBooks(prevBooks => [...prevBooks, { title: bookData.title, authors: bookData.authors, value: '' }]);
    } else {
        alert('Libro no encontrado');
    }
    } catch (error) {
      alert('Hubo un error al consultar la API');
    }
  };

  // Función para manejar el cambio en el input del valor ( precio ) del algun libro de la lista
  const handleValueChange = (index, newValue) => {
    setBooks(prevBooks => {
        const newBooks = [...prevBooks];
        console.log('newBooks', newBooks);
        newBooks[index].value = newValue;
        return newBooks;
    });
  };

// Función para agregar un nuevo libro *Manualmente*
const addNewBook = () => {
  // Si el libro tiene título y autor, lo agrega al estado de libros
  if (newBook.title && newBook.authors) {
      setBooks(prevBooks => [...prevBooks, newBook]);
      setNewBook({ title: '', authors: '', value: '' });
  } else {
      alert("Por favor, rellene al menos el título y los autores");
  }
};

// Función para eliminar un libro de la lista
const removeBook = (index) => {
  // Filtra el libro que se quiere eliminar
  setBooks(prevBooks => prevBooks.filter((_, idx) => idx !== index));
};

  return (
    <div>
        <input 
            type="text" 
            value={isbn} 
            onChange={handleInputChange} 
            placeholder="Ingresa el código ISBN"
        />

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Título</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                      <TableCell>
                          <TextField 
                              value={newBook.title}
                              onChange={(e) => handleNewBookChange('title', e.target.value)}
                              placeholder="Título"
                          />
                      </TableCell>
                      <TableCell>
                          <TextField 
                              value={newBook.authors}
                              onChange={(e) => handleNewBookChange('authors', e.target.value)}
                              placeholder="Autores"
                          />
                      </TableCell>
                      <TableCell>
                          <TextField 
                              value={newBook.value}
                              onChange={(e) => handleNewBookChange('value', e.target.value)}
                              placeholder="Valor"
                          />
                      </TableCell>
                      <TableCell>
                        <button onClick={addNewBook}>Agregar libro</button>
                      </TableCell>
                      
                </TableRow>
                {books.map((book, index) => (
                    <TableRow key={index}>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.authors}</TableCell>
                        <TableCell>
                            <TextField 
                                value={book.value} 
                                onChange={(e) => handleValueChange(index, e.target.value)} 
                            />
                        </TableCell>
                        
                        <TableCell>
                          {book.title && book.authors && (
                              <button onClick={() => removeBook(index)}>Eliminar</button>
                          )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        
    </div>
  );
}

export default BarcodeScanner;
