var recipes = {eggs: 3};

function UpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {chocolate: '1 cup'});
}
