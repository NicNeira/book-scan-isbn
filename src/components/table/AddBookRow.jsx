import {  TableCell, TableRow, TextField } from '@mui/material';
import { addNewBook, handleNewBookChange } from '../logic';

export const AddBookRow = (newBook, setNewBook, setBooks) => {
  return (
    <TableRow>
      <TableCell>
          <TextField 
              value={newBook.title}
              onChange={(e) => handleNewBookChange(setNewBook)('title', e.target.value)}
              placeholder="Título"
          />
      </TableCell>
      <TableCell>
          <TextField 
              value={newBook.authors}
              onChange={(e) => handleNewBookChange(setNewBook)('authors', e.target.value)}
              placeholder="Autores"
          />
      </TableCell>
      <TableCell>
          <TextField 
              value={newBook.value}
              onChange={(e) => handleNewBookChange(setNewBook)('value', e.target.value)}
              placeholder="Valor"
          />
      </TableCell>
      <TableCell>
        <button onClick={() => addNewBook( setBooks, setNewBook )( newBook  )}>Agregar libro</button>
      </TableCell>
    </TableRow>
  )
}
