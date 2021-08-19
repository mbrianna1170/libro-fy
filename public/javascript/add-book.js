async function newFormHandler(event) {
    event.preventDefault();
  
    const book_name = document.querySelector('input[name="book-name"]').value;
    const book_url = document.querySelector('input[name="book-url"]').value;
  
    const response = await fetch(`/api/books`, {
      method: 'POST',
      body: JSON.stringify({
        book_name,
        book_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-book-form').addEventListener('submit', newFormHandler);