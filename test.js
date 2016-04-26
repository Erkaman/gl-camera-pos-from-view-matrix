var cameraPosFromViewMatrix   = require('./');
var test    = require('tape');
var almostEqual    = require('almost-equal');
var vec3 = require('gl-vec3');
var mat4 = require('gl-mat4');

function testVec3Equal(t, expected, actual) {

  var eps = 0.00001;

  var testName = "Test " + "[" + actual + "]" + " = " + "[" + expected + "]";

  t.ok(almostEqual(actual[0], expected[0], eps ), testName + ", x");
  t.ok(almostEqual(actual[1], expected[1], eps ), testName + ", y");
  t.ok(almostEqual(actual[2], expected[2], eps ), testName + ", z");
}

test('cameraPosFromViewMatrix', function(t) {
  var scratchMat = mat4.create();
  var scratchVec= vec3.create();

  var actual = cameraPosFromViewMatrix( scratchVec, mat4.lookAt(scratchMat, [1,2,3], [4,5,6], [7,8,9] ) );
  var expected = vec3.fromValues(1,2,3);
  testVec3Equal(t, expected, actual);

  actual = cameraPosFromViewMatrix( scratchVec, mat4.lookAt(scratchMat, [1,0,0], [0,0,1], [0,1,0] ) );
  expected = vec3.fromValues(1,0,0);
  testVec3Equal(t, expected, actual);

  actual = cameraPosFromViewMatrix( scratchVec, mat4.lookAt(scratchMat, [413.3,34.2,53.3], [44.3,0.43,1.0], [53.2,43.3,4.34] ) );
  expected = vec3.fromValues(413.3,34.2,53.3);
  testVec3Equal(t, expected, actual);

  t.end();
})
