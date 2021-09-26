async function bookPostHandler(event) {
    event.preventDefault();
    const book_name = document.querySelector('input[name="book-name"]').value.trim();
    const book_author = document.querySelector('input[name="book-author"]').value.trim();
    const price = document.querySelector('input[name="price"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value;
console.log("success");
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        book_name,
        book_author,
        price,
        content
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

document.querySelector('.book-post-form').addEventListener('submit', bookPostHandler);