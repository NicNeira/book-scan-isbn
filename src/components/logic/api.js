// Función para consultar la API de Google Books
export const fetchBookInfo = async ({ setBooks, isbn }) => {

  // try catch para manejar errores
  try {
    const API_KEY = import.meta.env.VITE_API_KEY_GOOGLE_BOOKS; // API KEY de Google Books
    const query = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`; // Query (GET) para consultar la API
    const response = await fetch(query);
    const data = await response.json();
    console.log('data', data);
    if (data.items) {
      const bookData = data.items[0].volumeInfo;
      console.log('bookData', bookData);
      setBooks(prevBooks => [...prevBooks, { title: bookData.title, authors: bookData.authors, value: '' }]);
    } else {
      alert('ISBN no encontrado');
    }
  } catch (error) {
    alert('Hubo un error al consultar la API');
  }
};