var recipes = {eggs: 3};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {chocolate: '1 cup'});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.butter = '1 cup';
  return recipes;
}

function deleteFromObjectByKey (object, key){
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.eggs;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.eggs;
  return recipes;
}