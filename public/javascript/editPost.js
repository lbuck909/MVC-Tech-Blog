const postId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
//Submit the edited form
const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('input[name="postContent"]').value;

  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      postId: id,
      content,
      title,
    }),
    headers: { 'Content-Type': 'application/json'},
  });
  if(response.ok) {
    document.location.replace('/dashboard');
  } else{
    alert(response.statusText);
  }
}

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);

