var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object)
  clone[key] = value;
  return clone;
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
  return object
=======
function destructiveUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value;
>>>>>>> 77341f562be74701809573719c18c87b1643c855
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object)
  return delete clone[key]
}

function destructivelyDeleteFromObjectByKey(object, key) { 
<<<<<<< HEAD
  delete object[key];
  return object
=======
  return delete object[key];
>>>>>>> 77341f562be74701809573719c18c87b1643c855
}