var recipes = {eggs: 3};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {chocolate: '1 cup'});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.butter = '1 cup';
  return recipes;
}
