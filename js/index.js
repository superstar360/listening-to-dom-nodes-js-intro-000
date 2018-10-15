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

```js```
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});