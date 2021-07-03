<div align="center">
  <a href="https://dislink.fr"><img width="200" src="https://dislink.fr/img/logo.png"></a>
</div>
<h1>Dislink.JS</h1>
The official librairy of Dislink.fr
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
