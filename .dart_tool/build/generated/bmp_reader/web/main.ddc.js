define(['dart_sdk', 'packages/http/src/base_client', 'packages/bmp_reader/bmp_data/bmp_data', 'packages/bmp_reader/bmp_data/bmp_renderer/bmp_renderer'], function(dart_sdk, base_client, bmp_data, bmp_renderer) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__browser_client = base_client.src__browser_client;
  const bmp_data__bmp_data = bmp_data.bmp_data__bmp_data;
  const bmp_data__bmp_renderer__bmp_renderer = bmp_renderer.bmp_data__bmp_renderer__bmp_renderer;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $buffer = dartx.buffer;
  const $last = dartx.last;
  const $split = dartx.split;
  main.main = function() {
    return async.async(dart.dynamic, function* main() {
      let client = new src__browser_client.BrowserClient.new();
      let path = "images/pitt.bmp";
      let res = (yield client.get(path));
      let bData = typed_data.ByteData.view(res.bodyBytes[$buffer]);
      let data = new bmp_data__bmp_data.BmpData.new(bData, dart.str(path[$split]("/")[$last]));
      core.print(data.headerData.writeData());
      let canvas = html.CanvasElement._check(html.document.querySelector("#canvas"));
      let renderer = new bmp_data__bmp_renderer__bmp_renderer.BmpRenderer.new(data, canvas);
      renderer.drawImage();
    });
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAQc;AACZ,UAAO,SAAS,IAAI,qCAAa;AACjC,UAAO,OAAO;AACd,UAAS,OAAM,MAAM,MAAM,IAAI,CAAC,IAAI;AACpC,UAAS,QAAQ,AAAI,wBAAa,CAAC,GAAG,UAAU,SAAO;AACvD,UAAQ,OAAO,IAAI,8BAAO,CAAC,KAAK,EAAE,SAAG,IAAI,QAAM,CAAC,WAAS;AACzD,gBAAK,CAAC,IAAI,WAAW,UAAU;AAC/B,UAAc,mCAAS,aAAQ,cAAc,CAAC;AAC9C,UAAY,WAAW,IAAI,oDAAW,CAAC,IAAI,EAAE,MAAM;AACnD,cAAQ,UAAU;IACpB","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
