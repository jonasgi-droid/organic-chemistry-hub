function toggleQuestion(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

function toggleSolution(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Login Redirect
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('login.html')) {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email) {
        sessionStorage.setItem('email', email);
        window.location.href = 'index.html';
      }
    });
  }
});
