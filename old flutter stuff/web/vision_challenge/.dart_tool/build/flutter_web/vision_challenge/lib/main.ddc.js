define(['dart_sdk', 'packages/redux/redux', 'packages/vision_challenge/game', 'packages/flutter/src/widgets/actions', 'packages/flutter_redux/flutter_redux', 'packages/flutter/material'], function(dart_sdk, packages__redux__redux, packages__vision_challenge__game, packages__flutter__src__widgets__actions, packages__flutter_redux__flutter_redux, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const store = packages__redux__redux.src__store;
  const game = packages__vision_challenge__game.game;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const flutter_redux = packages__flutter_redux__flutter_redux.flutter_redux;
  const app = packages__flutter__material.src__material__app;
  const main = Object.create(dart.library);
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(store.Store$(game.AppState)))();
  let AppStateAnddynamicToAppState = () => (AppStateAnddynamicToAppState = dart.constFn(dart.fnType(game.AppState, [game.AppState, dart.dynamic])))();
  let StoreProviderOfAppState = () => (StoreProviderOfAppState = dart.constFn(flutter_redux.StoreProvider$(game.AppState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(game.reducer, AppStateAnddynamicToAppState());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "store",
        [_Location_column]: 20,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "store",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/vision_challenge/main.dart"
      });
    }
  });
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
  main.main = function main$() {
    let store = new (StoreOfAppState()).new(C0 || CT.C0, {initialState: new game.AppState.init()});
    binding.runApp(new (StoreProviderOfAppState()).new({store: store, child: new app.MaterialApp.new({home: new game.Game.new(store, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}));
  };
  dart.trackLibraries("packages/vision_challenge/main", {
    "package:vision_challenge/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMQ,gBAAQ,wDAEW;AAUxB,IAPD,eACE,4CACS,KAAK,SACL,+BACC,kBAAK,KAAK;EAIxB","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
