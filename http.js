const http = require('http');

http.createServer((req,res)=>{
    console.log(req);
    res.write('hola mundo');
    res.end();
})
.listen(8083);

console.log('escuchando puerto 8083');