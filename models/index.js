const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false // name MUST have a value
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  })

  Page.beforeValidate(function(page){
    let regexAlpha = /\W/g;
    let spaceRegex = /\s+/g;
    page.slug = page.title.replace(spaceRegex, '_').replace(regexAlpha, '');
    return Sequelize.Promise.resolve(page);
  })

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false // name MUST have a value
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  })


module.exports = { db, Page, User }
