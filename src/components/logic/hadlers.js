// Función para manejar el cambio en el input del ISBN
// export const handleInputChange = (setIsbn) => (e) => {
//   // console.log('handleInputChange', e.target.value);
//   setIsbn(e.target.value);
// };

// Función para manejar el cambio en el input del nuevo libro que se ingresa manualmente
export const handleNewBookChange = (setNewBook) => (field, value) => {
  // console.log('handleNewBookChange', field, value);
  // seteo el objeto newBook con el valor del campo que se está modificando (title, authors, value)
  setNewBook(prev => ({ ...prev, [field]: value }));
};



// Función para manejar el cambio en el input del valor ( precio ) del algun libro de la lista
export const handleValueChange = (setBooks) => (index, newValue) => {
  setBooks(prevBooks => {
    const newBooks = [...prevBooks];
    newBooks[index].value = newValue;
    return newBooks;
  });
};