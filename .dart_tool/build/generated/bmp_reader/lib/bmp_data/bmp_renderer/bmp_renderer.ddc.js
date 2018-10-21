define(['dart_sdk', 'packages/bmp_reader/bmp_data/bmp_data'], function(dart_sdk, bmp_data) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bmp_data__bmp_data = bmp_data.bmp_data__bmp_data;
  const _root = Object.create(null);
  const bmp_data__bmp_renderer__bmp_renderer = Object.create(_root);
  const $getContext = dartx.getContext;
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let MapOfString$intToNull = () => (MapOfString$intToNull = dart.constFn(dart.fnType(core.Null, [MapOfString$int()])))();
  let ListOfMapOfString$int = () => (ListOfMapOfString$int = dart.constFn(core.List$(MapOfString$int())))();
  let ListOfMapOfString$intToNull = () => (ListOfMapOfString$intToNull = dart.constFn(dart.fnType(core.Null, [ListOfMapOfString$int()])))();
  let ListOfListOfMapOfString$int = () => (ListOfListOfMapOfString$int = dart.constFn(core.List$(ListOfMapOfString$int())))();
  bmp_data__bmp_renderer__bmp_renderer.BmpRenderer = class BmpRenderer extends core.Object {
    get bmp() {
      return this[bmp$];
    }
    set bmp(value) {
      super.bmp = value;
    }
    get canvas() {
      return this[canvas$];
    }
    set canvas(value) {
      super.canvas = value;
    }
    get context() {
      return this[context];
    }
    set context(value) {
      this[context] = value;
    }
    get rawImageData() {
      return this[rawImageData];
    }
    set rawImageData(value) {
      this[rawImageData] = value;
    }
    get rowPixels() {
      return this[rowPixels];
    }
    set rowPixels(value) {
      this[rowPixels] = value;
    }
    initCanvas() {
      let _ctx = html.CanvasRenderingContext._check(this.canvas[$getContext]("2d"));
      if (_ctx != null && html.CanvasRenderingContext2D.is(_ctx)) {
        this.context = _ctx;
        this.context.canvas.width = this.bmp.headerData.imageWidth;
        this.context.canvas.height = this.bmp.headerData.imageHeight;
        core.print("success");
      } else {
        dart.throw(new core.UnsupportedError.new("No context"));
      }
    }
    drawImage() {
      return async.async(dart.dynamic, (function* drawImage() {
        let x = 0;
        let height = dart.notNull(this.bmp.headerData.imageHeight) - 1;
        let y = height;
        this.rowPixels[$forEach](dart.fn(row => {
          row[$forEach](dart.fn(rgb => {
            this.context.beginPath();
            this.context.fillStyle = "rgba(" + dart.str(rgb[$_get]("r")) + ", " + dart.str(rgb[$_get]("g")) + ", " + dart.str(rgb[$_get]("b")) + ", 1)";
            this.context.fillRect(x, y, 1, 1);
            if (x === dart.notNull(this.bmp.headerData.imageWidth) - 1) {
              x = 0;
              y--;
            } else
              x++;
          }, MapOfString$intToNull()));
        }, ListOfMapOfString$intToNull()));
      }).bind(this));
    }
  };
  (bmp_data__bmp_renderer__bmp_renderer.BmpRenderer.new = function(bmp, canvas) {
    this[context] = null;
    this[rawImageData] = null;
    this[rowPixels] = null;
    this[bmp$] = bmp;
    this[canvas$] = canvas;
    this.initCanvas();
    this.rowPixels = this.bmp.makeImageData();
  }).prototype = bmp_data__bmp_renderer__bmp_renderer.BmpRenderer.prototype;
  dart.addTypeTests(bmp_data__bmp_renderer__bmp_renderer.BmpRenderer);
  const bmp$ = Symbol("BmpRenderer.bmp");
  const canvas$ = Symbol("BmpRenderer.canvas");
  const context = Symbol("BmpRenderer.context");
  const rawImageData = Symbol("BmpRenderer.rawImageData");
  const rowPixels = Symbol("BmpRenderer.rowPixels");
  dart.setMethodSignature(bmp_data__bmp_renderer__bmp_renderer.BmpRenderer, () => ({
    __proto__: dart.getMethods(bmp_data__bmp_renderer__bmp_renderer.BmpRenderer.__proto__),
    initCanvas: dart.fnType(dart.void, []),
    drawImage: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(bmp_data__bmp_renderer__bmp_renderer.BmpRenderer, () => ({
    __proto__: dart.getFields(bmp_data__bmp_renderer__bmp_renderer.BmpRenderer.__proto__),
    bmp: dart.finalFieldType(bmp_data__bmp_data.BmpData),
    canvas: dart.finalFieldType(html.CanvasElement),
    context: dart.fieldType(html.CanvasRenderingContext2D),
    rawImageData: dart.fieldType(typed_data.Uint8List),
    rowPixels: dart.fieldType(ListOfListOfMapOfString$int())
  }));
  dart.trackLibraries("packages/bmp_reader/bmp_data/bmp_renderer/bmp_renderer.ddc", {
    "package:bmp_reader/bmp_data/bmp_renderer/bmp_renderer.dart": bmp_data__bmp_renderer__bmp_renderer
  }, '{"version":3,"sourceRoot":"","sources":["bmp_renderer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAKgB;;;;;;IACM;;;;;;IACK;;;;;;IACf;;;;;;IACmB;;;;;;;AAS3B,UAAuB,0CAAO,WAAM,aAAW,CAAC;AAChD,UAAI,IAAI,IAAI,yCAAQ,IAAI,GAA8B;AACpD,oBAAO,GAAG,IAAI;AACd,oBAAO,OAAO,MAAM,GAAG,QAAG,WAAW,WAAW;AAChD,oBAAO,OAAO,OAAO,GAAG,QAAG,WAAW,YAAY;AAClD,kBAAK,CAAC;aACD;AACL,uBAAM,yBAAgB,CAAC;;IAE3B;;AAEiB;AACf,YAAI,IAAI;AACR,YAAI,SAAoC,aAA3B,QAAG,WAAW,YAAY,IAAG;AAC1C,YAAI,IAAI,MAAM;AACd,sBAAS,UAAQ,CAAC,QAAC,GAAG;AACpB,aAAG,UAAQ,CAAC,QAAC,GAAG;AACd,wBAAO,UAAU;AACjB,wBAAO,UAAU,GACjB,mBAAQ,GAAG,QAAC,wBAAS,GAAG,QAAC,wBAAS,GAAG,QAAC;AACtC,wBAAO,SAAS,CAAC,CAAC,EAAE,CAAC,EAAE,GAAG;AAC1B,gBAAI,CAAC,KAA8B,aAA1B,QAAG,WAAW,WAAW,IAAG,GAAG;AACtC,eAAC,GAAG;AACJ,eAAC;;AAED,eAAC;;;MAGT;;;mEAnCY,GAAQ,EAAE,MAAW;IAJR,aAAO;IACtB,kBAAY;IACO,eAAS;IAErB,UAAG,GAAH,GAAG;IAAO,aAAM,GAAN,MAAM;AAC/B,mBAAU;AACV,kBAAS,GAAG,QAAG,cAAc;EAC/B","file":"bmp_renderer.ddc.js"}');
  // Exports:
  return {
    bmp_data__bmp_renderer__bmp_renderer: bmp_data__bmp_renderer__bmp_renderer
  };
});

//# sourceMappingURL=bmp_renderer.ddc.js.map
