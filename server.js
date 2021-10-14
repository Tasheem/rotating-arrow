import http from 'http';
import fs from 'fs';

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).on('listening', () => {
        console.log(`Application running at http://localhost:${httpserver.address().port}`);
    }).listen(1512);
});
