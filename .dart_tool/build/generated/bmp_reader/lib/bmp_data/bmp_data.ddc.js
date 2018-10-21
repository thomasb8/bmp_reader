define(['dart_sdk', 'packages/bmp_reader/bmp_data/header_parser/header_parser'], function(dart_sdk, header_parser) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bmp_data__header_parser__header_parser = header_parser.bmp_data__header_parser__header_parser;
  const _root = Object.create(null);
  const bmp_data__bmp_data = Object.create(_root);
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $truncate = dartx.truncate;
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $skip = dartx.skip;
  const $add = dartx.add;
  const $length = dartx.length;
  const $removeRange = dartx.removeRange;
  const $forEach = dartx.forEach;
  const $_get = dartx._get;
  const $last = dartx.last;
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let ListOfMapOfString$int = () => (ListOfMapOfString$int = dart.constFn(core.List$(MapOfString$int())))();
  let JSArrayOfListOfMapOfString$int = () => (JSArrayOfListOfMapOfString$int = dart.constFn(_interceptors.JSArray$(ListOfMapOfString$int())))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  let JSArrayOfMapOfString$int = () => (JSArrayOfMapOfString$int = dart.constFn(_interceptors.JSArray$(MapOfString$int())))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let ListOfListOfMapOfString$int = () => (ListOfListOfMapOfString$int = dart.constFn(core.List$(ListOfMapOfString$int())))();
  bmp_data__bmp_data.BmpData = class BmpData extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get fileName() {
      return this[fileName$];
    }
    set fileName(value) {
      super.fileName = value;
    }
    get headerData() {
      return this[headerData];
    }
    set headerData(value) {
      this[headerData] = value;
    }
    get rowPixels() {
      return this[rowPixels];
    }
    set rowPixels(value) {
      this[rowPixels] = value;
    }
    makeImageData() {
      let rawImageData = this.data[$buffer][$asUint8List](this.headerData.startingOffset);
      let has = true;
      let passedRowBytes = 0;
      let rowBytes = (dart.notNull(this.headerData.imageSize) / dart.notNull(this.headerData.imageHeight))[$truncate]();
      let rows = JSArrayOfListOfint().of([]);
      do {
        rows[$add](rawImageData[$skip](passedRowBytes)[$take](rowBytes)[$toList]());
        passedRowBytes = passedRowBytes + rowBytes;
        has = passedRowBytes + rowBytes < dart.notNull(this.headerData.imageSize);
      } while (has);
      let padding = rowBytes - dart.notNull(this.headerData.imageWidth) * 3;
      rows[$forEach](dart.fn(row => row[$removeRange](dart.notNull(row[$length]) - padding, row[$length]), ListOfintTovoid()));
      rows[$forEach](dart.fn(row => {
        let index = 0;
        let has = true;
        this.rowPixels[$add](JSArrayOfMapOfString$int().of([]));
        do {
          let rgb = row[$skip](index)[$take](3)[$toList]();
          this.rowPixels[$last][$add](new (IdentityMapOfString$int()).from(["r", rgb[$_get](2), "g", rgb[$_get](1), "b", rgb[$_get](0)]));
          index = index + 3;
          has = index + 3 <= dart.notNull(row[$length]);
        } while (has);
      }, ListOfintToNull()));
      return this.rowPixels;
    }
  };
  (bmp_data__bmp_data.BmpData.new = function(data, fileName) {
    this[rowPixels] = JSArrayOfListOfMapOfString$int().of([]);
    this[data$] = data;
    this[fileName$] = fileName;
    this[headerData] = new bmp_data__header_parser__header_parser.BmpHeaderData.new(data, fileName);
  }).prototype = bmp_data__bmp_data.BmpData.prototype;
  dart.addTypeTests(bmp_data__bmp_data.BmpData);
  const data$ = Symbol("BmpData.data");
  const fileName$ = Symbol("BmpData.fileName");
  const headerData = Symbol("BmpData.headerData");
  const rowPixels = Symbol("BmpData.rowPixels");
  dart.setMethodSignature(bmp_data__bmp_data.BmpData, () => ({
    __proto__: dart.getMethods(bmp_data__bmp_data.BmpData.__proto__),
    makeImageData: dart.fnType(core.List$(core.List$(core.Map$(core.String, core.int))), [])
  }));
  dart.setFieldSignature(bmp_data__bmp_data.BmpData, () => ({
    __proto__: dart.getFields(bmp_data__bmp_data.BmpData.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    fileName: dart.finalFieldType(core.String),
    headerData: dart.fieldType(bmp_data__header_parser__header_parser.BmpHeaderData),
    rowPixels: dart.fieldType(ListOfListOfMapOfString$int())
  }));
  dart.trackLibraries("packages/bmp_reader/bmp_data/bmp_data.ddc", {
    "package:bmp_reader/bmp_data/bmp_data.dart": bmp_data__bmp_data
  }, '{"version":3,"sourceRoot":"","sources":["bmp_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKiB;;;;;;IACF;;;;;;IACC;;;;;;IACe;;;;;;;AAM3B,UAAU,eAAe,SAAI,SAAO,cAAY,CAAC,eAAU,eAAe;AAC1E,UAAK,MAAM;AACX,UAAI,iBAAiB;AACrB,UAAI,WAAgC,CAjBxC,aAiBmB,eAAU,UAAU,iBAAI,eAAU,YAAY;AAC7D,UAAgB,OAAO;AACvB,SAAG;AACD,YAAI,MAAI,CAAC,YAAY,OAAK,CAAC,cAAc,QAAM,CAAC,QAAQ,UAAQ;AAChE,sBAAc,GAAG,AAAe,cAAD,GAAG,QAAQ;AAC1C,WAAG,GAAG,AAAe,AAAW,cAAZ,GAAG,QAAQ,gBAAG,eAAU,UAAU;eAChD,GAAG;AACX,UAAI,UAAU,AAAS,QAAD,GAAyB,aAAtB,eAAU,WAAW,IAAG;AACjD,UAAI,UAAQ,CAAC,QAAC,GAAG,IAAK,GAAG,cAAY,CAAY,aAAX,GAAG,SAAO,IAAG,OAAO,EAAE,GAAG,SAAO;AACtE,UAAI,UAAQ,CAAC,QAAC,GAAG;AACf,YAAI,QAAQ;AACZ,YAAK,MAAM;AACX,sBAAS,MAAI,CAAC;AACd,WAAG;AACD,cAAU,MAAM,GAAG,OAAK,CAAC,KAAK,QAAM,CAAC,WAAS;AAC9C,wBAAS,OAAK,MAAI,CAAC,sCAAC,KAAK,GAAG,QAAC,IAAI,KAAK,GAAG,QAAC,IAAI,KAAK,GAAG,QAAC;AACvD,eAAK,GAAG,AAAM,KAAD,GAAG;AAChB,aAAG,GAAG,AAAM,AAAI,KAAL,GAAG,kBAAK,GAAG,SAAO;iBACvB,GAAG;;AAEb,YAAO,eAAS;IAClB;;6CA5BQ,IAAS,EAAE,QAAa;IAFH,eAAS,GAAG;IAE5B,WAAI,GAAJ,IAAI;IAAO,eAAQ,GAAR,QAAQ;IAChC,gBAAU,GAAG,IAAI,wDAAa,CAAC,IAAI,EAAE,QAAQ;EAAC","file":"bmp_data.ddc.js"}');
  // Exports:
  return {
    bmp_data__bmp_data: bmp_data__bmp_data
  };
});

//# sourceMappingURL=bmp_data.ddc.js.map
