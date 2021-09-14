# Before

- Docker container

# E1

Print a triangle in console with js
```js
function printTri(size){
    let c = "#";
    let h = "";
    for(i = 0; i < size; i++){
        h += c; 
        console.log(h);
    }
}
```
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>L2</title>
        <script src="e1.js"></script>
    </head>
    <body>
        <button onclick="printTri(50)">Button</button>
    </body>
</html>
```

# E2

