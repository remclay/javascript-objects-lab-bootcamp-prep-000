var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[eggs]: 3});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.key = value;
  return recipes;
}

function deleteFromObjectByKey (object, key){
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key;
  return recipes;
}
