import 'dart:typed_data';
import './bmp_header_data/bmp_header_data.dart';


class BmpData {
  final ByteData data;
  final String fileName;
  BmpHeaderData headerData;
  List<List<Map<String, int>>> rowPixels = [];

  BmpData(this.data, this.fileName) :
  headerData = new BmpHeaderData(data, fileName);

  List<List<Map<String, int>>> createRowPixels() {
    Uint8List rawImageData = data.buffer.asUint8List(headerData.startingOffset);
    bool has = true;
    int passedRowBytes = 0;
    int rowBytes = headerData.imageSize ~/ headerData.imageHeight;
    List<List<int>> rows = [];
    do {
      rows.add(rawImageData.skip(passedRowBytes).take(rowBytes).toList());
      passedRowBytes = passedRowBytes + rowBytes;
      has = passedRowBytes + rowBytes < headerData.imageSize;
    } while(has);
    int padding = rowBytes - headerData.imageWidth * 3;
    rows.forEach((row) => row.removeRange(row.length - padding, row.length));
    rows.forEach((row) {
      int index = 0;
      bool has = true;
      rowPixels.add([]);
      do {
        List<int> rgb = row.skip(index).take(3).toList();
        rowPixels.last.add({'r': rgb[2], 'g': rgb[1], 'b': rgb[0]});
        index = index + 3;
        has = index + 3 <= row.length;
      } while(has);
    });
    return rowPixels;
  }
}