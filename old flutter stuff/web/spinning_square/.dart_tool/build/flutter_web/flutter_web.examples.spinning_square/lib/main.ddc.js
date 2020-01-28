define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3600000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 32,
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
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart"
      });
    },
    get C12() {
      return C12 = dart.constList([], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart"
      });
    }
  });
  main.SpinningSquare = class SpinningSquare extends framework.StatefulWidget {
    createState() {
      return new main._SpinningSquareState.new();
    }
  };
  (main.SpinningSquare.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.SpinningSquare.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.SpinningSquare.prototype;
  dart.addTypeTests(main.SpinningSquare);
  dart.setMethodSignature(main.SpinningSquare, () => ({
    __proto__: dart.getMethods(main.SpinningSquare.__proto__),
    createState: dart.fnType(main._SpinningSquareState, [])
  }));
  dart.setLibraryUri(main.SpinningSquare, "package:flutter_web.examples.spinning_square/main.dart");
  const _animation = dart.privateName(main, "_animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const Color_value = dart.privateName(ui, "Color.value");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  let C9;
  let C10;
  let C8;
  let C7;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(main.SpinningSquare) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(main.SpinningSquare)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(main.SpinningSquare));
  main._SpinningSquareState = class _SpinningSquareState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0;
      super.initState();
      this[_animation] = (t0 = new animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this}), t0.repeat(), t0);
    }
    build(context) {
      return new transitions.RotationTransition.new({turns: this[_animation], child: new container.Container.new({width: 200.0, height: 200.0, color: C1 || CT.C1, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    dispose() {
      this[_animation].dispose();
      super.dispose();
    }
  };
  (main._SpinningSquareState.new = function() {
    this[_animation] = null;
    main._SpinningSquareState.__proto__.new.call(this);
    ;
  }).prototype = main._SpinningSquareState.prototype;
  dart.addTypeTests(main._SpinningSquareState);
  dart.setMethodSignature(main._SpinningSquareState, () => ({
    __proto__: dart.getMethods(main._SpinningSquareState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._SpinningSquareState, "package:flutter_web.examples.spinning_square/main.dart");
  dart.setFieldSignature(main._SpinningSquareState, () => ({
    __proto__: dart.getFields(main._SpinningSquareState.__proto__),
    [_animation]: dart.fieldType(animation_controller.AnimationController)
  }));
  let C12;
  let C11;
  let C15;
  let C14;
  let C13;
  main.main = function main$() {
    binding.runApp(new basic.Center.new({child: new main.SpinningSquare.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}));
  };
  dart.trackLibraries("packages/flutter_web.examples.spinning_square/main", {
    "package:flutter_web.examples.spinning_square/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQwC,YAAI;IAAsB;;;;;;EAClE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQqB,MAAX;AAOK,MAHX,yBAAiB,gFAER,QACN;IACL;UAG0B;AACxB,YAAW,gDACA,yBACI,oCACF,eACC;IAGhB;;AAIsB,MAApB,AAAW;AACI,MAAT;IACR;;;IA7BoB;;;EA8BtB;;;;;;;;;;;;;;;;;AAGiD,IAA/C,eAAW,6BAAkB;EAC/B","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
