const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
    
    if (title && post_content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log(response);

      const responseData = await response.json();
  
      // Redirect to new post
      window.location.href=`/post/${responseData.id}`;
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('user-id')) {
      const id = event.target.getAttribute('user-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  /*
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  */