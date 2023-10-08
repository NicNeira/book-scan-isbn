import { TextField } from "@mui/material"

interface IsbnInputProps {
  isbn: string;
  setIsbn: (isbn: string) => void;
}

export const IsbnInput = ({ isbn, setIsbn }: IsbnInputProps) => {
  return (
    <TextField id="outlined-basic" variant="outlined" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="Ingresa un ISBN" />

  )
}
