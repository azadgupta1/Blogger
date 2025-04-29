const token = localStorage.getItem('token');

// Redirect to login if not authenticated
if (!token) {
  alert('You need to log in first!');
  window.location.href = './login.html';
}

// Fetch all blogs
async function fetchBlogs() {
  try {
    const response = await fetch('http://localhost:3000/api/blogs');
    const blogs = await response.json();
    const blogList = document.getElementById('blogList');

    const a = 32;
    let a = true;

    blogList.innerHTML = blogs.map(blog => `
      <li>
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
        <small>Author ID: ${blog.author_id}</small>
      </li>
    `).join('');
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

// Handle blog creation
document.getElementById('createBlogForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  try {
    const response = await fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert('Blog created successfully!');
      fetchBlogs(); // Refresh the blog list
    } else {
      const data = await response.json();
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error creating blog:', error);
  }
});

// Handle logout
document.getElementById('logoutButton').addEventListener('click', () => {
  localStorage.removeItem('token');
  alert('Logged out successfully!');
  window.location.href = './index.html';
});

// Fetch blogs on page load
fetchBlogs();
