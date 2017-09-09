var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray( array, element ) {
  return [ element, ...array ];
}

function destructivelyAddElementToBeginningOfArray( array, element ) {
  array.unshift( element );
  return array;
}

function addElementToEndOfArray( array, element ) {
  return [...array, element ];
}

function destructivelyAddElementToEndOfArray( array, element ) {
  array.push( element );
  return array;
}

function accessElementInArray( index, array ) {
  return array[ index ];
}

function destructivelyRemoveElementFromBeginningOfArray( array ) {
  var firstElement = array.shift();
  return array;
}

function removeElementFromBeginningOfArray( array ) {
  var firstElement = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray( array ) {
  var lastElement = array.pop();
  return array;
}

function removeElementFromEndOfArray( array ) {
  var lastElement = array.slice( 0, array.length - 1 );
  return array;
}
