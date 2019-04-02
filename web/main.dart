import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'package:bmp_reader/bmp_data/bmp_data.dart';
import 'package:bmp_reader/bmp_data/bmp_renderer/bmp_renderer.dart';

Future main() async {
  FileUploadInputElement imageInput = document.getElementById('imageInput');
  imageInput.onChange.listen((Event e) async {
    if (imageInput.files != null && imageInput.files.isNotEmpty) {
      File file = imageInput.files[0];
      FileReader reader = FileReader();
      reader.readAsArrayBuffer(file);
      reader.onLoad.listen((_) {
        Uint8List bytes = Uint8List.fromList(reader.result);
        ByteData bData = new ByteData.view(bytes.buffer);
        BmpData data = new BmpData(bData, '${imageInput.value.split('/').last}');
        print(data.headerData.dataToString());
        CanvasElement canvas = document.querySelector('#canvas');
        BmpRenderer renderer = new BmpRenderer(data, canvas);
        renderer.drawImage();
      });
    }
  });
}