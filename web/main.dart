import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'package:http/http.dart';
import 'package:http/browser_client.dart';
import 'package:bmp_reader/bmp_data/bmp_data.dart';
import 'package:bmp_reader/bmp_data/bmp_renderer/bmp_renderer.dart';

Future main() async{
  Client client = new BrowserClient();
  String path = 'images/pitt.bmp';
  Response res = await client.get(path);
  ByteData bData = new ByteData.view(res.bodyBytes.buffer);
  BmpData data = new BmpData(bData, '${path.split('/').last}');
  print(data.headerData.writeData());
  CanvasElement canvas = document.querySelector('#canvas');
  BmpRenderer renderer = new BmpRenderer(data, canvas);
  renderer.drawImage();
}