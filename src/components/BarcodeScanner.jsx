// imports

import { useEffect, useState } from "react";

// material UI
import { Table, TableBody, TableHead  } from '@mui/material';

// logic
import { fetchBookInfo } from "./logic";

// components
import { IsbnInput } from "./IsbnInput";
import { AddBookRow } from "./table/AddBookRow";
import { BookRow } from "./table/BookRow";
import { ColumnsHeaders } from "./table/ColumnsHeaders";


// Componente BarcodeScanner
function BarcodeScanner({
  isbn,
  setIsbn,
}) {

  // UseState
  const [books, setBooks] = useState([]); // Estado para guardar los libros
  const [newBook, setNewBook] = useState({ title: '', authors: '', value: '' }); // Estado para guardar el nuevo libro que se ingresa manualmente


  useEffect(() => {
    // Si el ISBN tiene 13 caracteres, se consulta la API y se resetea el ISBN input
    if (isbn.length === 13) {
        fetchBookInfo({ setBooks, isbn });
        setIsbn('');
    }
}, [isbn]);


  return (
    <div>
        <IsbnInput isbn={isbn} setIsbn={setIsbn} />

        <Table>
            <TableHead>
                <ColumnsHeaders />
            </TableHead>
            <TableBody>
                <AddBookRow newBook={newBook} setNewBook={setNewBook} setBooks={setBooks} />
                <BookRow books={books} setBooks={setBooks} />
            </TableBody>
        </Table>
        
    </div>
  );
}

export default BarcodeScanner;
