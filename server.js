var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    s:'article one',
    a:'abcdefghijk',
    b:'sssssssssssssssssssssssssss',
    c:'dgdfhgdfhgfhgfh'
};

var articleTwo={
    s:'article 2',
    a:'abcdefghijk',
    b:'sssssssssssssssssssssssssss',
    c:'dgdfhgdfhgfhgfh'
};

var articleThree={
    s:'article 3',
    a:'abcdefghijk',
    b:'sssssssssssssssssssssssssss',
    c:'dgdfhgdfhgfhgfh'
};
function create(data)
{
    var s=data.s;
    var a=data.a;
    var b=data.b;
    var c=data.c;
    var html=`<html>
<h4>Page</h4>
${s}
<hr>
${a}
<br>

${b}
<br>
${c}
</html>
`;
return html;
}


var articles=[
    ];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(create(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
