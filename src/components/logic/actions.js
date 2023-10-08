// Función para agregar un nuevo libro *Manualmente*
export const addNewBook = (setBooks, setNewBook) => (newBook) => {
  // Si el libro tiene título y autor, lo agrega al estado de libros
  if (newBook.title && newBook.authors) {
    setBooks(prevBooks => [...prevBooks, newBook]);
    setNewBook({ title: '', authors: '', value: '' });
  } else {
    alert("Por favor, rellene al menos el título y los autores");
  }
};

// Función para eliminar un libro de la lista
export const removeBook = (setBooks) => (index) => {
  try {
    // Filtra el libro que se quiere eliminar
    setBooks(prevBooks => prevBooks.filter((_, idx) => idx !== index));
  } catch (error) {
    console.log('Hubo un error al eliminar el libro', error);
  }
};