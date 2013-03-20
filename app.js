var i18n = require('i18n-abide');
var express = require('express');
var app = express();

app.use(i18n.abide({
  supported_languages: ['en-US'],
  default_lang: 'en-US',
  translation_directory: 'static/i18n'
}));
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.render('homepage.ejs', {
      title: req.gettext('Hello, World!')
    });
});

app.listen(3030);
