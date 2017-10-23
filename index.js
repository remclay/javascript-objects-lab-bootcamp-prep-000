var recipes = {eggs: 3};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {chocolate: '1 cup'});
}
