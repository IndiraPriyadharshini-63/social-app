import "./searchInput.css"

function SearchInput({searchTerm, setSearchTerm}) {
  return (
      <input
      type="text"
      placeholder="Search videos"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchInput
