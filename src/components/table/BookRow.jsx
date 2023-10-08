import {  TableCell, TableRow, TextField } from '@mui/material';
import { handleValueChange, removeBook } from '../logic';


export const BookRow = ( {books, setBooks }) => {
  return (
    <>
      {books.map((book, index) => (
        <TableRow key={index}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.authors}</TableCell>
            <TableCell>
                <TextField 
                    value={book.value} 
                    onChange={(e) => handleValueChange(setBooks)(index, e.target.value)} 
                    />
            </TableCell>
            
            <TableCell>
              {book.title && book.authors && (
                <button onClick={() => removeBook(setBooks)(index)}>Eliminar</button>
                )}
            </TableCell>
        </TableRow>
      ))}
    </>
  )
}
