// This updates edits to a post
async function editPostHandler(event) {
    event.preventDefault();
    console.log('init');
    const book_name = document.querySelector('input[name="book-name"]').value.trim();
    const book_author = document.querySelector('input[name="book-author"]').value.trim();
    const price = document.querySelector('input[name="price"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
    // This gets the id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    console.log(content)
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
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

// This deletes posts
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  // This deletes a post by it's id when it is selected
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// These listen to which button was clicked and initializes the corresponding function
document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

// Diana Salas //