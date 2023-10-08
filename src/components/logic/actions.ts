// Tipado de las props de la función addNewBook
interface setBooksProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setNewBook: (newBook: Book) => void;
}

interface RemoveBookProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}


interface AddNewBookArgs {
  newBook: Book;
}

type Book = {
  title: string;
  authors: string[];
  value: string;
}

// Función para agregar un nuevo libro *Manualmente*
export const addNewBook = ({ setBooks, setNewBook }: setBooksProps) => ({ newBook }: AddNewBookArgs) => {
  console.log('addNewBook', newBook);

  // Si el libro tiene título y autor, lo agrega al estado de libros
  if (newBook.title && newBook.authors) {
    setBooks(prevBooks => [...prevBooks, newBook]);
    setNewBook({ title: '', authors: [''], value: '' });
  } else {
    alert("Por favor, rellene al menos el título y los autores");
  }
};

// Función para eliminar un libro de la lista
export const removeBook = ({ setBooks }: RemoveBookProps) => (index: number) => {
  try {
    // Filtra el libro que se quiere eliminar
    setBooks((prevBooks: Book[]) => prevBooks.filter((_, idx: number) => idx !== index));
  } catch (error) {
    console.log('Hubo un error al eliminar el libro', error);
  }
};