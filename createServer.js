import http from 'http';

const server = http.createServer((req, res) => {
    // console.log(req.headers, req.url, req.method);

    let url = req.url;
    if(url==="/message"){
        res.write('<html>')
        res.write('<head><title>Enter message </title> </head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" ></input>  <button type="submit"> submit </button></form> </body>')
        res.write('</html>')
       return  res.end()
    }else if(url==="/home"){
        res.write('<html>')
        res.write('<head><title>Enter message </title> </head>')
        res.write('<body><h3> welcome to home </h3> </body>')
        res.write('</html>')
       return  res.end()
    }else if(url==="/about"){
        res.write('<html>')
        res.write('<head><title>Enter message </title> </head>')
        res.write('<body><h3> welcome to about </h3> </body>')
        res.write('</html>')
       return  res.end()
    }else if(url==="/node"){
        res.write('<html>')
        res.write('<head><title>Enter message </title> </head>')
        res.write('<body><h3> welcome to node </h3> </body>')
        res.write('</html>')
       return  res.end()
    }


    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>First node page </title> </head>')
    res.write('<body><h2> Hello gd morning </h2> </body>')
    res.write('</html>')
    res.end()
});

server.listen(3000, ()=>{
    console.log('Prabhas')
});