// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("create-post");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

async function bookPostHandler(event) {
    event.preventDefault();
    const book_name = document.querySelector('input[name="book-name"]').value.trim();
    const book_author = document.querySelector('input[name="book-author"]').value.trim();
    const price = document.querySelector('input[name="price"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();

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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}

async function getUserPosts() {
  let response = await fetch('/api/post', (data) => {
    method: 'GET';
    where: {
      id: req.session.user_id 
    }
  });
  const posts = await response.json();
  console.log(posts);
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.book-post-form').addEventListener('submit', bookPostHandler);