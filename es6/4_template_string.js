const content = "Hello My Webpage"

// ES 5
const htmlContentES5 = '<html>' +
    '<head>' +
    '<title>Home</title>' +
    '</head>' +
    '<body>' +
    '<h1>'+ content + '</h1>' +
    '</body>' +
    '</html>';

// ES 6
const htmlContentES6 = `
    <html>
        <head>
            <title>Home</title>
        </head>
        <body>
            <h1>${content}</h1>
            ${5+3}
        </body>
    </html>
    `;


console.log(htmlContentES5);
console.log(htmlContentES6);