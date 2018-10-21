import 'dart:typed_data';

class BmpHeaderData {
  String fileName;
  bool isBmp;
  int fileSize;
  int extraData;
  int startingOffset;

  int headerSize;
  int imageWidth;
  int imageHeight;
  int colorPlanes;
  int compression;
  int imageSize;
  int numOfColors;
  int numOfImportantColors;
  int bitsPerPixel;

  BmpHeaderData(ByteData bData, String _fileName) {
    if (bData.getUint8(0) == 66 && bData.getUint8(1) == 77) {
      isBmp = true;
    } else {
      isBmp = false;
      return;
    }
    fileName = _fileName;
    fileSize = bData.getUint32(2, Endian.little);
    extraData = bData.getUint32(6, Endian.little);
    startingOffset = bData.getUint32(10, Endian.little);
    headerSize = bData.getUint32(14, Endian.little);
    imageWidth = bData.getUint32(18, Endian.little);
    imageHeight = bData.getUint32(22, Endian.little);
    colorPlanes = bData.getUint16(26, Endian.little);
    bitsPerPixel = bData.getUint16(28, Endian.little);
    compression = bData.getUint32(30, Endian.little);
    imageSize = bData.getUint32(34, Endian.little);
    numOfColors = bData.getUint32(46, Endian.little);
    numOfImportantColors = bData.getUint32(50, Endian.little);
  }

  String writeData() {
    StringBuffer stringBuffer = new StringBuffer();
    if (isBmp)
      stringBuffer.write('$fileName is a bmp file\n');
    else {
      stringBuffer.write('$fileName is not a bmp file');
      return stringBuffer.toString();
    }
    stringBuffer.write('File size: ${fileSize} bytes \n');
    stringBuffer.write('Extra data: ${extraData} \n');
    stringBuffer.write('Bitmap starting offset: ${startingOffset} \n');

    stringBuffer.write('\n\n---INFO HEADER----\n\n');

    stringBuffer.write('Info header size: ${headerSize} bytes \n');
    stringBuffer.write('Image width: ${imageWidth} px \n');
    stringBuffer.write('Image height: ${imageHeight} px \n');
    stringBuffer.write('Color planes: ${colorPlanes} \n');
    stringBuffer.write('Compression: ${compression} \n');
    stringBuffer.write('Number of colors used: ${numOfColors} \n');
    stringBuffer.write('Number of important colors: ${numOfImportantColors} \n');
    stringBuffer.write('BPI: ${bitsPerPixel}\n');
    stringBuffer.write('Raw bitmap size: ${imageSize} bytes \n');
    return stringBuffer.toString();
  }
}