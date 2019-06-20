const html = require('html-template-tag');
const layout = require('./layout');

module.exports = (page, author) => layout(html`
  <h3 style="padding-top: 50px">${page.title}
      <small> (<a href="/wiki/${page.slug}/similar">${page.title}</a>)</small>
  </h3>
  <h4>by <a href="author Url">PLACEHOLDER AUTHOR NAME</a></h4>
  <hr/>
  <div class="page-body">${page.content}</div>
  <hr/>
  <a href="/wiki/${page.slug}/edit" class="btn btn-primary">edit this page</a>
  <a href="/wiki/${page.slug}/delete" class="btn btn-danger">delete this page</a>
`);
