import 'package:flutter/material.dart';


class LegacyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Legacy'),
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              'Legacy Page',
              style: TextStyle(fontSize: 50),
            ),
            RaisedButton(
              child: Text('Go to Home'),
              onPressed: () {
                // Pushing a named route
                Navigator.of(context).pushNamed('/');
              }
      
            ),
          ]
        ),
      ),
      );
  }
}