import 'dart:html';

import 'package:flutter/material.dart';
import 'package:test_project/route_generator.dart';
import 'package:test_project/main.dart';


class HomePage extends StatefulWidget {
 @override
 _HomeState createState() => _HomeState();
} 




class _HomeState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
        actions: <Widget>[
          IconButton(/// need to fix this stuff to make the app bar work well. 
            icon: const Icon(Icons.add_alert),
          ),
          IconButton(
            icon: const Icon(Icons.navigate_next),
            tooltip: 'Next page',
            onPressed: () {
              openPage(context);
            },
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              'Home Page',
              style: TextStyle(fontSize: 50),
            ),
            RaisedButton(
              child: Text('Go to Legacy'),
              onPressed: () {
                // Pushing a named route
                Navigator.of(context).pushNamed('/legacy');
              },
            )
          ],
        ),
      ),
    );
  }
}