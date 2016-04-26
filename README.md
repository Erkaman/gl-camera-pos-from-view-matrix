# rotate-vector-about-axis

A helper module that allows you to extract the camera position from a view-matrix.

## Usage

[![NPM](https://nodei.co/npm/gl-camera-pos-from-view-matrix.png)](https://www.npmjs.com/package/gl-camera-pos-from-view-matrix)

### `function getCameraPosFromViewMatrix(out, viewMatrix)`

The camera position of the camera with the view matrix `viewMatrix` is
output to `out` as a `gl-vec3`. Note that the same vector is also
returned by the function.
