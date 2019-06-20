const express = require('express');
const morgan = require('morgan');
const app = express();
const html = require('html-template-tag');
const { addPage, editPage, main, userList, userPages, wikiPage, layout } = require('./views/index')
const { db, Page, User } = require('./models/index');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
   res.send(layout('hello world'));
})

const PORT = 1337;

const init = async () => {
   await db.sync({force: true});

   app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
   });
}

init();
