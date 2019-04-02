import 'dart:html';
import 'dart:typed_data';
import 'package:bmp_reader/bmp_data/bmp_data.dart';

class BmpRenderer {
  final BmpData bmp;
  final CanvasElement canvas;
  CanvasRenderingContext2D context;
  Uint8List rawImageData;
  List<List<Map<String, int>>> rowPixels;

  BmpRenderer(this.bmp, this.canvas) {
    initCanvas();
    rowPixels = bmp.createRowPixels();
  }


  void initCanvas() {
    CanvasRenderingContext _ctx = canvas.getContext('2d');
    if (_ctx != null && _ctx is CanvasRenderingContext2D) {
      context = _ctx;
      context.canvas.width = bmp.headerData.imageWidth;
      context.canvas.height = bmp.headerData.imageHeight;
    } else {
      throw UnsupportedError('No context');
    }
  }

  void drawImage() async {
    int x = 0;
    int height = bmp.headerData.imageHeight - 1;
    int y = height;
    rowPixels.forEach((row) {
      row.forEach((rgb) {
        context.beginPath();
        context.fillStyle =
        'rgba(${rgb['r']}, ${rgb['g']}, ${rgb['b']}, 1)';
        context.fillRect(x, y, 1, 1);
        if (x == bmp.headerData.imageWidth - 1) {
          x = 0;
          y--;
        } else
          x++;
      });
    });
  }
}
