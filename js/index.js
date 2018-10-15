// using this file is optional
// you can also load the code snippets in using your browser's console
```js ```
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

```js```
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});
