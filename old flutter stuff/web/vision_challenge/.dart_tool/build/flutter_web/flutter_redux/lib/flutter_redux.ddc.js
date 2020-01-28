define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/redux/redux'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__redux__redux) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const store = packages__redux__redux.src__store;
  const flutter_redux = Object.create(dart.library);
  let StoreOfSToStoreOfS = () => (StoreOfSToStoreOfS = dart.constFn(dart.gFnType(S => [store.Store$(S), [store.Store$(S)]])))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "store",
        [_Location_column]: 7,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "converter",
        [_Location_column]: 7,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "distinct",
        [_Location_column]: 7,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onInit",
        [_Location_column]: 7,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDispose",
        [_Location_column]: 7,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rebuildOnChange",
        [_Location_column]: 7,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "ignoreChange",
        [_Location_column]: 7,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillChange",
        [_Location_column]: 7,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDidChange",
        [_Location_column]: 7,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onInitialBuild",
        [_Location_column]: 7,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart"
      });
    },
    get C13() {
      return C13 = dart.fn(flutter_redux.StoreBuilder._identity, StoreOfSToStoreOfS());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "converter",
        [_Location_column]: 7,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rebuildOnChange",
        [_Location_column]: 7,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onInit",
        [_Location_column]: 7,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDispose",
        [_Location_column]: 7,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillChange",
        [_Location_column]: 7,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDidChange",
        [_Location_column]: 7,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onInitialBuild",
        [_Location_column]: 7,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 13,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 468,
        [_Location_file]: "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart"
      });
    }
  });
  const _store = dart.privateName(flutter_redux, "_store");
  const _is_StoreProvider_default = Symbol('_is_StoreProvider_default');
  const _store$ = dart.privateName(flutter_redux, "StoreProvider._store");
  flutter_redux.StoreProvider$ = dart.generic(S => {
    let StoreProviderOfS = () => (StoreProviderOfS = dart.constFn(flutter_redux.StoreProvider$(S)))();
    class StoreProvider extends framework.InheritedWidget {
      get [_store]() {
        return this[_store$];
      }
      set [_store](value) {
        super[_store] = value;
      }
      static of(S, context, opts) {
        let t0;
        let listen = opts && 'listen' in opts ? opts.listen : true;
        let type = flutter_redux.StoreProvider._typeOf(flutter_redux.StoreProvider$(S));
        let provider = flutter_redux.StoreProvider$(S).as(dart.test(listen) ? context.inheritFromWidgetOfExactType(type) : (t0 = context.ancestorInheritedElementForWidgetOfExactType(type), t0 == null ? null : t0.widget));
        if (provider == null) dart.throw(new flutter_redux.StoreProviderError.new(type));
        return provider[_store];
      }
      static _typeOf(T) {
        return dart.wrapType(T);
      }
      updateShouldNotify(oldWidget) {
        StoreProviderOfS()._check(oldWidget);
        return !dart.equals(this[_store], oldWidget[_store]);
      }
    }
    (StoreProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let store = opts && 'store' in opts ? opts.store : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(store != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart", 21, 16, "store != null");
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart", 22, 16, "child != null");
      this[_store$] = store;
      StoreProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StoreProvider.prototype;
    dart.addTypeTests(StoreProvider);
    StoreProvider.prototype[_is_StoreProvider_default] = true;
    dart.setMethodSignature(StoreProvider, () => ({
      __proto__: dart.getMethods(StoreProvider.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(StoreProvider, "package:flutter_redux/flutter_redux.dart");
    dart.setFieldSignature(StoreProvider, () => ({
      __proto__: dart.getFields(StoreProvider.__proto__),
      [_store]: dart.finalFieldType(store.Store$(S))
    }));
    return StoreProvider;
  });
  flutter_redux.StoreProvider = flutter_redux.StoreProvider$();
  dart.addTypeTests(flutter_redux.StoreProvider, _is_StoreProvider_default);
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C1;
  let C0;
  const _is_StoreConnector_default = Symbol('_is_StoreConnector_default');
  const builder$ = dart.privateName(flutter_redux, "StoreConnector.builder");
  const converter$ = dart.privateName(flutter_redux, "StoreConnector.converter");
  const distinct$ = dart.privateName(flutter_redux, "StoreConnector.distinct");
  const onInit$ = dart.privateName(flutter_redux, "StoreConnector.onInit");
  const onDispose$ = dart.privateName(flutter_redux, "StoreConnector.onDispose");
  const rebuildOnChange$ = dart.privateName(flutter_redux, "StoreConnector.rebuildOnChange");
  const ignoreChange$ = dart.privateName(flutter_redux, "StoreConnector.ignoreChange");
  const onWillChange$ = dart.privateName(flutter_redux, "StoreConnector.onWillChange");
  const onDidChange$ = dart.privateName(flutter_redux, "StoreConnector.onDidChange");
  const onInitialBuild$ = dart.privateName(flutter_redux, "StoreConnector.onInitialBuild");
  flutter_redux.StoreConnector$ = dart.generic((S, ViewModel) => {
    let _StoreStreamListenerOfS$ViewModel = () => (_StoreStreamListenerOfS$ViewModel = dart.constFn(flutter_redux._StoreStreamListener$(S, ViewModel)))();
    class StoreConnector extends framework.StatelessWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get converter() {
        return this[converter$];
      }
      set converter(value) {
        super.converter = value;
      }
      get distinct() {
        return this[distinct$];
      }
      set distinct(value) {
        super.distinct = value;
      }
      get onInit() {
        return this[onInit$];
      }
      set onInit(value) {
        super.onInit = value;
      }
      get onDispose() {
        return this[onDispose$];
      }
      set onDispose(value) {
        super.onDispose = value;
      }
      get rebuildOnChange() {
        return this[rebuildOnChange$];
      }
      set rebuildOnChange(value) {
        super.rebuildOnChange = value;
      }
      get ignoreChange() {
        return this[ignoreChange$];
      }
      set ignoreChange(value) {
        super.ignoreChange = value;
      }
      get onWillChange() {
        return this[onWillChange$];
      }
      set onWillChange(value) {
        super.onWillChange = value;
      }
      get onDidChange() {
        return this[onDidChange$];
      }
      set onDidChange(value) {
        super.onDidChange = value;
      }
      get onInitialBuild() {
        return this[onInitialBuild$];
      }
      set onInitialBuild(value) {
        super.onInitialBuild = value;
      }
      build(context) {
        return new (_StoreStreamListenerOfS$ViewModel()).new({store: flutter_redux.StoreProvider.of(S, context), builder: this.builder, converter: this.converter, distinct: this.distinct, onInit: this.onInit, onDispose: this.onDispose, rebuildOnChange: this.rebuildOnChange, ignoreChange: this.ignoreChange, onWillChange: this.onWillChange, onDidChange: this.onDidChange, onInitialBuild: this.onInitialBuild, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      }
    }
    (StoreConnector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let converter = opts && 'converter' in opts ? opts.converter : null;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      let onInit = opts && 'onInit' in opts ? opts.onInit : null;
      let onDispose = opts && 'onDispose' in opts ? opts.onDispose : null;
      let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : true;
      let ignoreChange = opts && 'ignoreChange' in opts ? opts.ignoreChange : null;
      let onWillChange = opts && 'onWillChange' in opts ? opts.onWillChange : null;
      let onDidChange = opts && 'onDidChange' in opts ? opts.onDidChange : null;
      let onInitialBuild = opts && 'onInitialBuild' in opts ? opts.onInitialBuild : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[converter$] = converter;
      this[distinct$] = distinct;
      this[onInit$] = onInit;
      this[onDispose$] = onDispose;
      this[rebuildOnChange$] = rebuildOnChange;
      this[ignoreChange$] = ignoreChange;
      this[onWillChange$] = onWillChange;
      this[onDidChange$] = onDidChange;
      this[onInitialBuild$] = onInitialBuild;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart", 283, 16, "builder != null");
      if (!(converter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart", 284, 16, "converter != null");
      StoreConnector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StoreConnector.prototype;
    dart.addTypeTests(StoreConnector);
    StoreConnector.prototype[_is_StoreConnector_default] = true;
    dart.setMethodSignature(StoreConnector, () => ({
      __proto__: dart.getMethods(StoreConnector.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(StoreConnector, "package:flutter_redux/flutter_redux.dart");
    dart.setFieldSignature(StoreConnector, () => ({
      __proto__: dart.getFields(StoreConnector.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ViewModel])),
      converter: dart.finalFieldType(dart.fnType(ViewModel, [store.Store$(S)])),
      distinct: dart.finalFieldType(core.bool),
      onInit: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onDispose: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      rebuildOnChange: dart.finalFieldType(core.bool),
      ignoreChange: dart.finalFieldType(dart.fnType(core.bool, [S])),
      onWillChange: dart.finalFieldType(dart.fnType(dart.void, [ViewModel])),
      onDidChange: dart.finalFieldType(dart.fnType(dart.void, [ViewModel])),
      onInitialBuild: dart.finalFieldType(dart.fnType(dart.void, [ViewModel]))
    }));
    return StoreConnector;
  });
  flutter_redux.StoreConnector = flutter_redux.StoreConnector$();
  dart.addTypeTests(flutter_redux.StoreConnector, _is_StoreConnector_default);
  let C13;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C15;
  let C14;
  const _is_StoreBuilder_default = Symbol('_is_StoreBuilder_default');
  const builder$0 = dart.privateName(flutter_redux, "StoreBuilder.builder");
  const rebuildOnChange$0 = dart.privateName(flutter_redux, "StoreBuilder.rebuildOnChange");
  const onInit$0 = dart.privateName(flutter_redux, "StoreBuilder.onInit");
  const onDispose$0 = dart.privateName(flutter_redux, "StoreBuilder.onDispose");
  const onWillChange$0 = dart.privateName(flutter_redux, "StoreBuilder.onWillChange");
  const onDidChange$0 = dart.privateName(flutter_redux, "StoreBuilder.onDidChange");
  const onInitialBuild$0 = dart.privateName(flutter_redux, "StoreBuilder.onInitialBuild");
  flutter_redux.StoreBuilder$ = dart.generic(S => {
    let StoreOfS = () => (StoreOfS = dart.constFn(store.Store$(S)))();
    let StoreConnectorOfS$StoreOfS = () => (StoreConnectorOfS$StoreOfS = dart.constFn(flutter_redux.StoreConnector$(S, StoreOfS())))();
    class StoreBuilder extends framework.StatelessWidget {
      get builder() {
        return this[builder$0];
      }
      set builder(value) {
        super.builder = value;
      }
      get rebuildOnChange() {
        return this[rebuildOnChange$0];
      }
      set rebuildOnChange(value) {
        super.rebuildOnChange = value;
      }
      get onInit() {
        return this[onInit$0];
      }
      set onInit(value) {
        super.onInit = value;
      }
      get onDispose() {
        return this[onDispose$0];
      }
      set onDispose(value) {
        super.onDispose = value;
      }
      get onWillChange() {
        return this[onWillChange$0];
      }
      set onWillChange(value) {
        super.onWillChange = value;
      }
      get onDidChange() {
        return this[onDidChange$0];
      }
      set onDidChange(value) {
        super.onDidChange = value;
      }
      get onInitialBuild() {
        return this[onInitialBuild$0];
      }
      set onInitialBuild(value) {
        super.onInitialBuild = value;
      }
      static _identity(S, store) {
        return store;
      }
      build(context) {
        return new (StoreConnectorOfS$StoreOfS()).new({builder: this.builder, converter: dart.gbind(C13 || CT.C13, S), rebuildOnChange: this.rebuildOnChange, onInit: this.onInit, onDispose: this.onDispose, onWillChange: this.onWillChange, onDidChange: this.onDidChange, onInitialBuild: this.onInitialBuild, $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
      }
    }
    (StoreBuilder.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let onInit = opts && 'onInit' in opts ? opts.onInit : null;
      let onDispose = opts && 'onDispose' in opts ? opts.onDispose : null;
      let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : true;
      let onWillChange = opts && 'onWillChange' in opts ? opts.onWillChange : null;
      let onDidChange = opts && 'onDidChange' in opts ? opts.onDidChange : null;
      let onInitialBuild = opts && 'onInitialBuild' in opts ? opts.onInitialBuild : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$0] = builder;
      this[onInit$0] = onInit;
      this[onDispose$0] = onDispose;
      this[rebuildOnChange$0] = rebuildOnChange;
      this[onWillChange$0] = onWillChange;
      this[onDidChange$0] = onDidChange;
      this[onInitialBuild$0] = onInitialBuild;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_redux/flutter_redux.dart", 369, 16, "builder != null");
      StoreBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StoreBuilder.prototype;
    dart.addTypeTests(StoreBuilder);
    StoreBuilder.prototype[_is_StoreBuilder_default] = true;
    dart.setMethodSignature(StoreBuilder, () => ({
      __proto__: dart.getMethods(StoreBuilder.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(StoreBuilder, "package:flutter_redux/flutter_redux.dart");
    dart.setFieldSignature(StoreBuilder, () => ({
      __proto__: dart.getFields(StoreBuilder.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, store.Store$(S)])),
      rebuildOnChange: dart.finalFieldType(core.bool),
      onInit: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onDispose: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onWillChange: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onDidChange: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onInitialBuild: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)]))
    }));
    return StoreBuilder;
  });
  flutter_redux.StoreBuilder = flutter_redux.StoreBuilder$();
  dart.addTypeTests(flutter_redux.StoreBuilder, _is_StoreBuilder_default);
  const _is__StoreStreamListener_default = Symbol('_is__StoreStreamListener_default');
  const builder$1 = dart.privateName(flutter_redux, "_StoreStreamListener.builder");
  const converter$0 = dart.privateName(flutter_redux, "_StoreStreamListener.converter");
  const store$ = dart.privateName(flutter_redux, "_StoreStreamListener.store");
  const rebuildOnChange$1 = dart.privateName(flutter_redux, "_StoreStreamListener.rebuildOnChange");
  const distinct$0 = dart.privateName(flutter_redux, "_StoreStreamListener.distinct");
  const onInit$1 = dart.privateName(flutter_redux, "_StoreStreamListener.onInit");
  const onDispose$1 = dart.privateName(flutter_redux, "_StoreStreamListener.onDispose");
  const ignoreChange$0 = dart.privateName(flutter_redux, "_StoreStreamListener.ignoreChange");
  const onWillChange$1 = dart.privateName(flutter_redux, "_StoreStreamListener.onWillChange");
  const onDidChange$1 = dart.privateName(flutter_redux, "_StoreStreamListener.onDidChange");
  const onInitialBuild$1 = dart.privateName(flutter_redux, "_StoreStreamListener.onInitialBuild");
  flutter_redux._StoreStreamListener$ = dart.generic((S, ViewModel) => {
    let _StoreStreamListenerStateOfS$ViewModel = () => (_StoreStreamListenerStateOfS$ViewModel = dart.constFn(flutter_redux._StoreStreamListenerState$(S, ViewModel)))();
    class _StoreStreamListener extends framework.StatefulWidget {
      get builder() {
        return this[builder$1];
      }
      set builder(value) {
        super.builder = value;
      }
      get converter() {
        return this[converter$0];
      }
      set converter(value) {
        super.converter = value;
      }
      get store() {
        return this[store$];
      }
      set store(value) {
        super.store = value;
      }
      get rebuildOnChange() {
        return this[rebuildOnChange$1];
      }
      set rebuildOnChange(value) {
        super.rebuildOnChange = value;
      }
      get distinct() {
        return this[distinct$0];
      }
      set distinct(value) {
        super.distinct = value;
      }
      get onInit() {
        return this[onInit$1];
      }
      set onInit(value) {
        super.onInit = value;
      }
      get onDispose() {
        return this[onDispose$1];
      }
      set onDispose(value) {
        super.onDispose = value;
      }
      get ignoreChange() {
        return this[ignoreChange$0];
      }
      set ignoreChange(value) {
        super.ignoreChange = value;
      }
      get onWillChange() {
        return this[onWillChange$1];
      }
      set onWillChange(value) {
        super.onWillChange = value;
      }
      get onDidChange() {
        return this[onDidChange$1];
      }
      set onDidChange(value) {
        super.onDidChange = value;
      }
      get onInitialBuild() {
        return this[onInitialBuild$1];
      }
      set onInitialBuild(value) {
        super.onInitialBuild = value;
      }
      createState() {
        return new (_StoreStreamListenerStateOfS$ViewModel()).new();
      }
    }
    (_StoreStreamListener.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let store = opts && 'store' in opts ? opts.store : null;
      let converter = opts && 'converter' in opts ? opts.converter : null;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      let onInit = opts && 'onInit' in opts ? opts.onInit : null;
      let onDispose = opts && 'onDispose' in opts ? opts.onDispose : null;
      let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : true;
      let ignoreChange = opts && 'ignoreChange' in opts ? opts.ignoreChange : null;
      let onWillChange = opts && 'onWillChange' in opts ? opts.onWillChange : null;
      let onDidChange = opts && 'onDidChange' in opts ? opts.onDidChange : null;
      let onInitialBuild = opts && 'onInitialBuild' in opts ? opts.onInitialBuild : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$1] = builder;
      this[store$] = store;
      this[converter$0] = converter;
      this[distinct$0] = distinct;
      this[onInit$1] = onInit;
      this[onDispose$1] = onDispose;
      this[rebuildOnChange$1] = rebuildOnChange;
      this[ignoreChange$0] = ignoreChange;
      this[onWillChange$1] = onWillChange;
      this[onDidChange$1] = onDidChange;
      this[onInitialBuild$1] = onInitialBuild;
      _StoreStreamListener.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _StoreStreamListener.prototype;
    dart.addTypeTests(_StoreStreamListener);
    _StoreStreamListener.prototype[_is__StoreStreamListener_default] = true;
    dart.setMethodSignature(_StoreStreamListener, () => ({
      __proto__: dart.getMethods(_StoreStreamListener.__proto__),
      createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
    }));
    dart.setLibraryUri(_StoreStreamListener, "package:flutter_redux/flutter_redux.dart");
    dart.setFieldSignature(_StoreStreamListener, () => ({
      __proto__: dart.getFields(_StoreStreamListener.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ViewModel])),
      converter: dart.finalFieldType(dart.fnType(ViewModel, [store.Store$(S)])),
      store: dart.finalFieldType(store.Store$(S)),
      rebuildOnChange: dart.finalFieldType(core.bool),
      distinct: dart.finalFieldType(core.bool),
      onInit: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      onDispose: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(S)])),
      ignoreChange: dart.finalFieldType(dart.fnType(core.bool, [S])),
      onWillChange: dart.finalFieldType(dart.fnType(dart.void, [ViewModel])),
      onDidChange: dart.finalFieldType(dart.fnType(dart.void, [ViewModel])),
      onInitialBuild: dart.finalFieldType(dart.fnType(dart.void, [ViewModel]))
    }));
    return _StoreStreamListener;
  });
  flutter_redux._StoreStreamListener = flutter_redux._StoreStreamListener$();
  dart.addTypeTests(flutter_redux._StoreStreamListener, _is__StoreStreamListener_default);
  const _createStream = dart.privateName(flutter_redux, "_createStream");
  let C26;
  let C27;
  let C25;
  let C24;
  const _mapConverter = dart.privateName(flutter_redux, "_mapConverter");
  const _whereDistinct = dart.privateName(flutter_redux, "_whereDistinct");
  const _ignoreChange = dart.privateName(flutter_redux, "_ignoreChange");
  const _handleChange = dart.privateName(flutter_redux, "_handleChange");
  const _is__StoreStreamListenerState_default = Symbol('_is__StoreStreamListenerState_default');
  const stream = dart.privateName(flutter_redux, "_StoreStreamListenerState.stream");
  const latestValue = dart.privateName(flutter_redux, "_StoreStreamListenerState.latestValue");
  flutter_redux._StoreStreamListenerState$ = dart.generic((S, ViewModel) => {
    let StoreOfS = () => (StoreOfS = dart.constFn(store.Store$(S)))();
    let StoreOfSTovoid = () => (StoreOfSTovoid = dart.constFn(dart.fnType(dart.void, [StoreOfS()])))();
    let StoreOfSToViewModel = () => (StoreOfSToViewModel = dart.constFn(dart.fnType(ViewModel, [StoreOfS()])))();
    let _StoreStreamListenerOfS$ViewModel = () => (_StoreStreamListenerOfS$ViewModel = dart.constFn(flutter_redux._StoreStreamListener$(S, ViewModel)))();
    let STobool = () => (STobool = dart.constFn(dart.fnType(core.bool, [S])))();
    let StreamOfViewModel = () => (StreamOfViewModel = dart.constFn(async.Stream$(ViewModel)))();
    let ViewModelTovoid = () => (ViewModelTovoid = dart.constFn(dart.fnType(dart.void, [ViewModel])))();
    let StreamBuilderOfViewModel = () => (StreamBuilderOfViewModel = dart.constFn(async$.StreamBuilder$(ViewModel)))();
    let BuildContextAndViewModelToWidget = () => (BuildContextAndViewModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, ViewModel])))();
    let AsyncSnapshotOfViewModel = () => (AsyncSnapshotOfViewModel = dart.constFn(async$.AsyncSnapshot$(ViewModel)))();
    let BuildContextAndAsyncSnapshotOfViewModelToWidget = () => (BuildContextAndAsyncSnapshotOfViewModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfViewModel()])))();
    let _StreamHandlerTransformerOfViewModel$ViewModel = () => (_StreamHandlerTransformerOfViewModel$ViewModel = dart.constFn(async._StreamHandlerTransformer$(ViewModel, ViewModel)))();
    let EventSinkOfViewModel = () => (EventSinkOfViewModel = dart.constFn(async.EventSink$(ViewModel)))();
    class _StoreStreamListenerState extends framework.State$(flutter_redux._StoreStreamListener$(S, ViewModel)) {
      get stream() {
        return this[stream];
      }
      set stream(value) {
        this[stream] = StreamOfViewModel()._check(value);
      }
      get latestValue() {
        return this[latestValue];
      }
      set latestValue(value) {
        this[latestValue] = ViewModel._check(value);
      }
      initState() {
        if (StoreOfSTovoid()._check(this.widget.onInit) != null) {
          StoreOfSTovoid()._check(this.widget.onInit)(this.widget.store);
        }
        if (ViewModelTovoid()._check(this.widget.onInitialBuild) != null) {
          binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
            ViewModelTovoid()._check(this.widget.onInitialBuild)(this.latestValue);
          }, DurationToNull()));
        }
        this.latestValue = StoreOfSToViewModel()._check(this.widget.converter)(this.widget.store);
        this[_createStream]();
        super.initState();
      }
      dispose() {
        if (StoreOfSTovoid()._check(this.widget.onDispose) != null) {
          StoreOfSTovoid()._check(this.widget.onDispose)(this.widget.store);
        }
        super.dispose();
      }
      didUpdateWidget(oldWidget) {
        _StoreStreamListenerOfS$ViewModel()._check(oldWidget);
        this.latestValue = StoreOfSToViewModel()._check(this.widget.converter)(this.widget.store);
        if (!dart.equals(this.widget.store, oldWidget.store)) {
          this[_createStream]();
        }
        super.didUpdateWidget(oldWidget);
      }
      build(context) {
        return dart.test(this.widget.rebuildOnChange) ? new (StreamBuilderOfViewModel()).new({stream: this.stream, builder: dart.fn((context, snapshot) => BuildContextAndViewModelToWidget()._check(this.widget.builder)(context, this.latestValue), BuildContextAndAsyncSnapshotOfViewModelToWidget()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}) : BuildContextAndViewModelToWidget()._check(this.widget.builder)(context, this.latestValue);
      }
      [_mapConverter](state) {
        S._check(state);
        return StoreOfSToViewModel()._check(this.widget.converter)(this.widget.store);
      }
      [_whereDistinct](vm) {
        ViewModel._check(vm);
        if (dart.test(this.widget.distinct)) {
          return !dart.equals(vm, this.latestValue);
        }
        return true;
      }
      [_ignoreChange](state) {
        S._check(state);
        if (STobool()._check(this.widget.ignoreChange) != null) {
          return !dart.test(STobool()._check(this.widget.ignoreChange)(state));
        }
        return true;
      }
      [_createStream]() {
        this.stream = this.widget.store.onChange.where(dart.bind(this, _ignoreChange)).map(ViewModel, dart.bind(this, _mapConverter)).where(dart.bind(this, _whereDistinct)).transform(ViewModel, new (_StreamHandlerTransformerOfViewModel$ViewModel()).new({handleData: dart.bind(this, _handleChange)}));
      }
      [_handleChange](vm, sink) {
        ViewModel._check(vm);
        EventSinkOfViewModel()._check(sink);
        this.latestValue = vm;
        if (ViewModelTovoid()._check(this.widget.onWillChange) != null) {
          ViewModelTovoid()._check(this.widget.onWillChange)(this.latestValue);
        }
        if (ViewModelTovoid()._check(this.widget.onDidChange) != null) {
          binding.WidgetsBinding.instance.addPostFrameCallback(dart.fn(_ => {
            ViewModelTovoid()._check(this.widget.onDidChange)(this.latestValue);
          }, DurationToNull()));
        }
        sink.add(vm);
      }
    }
    (_StoreStreamListenerState.new = function() {
      this[stream] = null;
      this[latestValue] = null;
      _StoreStreamListenerState.__proto__.new.call(this);
      ;
    }).prototype = _StoreStreamListenerState.prototype;
    dart.addTypeTests(_StoreStreamListenerState);
    _StoreStreamListenerState.prototype[_is__StoreStreamListenerState_default] = true;
    dart.setMethodSignature(_StoreStreamListenerState, () => ({
      __proto__: dart.getMethods(_StoreStreamListenerState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      [_mapConverter]: dart.fnType(ViewModel, [core.Object]),
      [_whereDistinct]: dart.fnType(core.bool, [core.Object]),
      [_ignoreChange]: dart.fnType(core.bool, [core.Object]),
      [_createStream]: dart.fnType(dart.void, []),
      [_handleChange]: dart.fnType(dart.void, [core.Object, core.Object])
    }));
    dart.setLibraryUri(_StoreStreamListenerState, "package:flutter_redux/flutter_redux.dart");
    dart.setFieldSignature(_StoreStreamListenerState, () => ({
      __proto__: dart.getFields(_StoreStreamListenerState.__proto__),
      stream: dart.fieldType(async.Stream$(ViewModel)),
      latestValue: dart.fieldType(ViewModel)
    }));
    return _StoreStreamListenerState;
  });
  flutter_redux._StoreStreamListenerState = flutter_redux._StoreStreamListenerState$();
  dart.addTypeTests(flutter_redux._StoreStreamListenerState, _is__StoreStreamListenerState_default);
  const type$ = dart.privateName(flutter_redux, "StoreProviderError.type");
  flutter_redux.StoreProviderError = class StoreProviderError extends core.Error {
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    toString() {
      return "Error: No " + dart.str(this.type) + " found. To fix, please try:\n          \n  * Wrapping your MaterialApp with the StoreProvider<State>, \n  rather than an individual Route\n  * Providing full type information to your Store<State>, \n  StoreProvider<State> and StoreConnector<State, ViewModel>\n  * Ensure you are using consistent and complete imports. \n  E.g. always use `import 'package:my_app/app_state.dart';\n  \nIf none of these solutions work, please file a bug at:\nhttps://github.com/brianegan/flutter_redux/issues/new\n      ";
    }
  };
  (flutter_redux.StoreProviderError.new = function(type) {
    this[type$] = type;
    flutter_redux.StoreProviderError.__proto__.new.call(this);
    ;
  }).prototype = flutter_redux.StoreProviderError.prototype;
  dart.addTypeTests(flutter_redux.StoreProviderError);
  dart.setLibraryUri(flutter_redux.StoreProviderError, "package:flutter_redux/flutter_redux.dart");
  dart.setFieldSignature(flutter_redux.StoreProviderError, () => ({
    __proto__: dart.getFields(flutter_redux.StoreProviderError.__proto__),
    type: dart.fieldType(core.Type)
  }));
  dart.defineExtensionMethods(flutter_redux.StoreProviderError, ['toString']);
  dart.trackLibraries("packages/flutter_redux/flutter_redux", {
    "package:flutter_redux/flutter_redux.dart": flutter_redux
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_redux.dart"],"names":[],"mappings":"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","file":"flutter_redux.ddc.js"}');
  // Exports:
  return {
    flutter_redux: flutter_redux
  };
});

//# sourceMappingURL=flutter_redux.ddc.js.map
