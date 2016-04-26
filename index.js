var mat4 = require('gl-mat4')
var vec3 = require('gl-vec3')

module.exports = getCameraPosFromViewMatrix;

function getCameraPosFromViewMatrix(out, viewMatrix) {

    /*
    Make copy, because we will be modifying `viewMatrix`
     */
    var copy = mat4.create();
    mat4.copy(copy, viewMatrix);

    /*
    We can simply invert the view-matrix to get the camera position, as is explained here
     http://gamedev.stackexchange.com/a/22285/76692
     */
    mat4.invert(copy, copy);
    out[0] = copy[12];
    out[1] = copy[13];
    out[2] = copy[14];

    return out;
}
