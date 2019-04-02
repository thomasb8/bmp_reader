import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'package:bmp_reader/bmp_data/bmp_data.dart';
import 'package:bmp_reader/bmp_data/bmp_renderer/bmp_renderer.dart';

CanvasElement canvas = document.querySelector('#canvas');
PreElement imageDataDisplay = document.querySelector('#imageData');
BmpRenderer renderer;

Future main() async {
  FileUploadInputElement imageInput = document.getElementById('imageInput');
  imageInput.onChange.listen((Event e) async {
    if (imageInput.files != null && imageInput.files.isNotEmpty) {
      File file = imageInput.files[0];
      FileReader reader = FileReader();
      reader.readAsArrayBuffer(file);
      reader.onLoad.listen((_) {
        processImage(reader.result, imageInput.files[0].name);
        updateImageDataDisplay(renderer.bmp);
      });
    }
  });
}

void processImage(List<int> imageBytes, String fileName) {
  Uint8List bytes = Uint8List.fromList(imageBytes);
  ByteData bData = new ByteData.view(bytes.buffer);
  BmpData data = new BmpData(bData, '${fileName}');
  print(data.headerData.dataToString());
  renderer = new BmpRenderer(data, canvas);
  renderer.drawImage();
}

void updateImageDataDisplay(BmpData data) {
  imageDataDisplay.innerHtml = data.headerData.dataToString();
}