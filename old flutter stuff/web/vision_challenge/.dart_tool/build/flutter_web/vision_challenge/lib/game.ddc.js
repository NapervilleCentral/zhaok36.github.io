define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_redux/flutter_redux', 'packages/redux/redux', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter_redux__flutter_redux, packages__redux__redux, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const flutter_redux = packages__flutter_redux__flutter_redux.flutter_redux;
  const store = packages__redux__redux.src__store;
  const colors$ = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const icons = packages__flutter__material.src__material__icons;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const game = Object.create(dart.library);
  const $where = dartx.where;
  const $reduce = dartx.reduce;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $truncate = dartx.truncate;
  const $modulo = dartx['%'];
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $add = dartx.add;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToFlexible = () => (intToFlexible = dart.constFn(dart.fnType(basic.Flexible, [core.int])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintToColumn = () => (ListOfintToColumn = dart.constFn(dart.fnType(basic.Column, [ListOfint()])))();
  let StoreConnectorOfAppState$AppState = () => (StoreConnectorOfAppState$AppState = dart.constFn(flutter_redux.StoreConnector$(game.AppState, game.AppState)))();
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(store.Store$(game.AppState)))();
  let StoreOfAppStateToAppState = () => (StoreOfAppStateToAppState = dart.constFn(dart.fnType(game.AppState, [StoreOfAppState()])))();
  let JSArrayOfMaterialColor = () => (JSArrayOfMaterialColor = dart.constFn(_interceptors.JSArray$(colors$.MaterialColor)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndAppStateToScaffold = () => (BuildContextAndAppStateToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, game.AppState])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.min, TAndTToT());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 37,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 33,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 37,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEnd",
        [_Location_column]: 45,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 45,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 37,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 41,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 41,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 41,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 41,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 41,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C51() {
      return C51 = dart.constList([], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 44,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "converter",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: game.Action.prototype,
        [_name$]: "Action.next",
        index: 0
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: game.Action.prototype,
        [_name$]: "Action.end",
        index: 1
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: game.Action.prototype,
        [_name$]: "Action.start",
        index: 2
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: game.Action.prototype,
        [_name$]: "Action.shake",
        index: 3
      });
    },
    get C92() {
      return C92 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], game.Action);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 7,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 5,
        [_Location_line]: 8,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/game.dart"
      });
    }
  });
  let C0;
  const _grade = dart.privateName(game, "_grade");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C5;
  let C2;
  let C1;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  const _createBoard = dart.privateName(game, "_createBoard");
  let C23;
  let C24;
  let C25;
  let C22;
  let C21;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C49;
  let C47;
  let C46;
  let C51;
  let C50;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C60;
  let C57;
  let C56;
  let C63;
  let C62;
  let C61;
  let C66;
  let C65;
  let C64;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C74;
  let C77;
  let C78;
  let C79;
  let C76;
  let C75;
  let C82;
  let C83;
  let C81;
  let C80;
  const store$ = dart.privateName(game, "Game.store");
  game.Game = class Game extends framework.StatelessWidget {
    get store() {
      return this[store$];
    }
    set store(value) {
      super.store = value;
    }
    [_grade](score) {
      return dart.toString(JSArrayOfint().of([10, 20, 30, 35, 40, 45, 99])[$where](dart.fn(i => dart.notNull(i) > dart.notNull(score), intTobool()))[$reduce](dart.gbind(C0 || CT.C0, core.int)));
    }
    [_createBoard](size, blocks, depth, color) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: blocks[$map](basic.Column, dart.fn(cols => new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: cols[$map](basic.Flexible, dart.fn(item => new basic.Flexible.new({child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                if (item === 1) this.store.dispatch(game.Action.next);
              }, VoidToNull()), child: new container.Container.new({width: size, height: size, color: dart.notNull(item) > 0 ? color._get(depth) : color, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), intToFlexible()))[$toList](), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), ListOfintToColumn()))[$toList](), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    build(context) {
      return new (StoreConnectorOfAppState$AppState()).new({converter: dart.fn(store => store.state, StoreOfAppStateToAppState()), builder: dart.fn((context, state) => {
          let w = dart.notNull(media_query.MediaQuery.of(context).size.height) / 16 * 9;
          let size = w / (dart.notNull(state.board[$length]) + 1);
          let depth = dart.notNull(JSArrayOfint().of([1 + (dart.notNull(state.score) / 5)[$truncate](), 4])[$reduce](dart.gbind(C0 || CT.C0, core.int))) * 100;
          let colors = JSArrayOfMaterialColor().of([colors$.Colors.blue, colors$.Colors.orange, colors$.Colors.pink, colors$.Colors.purple, colors$.Colors.cyan]);
          return new scaffold.Scaffold.new({backgroundColor: new ui.Color.new(4290568694), body: new basic.Center.new({child: new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.height, width: dart.notNull(media_query.MediaQuery.of(context).size.height) / 16 * 9, child: new container.Container.new({decoration: decoration.Decoration._check(game.setBg(dart.notNull(state.page) < 0 ? "p0.jpg" : "p1.jpg")), child: dart.notNull(state.page) >= 0 ? new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({height: w * 0.325, padding: edge_insets.EdgeInsetsGeometry._check(game.pad(0.0, w * 0.145)), child: framework.Widget._check(game.setText(dart.toString(state.score), w * 0.2, colors$.Colors.white)), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new container.Container.new({height: w * 0.35, padding: edge_insets.EdgeInsetsGeometry._check(game.pad(w * 0.69, dart.notNull(state.page) * 7.0)), child: framework.Widget._check(dart.notNull(state.page) < 1 ? new game.Timer.new({onEnd: dart.fn(() => this.store.dispatch(game.Action.end), VoidTovoid()), width: w, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}) : game.setText("End", w * 0.08, colors$.Colors.red)), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), dart.notNull(state.page) < 1 ? new container.Container.new({width: w, height: w * 1.05, padding: edge_insets.EdgeInsetsGeometry._check(game.pad(0.0, w * 0.05)), child: framework.Widget._check(this[_createBoard](size, state.board, depth, colors[$_get](state.count[$modulo](colors[$length])))), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}) : new container.Container.new({width: w, height: w, decoration: decoration.Decoration._check(game.setBg(dart.dsend(this[_grade](state.score), '+', [".png"]))), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), floatingActionButton: state.page !== 0 ? new container.Container.new({child: new floating_action_button.FloatingActionButton.new({child: new icon.Icon.new(dart.notNull(state.page) < 1 ? icons.Icons.play_arrow : icons.Icons.refresh, {$creationLocationd_0dea112b090073317d4: C64 || CT.C64}), onPressed: dart.fn(() => this.store.dispatch(game.Action.start), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75});
        }, BuildContextAndAppStateToScaffold()), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (game.Game.new = function(store, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[store$] = store;
    game.Game.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = game.Game.prototype;
  dart.addTypeTests(game.Game);
  dart.setMethodSignature(game.Game, () => ({
    __proto__: dart.getMethods(game.Game.__proto__),
    [_grade]: dart.fnType(dart.dynamic, [core.int]),
    [_createBoard]: dart.fnType(dart.dynamic, [core.double, core.List$(core.List$(core.int)), core.int, colors$.MaterialColor]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(game.Game, "package:vision_challenge/game.dart");
  dart.setFieldSignature(game.Game, () => ({
    __proto__: dart.getFields(game.Game.__proto__),
    store: dart.finalFieldType(store.Store$(game.AppState))
  }));
  const onEnd$ = dart.privateName(game, "Timer.onEnd");
  const width$ = dart.privateName(game, "Timer.width");
  game.Timer = class Timer extends framework.StatefulWidget {
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      super.onEnd = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    createState() {
      return new game._TimerState.new();
    }
  };
  (game.Timer.new = function(opts) {
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onEnd$] = onEnd;
    this[width$] = width;
    game.Timer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = game.Timer.prototype;
  dart.addTypeTests(game.Timer);
  dart.setMethodSignature(game.Timer, () => ({
    __proto__: dart.getMethods(game.Timer.__proto__),
    createState: dart.fnType(game._TimerState, [])
  }));
  dart.setLibraryUri(game.Timer, "package:vision_challenge/game.dart");
  dart.setFieldSignature(game.Timer, () => ({
    __proto__: dart.getFields(game.Timer.__proto__),
    onEnd: dart.finalFieldType(dart.fnType(dart.void, [])),
    width: dart.finalFieldType(core.double)
  }));
  const _animate = dart.privateName(game, "_animate");
  const _sec = dart.privateName(game, "_sec");
  let C86;
  let C87;
  let C85;
  let C84;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(game.Timer) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(game.Timer)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(game.Timer));
  game._TimerState = class _TimerState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_animate] = (t0$ = new tween.StepTween.new({begin: this[_sec], end: 0}).animate((t0 = new animation_controller.AnimationController.new({duration: new core.Duration.new({seconds: this[_sec]}), vsync: this}), t0.forward({from: 0.0}), t0)), t0$.addStatusListener(dart.fn(s => {
        if (dart.equals(s, animation.AnimationStatus.completed)) this.widget.onEnd();
      }, AnimationStatusToNull())), t0$);
    }
    build(context) {
      return new transitions.AnimatedBuilder.new({animation: this[_animate], builder: dart.fn((context, child) => framework.Widget._check(game.setText(dart.toString(this[_animate].value)[$padLeft](2, "0"), dart.notNull(this.widget.width) * 0.12, colors$.Colors.green)), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
    }
  };
  (game._TimerState.new = function() {
    this[_animate] = null;
    this[_sec] = 31;
    game._TimerState.__proto__.new.call(this);
    ;
  }).prototype = game._TimerState.prototype;
  dart.addTypeTests(game._TimerState);
  dart.setMethodSignature(game._TimerState, () => ({
    __proto__: dart.getMethods(game._TimerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(game._TimerState, "package:vision_challenge/game.dart");
  dart.setFieldSignature(game._TimerState, () => ({
    __proto__: dart.getFields(game._TimerState.__proto__),
    [_animate]: dart.fieldType(animation.Animation),
    [_sec]: dart.fieldType(core.int)
  }));
  const score$ = dart.privateName(game, "AppState.score");
  const page$ = dart.privateName(game, "AppState.page");
  const count$ = dart.privateName(game, "AppState.count");
  const board$ = dart.privateName(game, "AppState.board");
  game.AppState = class AppState extends core.Object {
    get score() {
      return this[score$];
    }
    set score(value) {
      super.score = value;
    }
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    get board() {
      return this[board$];
    }
    set board(value) {
      super.board = value;
    }
  };
  (game.AppState.new = function(opts) {
    let score = opts && 'score' in opts ? opts.score : null;
    let page = opts && 'page' in opts ? opts.page : null;
    let board = opts && 'board' in opts ? opts.board : null;
    let count = opts && 'count' in opts ? opts.count : null;
    this[score$] = score;
    this[page$] = page;
    this[board$] = board;
    this[count$] = count;
    ;
  }).prototype = game.AppState.prototype;
  (game.AppState.init = function() {
    this[score$] = 0;
    this[page$] = -1;
    this[count$] = 0;
    this[board$] = game.newBoard(0);
    ;
  }).prototype = game.AppState.prototype;
  dart.addTypeTests(game.AppState);
  dart.setLibraryUri(game.AppState, "package:vision_challenge/game.dart");
  dart.setFieldSignature(game.AppState, () => ({
    __proto__: dart.getFields(game.AppState.__proto__),
    score: dart.finalFieldType(core.int),
    page: dart.finalFieldType(core.int),
    count: dart.finalFieldType(core.int),
    board: dart.finalFieldType(core.List$(core.List$(core.int)))
  }));
  const _name$ = dart.privateName(game, "_name");
  let C88;
  let C89;
  let C90;
  let C91;
  let C92;
  game.Action = class Action extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (game.Action.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = game.Action.prototype;
  dart.addTypeTests(game.Action);
  dart.setLibraryUri(game.Action, "package:vision_challenge/game.dart");
  dart.setFieldSignature(game.Action, () => ({
    __proto__: dart.getFields(game.Action.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(game.Action, ['toString']);
  game.Action.next = C88 || CT.C88;
  game.Action.end = C89 || CT.C89;
  game.Action.start = C90 || CT.C90;
  game.Action.shake = C91 || CT.C91;
  game.Action.values = C92 || CT.C92;
  let C95;
  let C96;
  let C94;
  let C93;
  game.setText = function setText(text, size, color) {
    return new text$.Text.new(core.String._check(text), {style: new text_style.TextStyle.new({fontSize: core.double._check(size), color: ui.Color._check(color), fontWeight: ui.FontWeight.bold, decoration: ui.TextDecoration.none}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
  };
  game.pad = function pad(left, top) {
    return new edge_insets.EdgeInsets.fromLTRB(left, top, 0.0, 0.0);
  };
  game.setBg = function setBg(name) {
    return new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.cover, alignment: alignment.Alignment.topLeft, image: new image_resolution.AssetImage.new(core.String._check(name))})});
  };
  game.reducer = function reducer(s, act) {
    switch (act) {
      case C88 || CT.C88:
      {
        return new game.AppState.new({score: dart.notNull(s.score) + 1, page: s.page, count: s.count, board: game.newBoard(dart.notNull(s.score) + 1)});
      }
      case C89 || CT.C89:
      {
        return new game.AppState.new({score: s.score, page: 1, count: dart.notNull(s.count) + 1, board: s.board});
      }
      case C90 || CT.C90:
      {
        return new game.AppState.new({score: 0, page: 0, count: s.count, board: game.newBoard(0)});
      }
      case C91 || CT.C91:
      {
        return new game.AppState.new({score: s.score, page: s.page, count: dart.notNull(s.count) + 1, board: s.board});
      }
      default:
      {
        return s;
      }
    }
  };
  game.newBoard = function newBoard(score) {
    let size = dart.dtest(dart.dsend(score, '<', [7])) ? dart.dsend(score, '+', [3]) : 10;
    let rng = math.Random.new();
    let bingoRow = rng.nextInt(core.int._check(size));
    let bingoCol = rng.nextInt(core.int._check(size));
    let board = JSArrayOfListOfint().of([]);
    for (let i = 0; i < dart.notNull(core.num._check(size)); i = i + 1) {
      let row = JSArrayOfint().of([]);
      for (let j = 0; j < dart.notNull(core.num._check(size)); j = j + 1)
        row[$add](i === bingoRow && j === bingoCol ? 1 : 0);
      board[$add](row);
    }
    return board;
  };
  dart.trackLibraries("packages/vision_challenge/game", {
    "package:vision_challenge/game.dart": game
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["game.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBwB;;;;;;aAEX;AAAU,YAGhB,eAHgB,AAChB,AACA,mBAFiB,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,aACnC,QAAC,KAAQ,aAAF,CAAC,iBAAG,KAAK,0BACf;IACG;mBAEK,MAAsB,QAAY,OAChC;AAClB,mDACyC,8CAC3B,AACL,AAcA,MAfW,qBACP,QAAC,QAAS,yCAC0B,8CAC3B,AACL,AAUA,IAXS,uBACL,QAAC,QAAS,+BACF,iDACI;AACL,oBAAI,AAAK,IAAD,KAAI,GAAG,AAAM,AAAqB,oBAAL;uCAEhC,oCACI,IAAI,UACH,IAAI,SACA,aAAL,IAAI,IAAG,IAAI,AAAK,KAAA,MAAC,KAAK,IAAI,KAAK;IAGlD;UAGI;AAAY,uEAGvB,QAAC,SAAU,AAAM,KAAD,+CAClB,SAAC,SAAS;AACb,kBAAuC,AAAK,aAA7B,AAAY,AAAK,0BAAd,OAAO,iBAAgB,KAAK;AAC9C,qBAAO,AAAE,CAAD,IAAuB,aAAnB,AAAM,AAAM,KAAP,mBAAgB;AACjC,sBAA8C,aAAtC,AAA0B,mBAAzB,AAAE,IAAc,cAAZ,AAAM,KAAD,UAAU,iBAAG,aAAU,sCAAO;AAChD,uBAAS,6BACJ,qBACA,uBACA,qBACA,uBACA;AAGT,gBAAO,6CACc,iBAAM,mBACjB,6BACG,gCACc,AAAY,AAAK,0BAAd,OAAO,sBACa,AAAK,aAA7B,AAAY,AAAK,0BAAd,OAAO,iBAAgB,KAAK,UAC1C,sEACS,WAAiB,aAAX,AAAM,KAAD,SAAQ,IAAI,WAAW,mBAC5B,aAAX,AAAM,KAAD,UAAS,IACf,0CACyC,0CACrB,sBACd,qCACY,AAAE,CAAD,GAAG,sDACH,SAAI,KAAG,AAAE,CAAD,GAAG,wCACb,aAAoB,cAAZ,AAAM,KAAD,SAChB,AAAE,CAAD,GAAG,KAAY,iFACxB,qCACY,AAAE,CAAD,GAAG,qDACH,SAAI,AAAE,CAAD,GAAG,MAAiB,aAAX,AAAM,KAAD,SAAQ,cAEhC,wBADc,aAAX,AAAM,KAAD,SAAQ,IACd,2BACS,cACH,AAAM,oBAAgB,wCACnB,CAAC,4DACV,aAAQ,OAAO,AAAE,CAAD,GAAG,MAAa,+EAC/B,aAAX,AAAM,KAAD,SAAQ,IACP,oCACS,CAAC,UACA,AAAE,CAAD,GAAG,qDACH,SAAI,KAAG,AAAE,CAAD,GAAG,uCACb,mBACH,IAAI,EACJ,AAAM,KAAD,QACL,KAAK,EACL,AAAM,MAAA,QACF,AAAM,AAAM,KAAP,gBAAS,AAAO,MAAD,yEAC9B,oCACS,CAAC,UACA,CAAC,2CAEL,WAA0B,WAApB,aAAO,AAAM,KAAD,eAAU,iIAE9C,uRAGQ,AAAM,AAAK,KAAN,UAAS,IAC9B,oCAGS,4DACI,kBACQ,aAAX,AAAM,KAAD,SAAQ,IAAU,yBAAmB,0FACnC,cAAM,AAAM,oBAAgB,sJAC7C;;IACV;;4BAnGI;;;AAAV;;EAAgB;;;;;;;;;;;;;;;;IAwGG;;;;;;IACN;;;;;;;AAEgB;IAAa;;;QAJ9B;QAAY;;IAAZ;IAAY;AAAxB;;EAA+B;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaZ,MAAX;AAMF,MALJ,wBAAW,AAA+B,gCAAd,iBAAW,kBACnC,4DAA8B,gCAAkB,qBAAc,QAC1D,kBAAc,aAClB,sBAAkB,QAAiB;AACnC,YAAM,YAAF,CAAC,EAAoB,sCAAW,AAAO,AAAO;;IAExD;UAG0B;AAAY,6DACvB,yBACF,SAAc,SAAgB,kCAAU,aAC9B,AAAW,cAA1B,AAAS,gCAAyB,GAAG,MACxB,aAAb,AAAO,qBAAQ,MACR;IAAO;;;IApBZ;IACN,aAAO;;;EAoBb;;;;;;;;;;;;;;;;;IAKY;;;;;;IAAO;;;;;;IAAM;;;;;;IACD;;;;;;;;QACP;QAAY;QAAW;QAAY;IAAnC;IAAY;IAAW;IAAY;;EAAO;;IAE7C,eAAE;IACH,cAAE,CAAC;IACF,eAAE;IACF,eAAE,cAAS;;EAAE;;;;;;;;;;;;;;;;;;;IAGW;;qCAAjC;;;;EAAiC;;;;;;;;;;;;;;;;;;kCApK9B,MAAM,MAAM;AAAU,iDAAK,IAAI,WAC5B,2DACO,IAAI,0BACP,KAAK,eACW,gCACI;EAAM;0BAE9B,MAAa;AAAQ,UAAW,qCAAS,IAAI,EAAE,GAAG,EAAE,KAAG;EAAE;8BAE9D;AAAS,wDACJ,+CACS,iCACS,oCACd,uDAAW,IAAI;EAAG;kCAyJP,GAAG;AAC3B,YAAQ,GAAG;;;AAEP,cAAO,+BACY,aAAR,AAAE,CAAD,UAAS,SACX,AAAE,CAAD,cACA,AAAE,CAAD,eACD,cAAiB,aAAR,AAAE,CAAD,UAAS;;;;AAE9B,cAAO,+BACI,AAAE,CAAD,cAAc,UAAkB,aAAR,AAAE,CAAD,UAAS,UAAU,AAAE,CAAD;;;;AAEzD,cAAO,+BAAgB,SAAS,UAAU,AAAE,CAAD,eAAe,cAAS;;;;AAEnE,cAAO,+BACI,AAAE,CAAD,cAAc,AAAE,CAAD,cAAsB,aAAR,AAAE,CAAD,UAAS,UAAU,AAAE,CAAD;;;;AAE9D,cAAO,EAAC;;;EAEd;oCAEyB;AACnB,0BAAa,WAAN,KAAK,QAAG,OAAU,WAAN,KAAK,QAAG,MAAI;AAC/B,cAAM;AACN,mBAAW,AAAI,GAAD,yBAAS,IAAI;AAC3B,mBAAW,AAAI,GAAD,yBAAS,IAAI;AACf,gBAAQ;AACxB,aAAS,IAAI,GAAG,AAAE,CAAD,gCAAG,IAAI,IAAE,IAAA,AAAC,CAAA;AACf,gBAAM;AAChB,eAAS,IAAI,GAAG,AAAE,CAAD,gCAAG,IAAI,IAAE,IAAA,AAAC,CAAA;AACsB,QAA/C,AAAI,GAAD,OAAK,AAAE,AAAY,CAAb,KAAI,QAAQ,IAAI,AAAE,CAAD,KAAI,QAAQ,GAAG,IAAI;AACjC,MAAd,AAAM,KAAD,OAAK,GAAG;;AAEf,UAAO,MAAK;EACd","file":"game.ddc.js"}');
  // Exports:
  return {
    game: game
  };
});

//# sourceMappingURL=game.ddc.js.map
