
import 'package:flutter/material.dart';
import 'package:flutter/semantics.dart';
import 'package:test_project/route_generator.dart';
import 'package:test_project/page/home_page.dart';

void main() => runApp(XCApp());

 class XCApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NCHS XC',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      initialRoute: '/',
      onGenerateRoute: RouteGenerator.generateRoute,
    );
  }
}






