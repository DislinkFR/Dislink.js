<div align="center">
  <a href="https://dislink.fr"><img width="200" src="https://dislink.fr/img/logo.png"></a>
</div>

## Dislink.JS

The official librairy of [Dislink.fr](https://dislink.fr)<br>
This librairy use Axios for making all of his requests

## installation

```bash
npm i dislink.js
```

## Get all links filtered by clicks

```js
const dislink = require("dislink.js"),
    app = new dislink()

app.links({ filter: "test" }).then(data => {
    data.forEach(element => {
        console.log(element.url)
    });
})
```
