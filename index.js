var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;

    return object;
  }

  function deleteFromObjectByKey(object, key) {
   var clone = Object.assign({}, object);
     delete clone[key];
     return clone;
  }

function destructivelyDeleteFromObjectByKey(object, key) {

}
