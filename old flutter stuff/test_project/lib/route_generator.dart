import 'package:flutter/material.dart';
import 'package:test_project/main.dart';
import 'package:test_project/page/home_page.dart';
import 'package:test_project/page/legacy_page.dart';

//all routing logic or routing errors will be centered on this class.
//this makes programming, logic, and debugging easier 

class RouteGenerator{
  final homeroute = '/';
  final testroute = '/test';
  final legacyroute = '/legacy';
  final errorroute = '/error';

  static Route<dynamic> generateRoute(RouteSettings settings){
    //calls nav.pushNamed and also is able to pass arguments
    final args = settings.arguments;

    switch(settings.name){
      case '/test':
        return MaterialPageRoute(builder: (_) => HomePage());
      case'/':
        return MaterialPageRoute(builder: (_) => HomePage());
      case'/legacy':
          return MaterialPageRoute(builder: (_) => LegacyPage());
      default:
        // if the user tries to navigate to a route that does not exist 
        return _errorRoute(); 

    }

  }
  static Route<dynamic> _errorRoute(){
    return MaterialPageRoute(builder: (_){
      return Scaffold(
        appBar: AppBar(
          title: Text('Error'),
          ),
        body: Center(
          child: Text('ERROR'),
        ),
      );
    });
  }
}