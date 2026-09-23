"use strict";

const fs = require("node:fs");
const upstream = require("image-size-upstream");

function imageSize(input) {
  if (typeof input === "string") {
    return upstream.imageSize(fs.readFileSync(input));
  }
  return upstream.imageSize(input);
}

module.exports = imageSize;
module.exports.imageSize = imageSize;
module.exports.default = imageSize;
module.exports.disableTypes = upstream.disableTypes;
module.exports.types = upstream.types;
