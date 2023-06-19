
async function commentFormHandler(event) {
  event.preventDefault();
  const postId = document.querySelector('input[name="postId"]').value;
  const commentBody = document.querySelector('textarea[name="comment-body"]').value;
  const id = window.location.toString().split('/'[window.location.toString().split('/').length - 1]);
  
  if(commentBody){ commentBody;
  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      postId: id,
      comment: comment,
    }),
    headers: { 'Content-Type': 'application/json',
  },
  });

  if (response.ok) {
    document.location.reload();
  }else {
    alert(response.statusText);
  }
};
};
document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);