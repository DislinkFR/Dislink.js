<div align="center">
  <a href="https://dislink.fr"><img width="200" src="https://dislink.fr/img/logo.png"></a>
</div>

## Dislink.JS

The official librairy of [Dislink.fr](https://dislink.fr)<br>
This librairy use Axios for making all of his requests

## installation
for installing this librairy, you can use this command :
```bash
npm i dislink.js
```

## Get all links filtered by clicks

```js
const { links } = require("dislink.js"),

new links.fetch({ filter: "clicks" }).then(data => {
    data.forEach(element => {
        console.log(element)
    });
});
```
