define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const bmp_data__header_parser__header_parser = Object.create(_root);
  const $getUint8 = dartx.getUint8;
  const $getUint32 = dartx.getUint32;
  const $getUint16 = dartx.getUint16;
  bmp_data__header_parser__header_parser.BmpHeaderData = class BmpHeaderData extends core.Object {
    get fileName() {
      return this[fileName];
    }
    set fileName(value) {
      this[fileName] = value;
    }
    get isBmp() {
      return this[isBmp];
    }
    set isBmp(value) {
      this[isBmp] = value;
    }
    get fileSize() {
      return this[fileSize];
    }
    set fileSize(value) {
      this[fileSize] = value;
    }
    get extraData() {
      return this[extraData];
    }
    set extraData(value) {
      this[extraData] = value;
    }
    get startingOffset() {
      return this[startingOffset];
    }
    set startingOffset(value) {
      this[startingOffset] = value;
    }
    get headerSize() {
      return this[headerSize];
    }
    set headerSize(value) {
      this[headerSize] = value;
    }
    get imageWidth() {
      return this[imageWidth];
    }
    set imageWidth(value) {
      this[imageWidth] = value;
    }
    get imageHeight() {
      return this[imageHeight];
    }
    set imageHeight(value) {
      this[imageHeight] = value;
    }
    get colorPlanes() {
      return this[colorPlanes];
    }
    set colorPlanes(value) {
      this[colorPlanes] = value;
    }
    get compression() {
      return this[compression];
    }
    set compression(value) {
      this[compression] = value;
    }
    get imageSize() {
      return this[imageSize];
    }
    set imageSize(value) {
      this[imageSize] = value;
    }
    get numOfColors() {
      return this[numOfColors];
    }
    set numOfColors(value) {
      this[numOfColors] = value;
    }
    get numOfImportantColors() {
      return this[numOfImportantColors];
    }
    set numOfImportantColors(value) {
      this[numOfImportantColors] = value;
    }
    get bitsPerPixel() {
      return this[bitsPerPixel];
    }
    set bitsPerPixel(value) {
      this[bitsPerPixel] = value;
    }
    writeData() {
      let stringBuffer = new core.StringBuffer.new();
      if (dart.test(this.isBmp))
        stringBuffer.write(dart.str(this.fileName) + " is a bmp file\n");
      else {
        stringBuffer.write(dart.str(this.fileName) + " is not a bmp file");
        return stringBuffer.toString();
      }
      stringBuffer.write("File size: " + dart.str(this.fileSize) + " bytes \n");
      stringBuffer.write("Extra data: " + dart.str(this.extraData) + " \n");
      stringBuffer.write("Bitmap starting offset: " + dart.str(this.startingOffset) + " \n");
      stringBuffer.write("\n\n---INFO HEADER----\n\n");
      stringBuffer.write("Info header size: " + dart.str(this.headerSize) + " bytes \n");
      stringBuffer.write("Image width: " + dart.str(this.imageWidth) + " px \n");
      stringBuffer.write("Image height: " + dart.str(this.imageHeight) + " px \n");
      stringBuffer.write("Color planes: " + dart.str(this.colorPlanes) + " \n");
      stringBuffer.write("Compression: " + dart.str(this.compression) + " \n");
      stringBuffer.write("Number of colors used: " + dart.str(this.numOfColors) + " \n");
      stringBuffer.write("Number of important colors: " + dart.str(this.numOfImportantColors) + " \n");
      stringBuffer.write("BPI: " + dart.str(this.bitsPerPixel) + "\n");
      stringBuffer.write("Raw bitmap size: " + dart.str(this.imageSize) + " bytes \n");
      return stringBuffer.toString();
    }
  };
  (bmp_data__header_parser__header_parser.BmpHeaderData.new = function(bData, _fileName) {
    this[fileName] = null;
    this[isBmp] = null;
    this[fileSize] = null;
    this[extraData] = null;
    this[startingOffset] = null;
    this[headerSize] = null;
    this[imageWidth] = null;
    this[imageHeight] = null;
    this[colorPlanes] = null;
    this[compression] = null;
    this[imageSize] = null;
    this[numOfColors] = null;
    this[numOfImportantColors] = null;
    this[bitsPerPixel] = null;
    if (bData[$getUint8](0) === 66 && bData[$getUint8](1) === 77) {
      this.isBmp = true;
    } else {
      this.isBmp = false;
      return;
    }
    this.fileName = _fileName;
    this.fileSize = bData[$getUint32](2, typed_data.Endian.little);
    this.extraData = bData[$getUint32](6, typed_data.Endian.little);
    this.startingOffset = bData[$getUint32](10, typed_data.Endian.little);
    this.headerSize = bData[$getUint32](14, typed_data.Endian.little);
    this.imageWidth = bData[$getUint32](18, typed_data.Endian.little);
    this.imageHeight = bData[$getUint32](22, typed_data.Endian.little);
    this.colorPlanes = bData[$getUint16](26, typed_data.Endian.little);
    this.bitsPerPixel = bData[$getUint16](28, typed_data.Endian.little);
    this.compression = bData[$getUint32](30, typed_data.Endian.little);
    this.imageSize = bData[$getUint32](34, typed_data.Endian.little);
    this.numOfColors = bData[$getUint32](46, typed_data.Endian.little);
    this.numOfImportantColors = bData[$getUint32](50, typed_data.Endian.little);
  }).prototype = bmp_data__header_parser__header_parser.BmpHeaderData.prototype;
  dart.addTypeTests(bmp_data__header_parser__header_parser.BmpHeaderData);
  const fileName = Symbol("BmpHeaderData.fileName");
  const isBmp = Symbol("BmpHeaderData.isBmp");
  const fileSize = Symbol("BmpHeaderData.fileSize");
  const extraData = Symbol("BmpHeaderData.extraData");
  const startingOffset = Symbol("BmpHeaderData.startingOffset");
  const headerSize = Symbol("BmpHeaderData.headerSize");
  const imageWidth = Symbol("BmpHeaderData.imageWidth");
  const imageHeight = Symbol("BmpHeaderData.imageHeight");
  const colorPlanes = Symbol("BmpHeaderData.colorPlanes");
  const compression = Symbol("BmpHeaderData.compression");
  const imageSize = Symbol("BmpHeaderData.imageSize");
  const numOfColors = Symbol("BmpHeaderData.numOfColors");
  const numOfImportantColors = Symbol("BmpHeaderData.numOfImportantColors");
  const bitsPerPixel = Symbol("BmpHeaderData.bitsPerPixel");
  dart.setMethodSignature(bmp_data__header_parser__header_parser.BmpHeaderData, () => ({
    __proto__: dart.getMethods(bmp_data__header_parser__header_parser.BmpHeaderData.__proto__),
    writeData: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(bmp_data__header_parser__header_parser.BmpHeaderData, () => ({
    __proto__: dart.getFields(bmp_data__header_parser__header_parser.BmpHeaderData.__proto__),
    fileName: dart.fieldType(core.String),
    isBmp: dart.fieldType(core.bool),
    fileSize: dart.fieldType(core.int),
    extraData: dart.fieldType(core.int),
    startingOffset: dart.fieldType(core.int),
    headerSize: dart.fieldType(core.int),
    imageWidth: dart.fieldType(core.int),
    imageHeight: dart.fieldType(core.int),
    colorPlanes: dart.fieldType(core.int),
    compression: dart.fieldType(core.int),
    imageSize: dart.fieldType(core.int),
    numOfColors: dart.fieldType(core.int),
    numOfImportantColors: dart.fieldType(core.int),
    bitsPerPixel: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/bmp_reader/bmp_data/header_parser/header_parser.ddc", {
    "package:bmp_reader/bmp_data/header_parser/header_parser.dart": bmp_data__header_parser__header_parser
  }, '{"version":3,"sourceRoot":"","sources":["header_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;IAGS;;;;;;IACF;;;;;;IACD;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAyBF,UAAa,eAAe,IAAI,qBAAY;AAC5C,oBAAI,UAAK;AACP,oBAAY,MAAM,CAAC,SAAE,aAAQ;WAC1B;AACH,oBAAY,MAAM,CAAC,SAAE,aAAQ;AAC7B,cAAO,aAAY,SAAS;;AAE9B,kBAAY,MAAM,CAAC,yBAAc,aAAQ;AACzC,kBAAY,MAAM,CAAC,0BAAe,cAAS;AAC3C,kBAAY,MAAM,CAAC,sCAA2B,mBAAc;AAE5D,kBAAY,MAAM,CAAC;AAEnB,kBAAY,MAAM,CAAC,gCAAqB,eAAU;AAClD,kBAAY,MAAM,CAAC,2BAAgB,eAAU;AAC7C,kBAAY,MAAM,CAAC,4BAAiB,gBAAW;AAC/C,kBAAY,MAAM,CAAC,4BAAiB,gBAAW;AAC/C,kBAAY,MAAM,CAAC,2BAAgB,gBAAW;AAC9C,kBAAY,MAAM,CAAC,qCAA0B,gBAAW;AACxD,kBAAY,MAAM,CAAC,0CAA+B,yBAAoB;AACtE,kBAAY,MAAM,CAAC,mBAAQ,iBAAY;AACvC,kBAAY,MAAM,CAAC,+BAAoB,cAAS;AAChD,YAAO,aAAY,SAAS;IAC9B;;uEA9Cc,KAAc,EAAE,SAAgB;IAhBvC,cAAQ;IACV,WAAK;IACN,cAAQ;IACR,eAAS;IACT,oBAAc;IAEd,gBAAU;IACV,gBAAU;IACV,iBAAW;IACX,iBAAW;IACX,iBAAW;IACX,eAAS;IACT,iBAAW;IACX,0BAAoB;IACpB,kBAAY;AAGd,QAAI,KAAK,WAAS,CAAC,OAAM,MAAM,KAAK,WAAS,CAAC,OAAM,IAAI;AACtD,gBAAK,GAAG;WACH;AACL,gBAAK,GAAG;AACR;;AAEF,iBAAQ,GAAG,SAAS;AACpB,iBAAQ,GAAG,KAAK,YAAU,CAAC,GAAG,iBAAM,OAAO;AAC3C,kBAAS,GAAG,KAAK,YAAU,CAAC,GAAG,iBAAM,OAAO;AAC5C,uBAAc,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAClD,mBAAU,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC9C,mBAAU,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC9C,oBAAW,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC/C,oBAAW,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC/C,qBAAY,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAChD,oBAAW,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC/C,kBAAS,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC7C,oBAAW,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;AAC/C,6BAAoB,GAAG,KAAK,YAAU,CAAC,IAAI,iBAAM,OAAO;EAC1D","file":"header_parser.ddc.js"}');
  // Exports:
  return {
    bmp_data__header_parser__header_parser: bmp_data__header_parser__header_parser
  };
});

//# sourceMappingURL=header_parser.ddc.js.map
