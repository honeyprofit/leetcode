const [book, setBooks] = useState([]);
const editBookByID = ()=>{
  const updateBooks = books.map((book)=>{
    if(book.id === id) {
      return {...book, title:newTitle};
  }
    return book;
  );
  
  setBooks(updateBooks);
};
  
