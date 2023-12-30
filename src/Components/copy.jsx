
function Homepage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  async function implementSearch(e) {
    e.preventDefault();

    if (query.trim() === "") {
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const searchResults = response.data.items || [];
      setBooks(searchResults);
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  }

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo-div">
          <img src={Logo} alt="Logo" />
          <img src={TextLogo} alt="Text Logo" />
        </div>
        <form className="search-form">
          <div>
            <img src={SearchIcon} alt="Search Icon" />
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            />
          </div>
          <button onClick={implementSearch}>Search</button>
        </form>
        <div className="icons-div">
          <img src={HeartLogo} alt="Heart Logo" />
          <img src={Notification} alt="Notification Icon" />
          <img src={PremiumIcon} alt="Premium Icon" />
          <div className="profile">
            <img src={profilePic} alt="Profile Picture" />
            <img src={DownArrow} alt="Down Arrow" className="down-arrow" />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="top-books">
          {/* Render your top books here */}
        </div>
        <div className="more-books">
          <h2>More Books</h2>
          {books.map((book) => (
    <div key={book.id} className="book-item">
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
        className="book-image"
      />
      <div className="book-details">
        <h3>{book.volumeInfo.title}</h3>
        {/* Add more details as needed */}
      </div>
    </div>
  ))}
          </div>
        </div>
      </div>
  );
}

export default Homepage;
