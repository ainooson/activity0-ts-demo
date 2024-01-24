document.addEventListener('DOMContentLoaded', (event: Event) => {
  const element = document.querySelector('h1');
  alert('Hello, TypeScript World!');
  console.log('Hello, TypeScript World!');
  if (element !== null) {
    element.textContent = 'Goodbye, world!';
  }
});
