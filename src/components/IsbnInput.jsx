import { TextField } from "@mui/material"

export const IsbnInput = ({ isbn, setIsbn }) => {
  return (
    <TextField id="outlined-basic"  variant="outlined" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="Ingresa un ISBN"/>

  )
}
