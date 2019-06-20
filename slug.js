module.exports = function(title){
  let regexAlpha = /\W/g;
  let spaceRegex = /\s+/g;
  let newTitle = title.replace(spaceRegex, '_').replace(regexAlpha, '');
  return newTitle;
}
