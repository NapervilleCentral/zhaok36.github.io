define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const auto_size_text = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $clamp = dartx.clamp;
  const $toDouble = dartx.toDouble;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $keys = dartx.keys;
  const $toList = dartx.toList;
  const $remove = dartx.remove;
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let LinkedMapOf_AutoSizeTextState$double = () => (LinkedMapOf_AutoSizeTextState$double = dart.constFn(_js_helper.LinkedMap$(auto_size_text._AutoSizeTextState, core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 9,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 9,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticsLabel",
        [_Location_column]: 9,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 16,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 9,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticsLabel",
        [_Location_column]: 9,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart"
      });
    }
  });
  const data$ = dart.privateName(auto_size_text, "AutoSizeText.data");
  const textSpan$ = dart.privateName(auto_size_text, "AutoSizeText.textSpan");
  const style$ = dart.privateName(auto_size_text, "AutoSizeText.style");
  const minFontSize$ = dart.privateName(auto_size_text, "AutoSizeText.minFontSize");
  const maxFontSize$ = dart.privateName(auto_size_text, "AutoSizeText.maxFontSize");
  const stepGranularity$ = dart.privateName(auto_size_text, "AutoSizeText.stepGranularity");
  const presetFontSizes$ = dart.privateName(auto_size_text, "AutoSizeText.presetFontSizes");
  const group$ = dart.privateName(auto_size_text, "AutoSizeText.group");
  const textAlign$ = dart.privateName(auto_size_text, "AutoSizeText.textAlign");
  const textDirection$ = dart.privateName(auto_size_text, "AutoSizeText.textDirection");
  const locale$ = dart.privateName(auto_size_text, "AutoSizeText.locale");
  const softWrap$ = dart.privateName(auto_size_text, "AutoSizeText.softWrap");
  const overflow$ = dart.privateName(auto_size_text, "AutoSizeText.overflow");
  const textScaleFactor$ = dart.privateName(auto_size_text, "AutoSizeText.textScaleFactor");
  const maxLines$ = dart.privateName(auto_size_text, "AutoSizeText.maxLines");
  const semanticsLabel$ = dart.privateName(auto_size_text, "AutoSizeText.semanticsLabel");
  auto_size_text.AutoSizeText = class AutoSizeText extends framework.StatefulWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get textSpan() {
      return this[textSpan$];
    }
    set textSpan(value) {
      super.textSpan = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get minFontSize() {
      return this[minFontSize$];
    }
    set minFontSize(value) {
      super.minFontSize = value;
    }
    get maxFontSize() {
      return this[maxFontSize$];
    }
    set maxFontSize(value) {
      super.maxFontSize = value;
    }
    get stepGranularity() {
      return this[stepGranularity$];
    }
    set stepGranularity(value) {
      super.stepGranularity = value;
    }
    get presetFontSizes() {
      return this[presetFontSizes$];
    }
    set presetFontSizes(value) {
      super.presetFontSizes = value;
    }
    get group() {
      return this[group$];
    }
    set group(value) {
      super.group = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get softWrap() {
      return this[softWrap$];
    }
    set softWrap(value) {
      super.softWrap = value;
    }
    get overflow() {
      return this[overflow$];
    }
    set overflow(value) {
      super.overflow = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    createState() {
      return new auto_size_text._AutoSizeTextState.new();
    }
  };
  (auto_size_text.AutoSizeText.new = function(data, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let minFontSize = opts && 'minFontSize' in opts ? opts.minFontSize : 12;
    let maxFontSize = opts && 'maxFontSize' in opts ? opts.maxFontSize : null;
    let stepGranularity = opts && 'stepGranularity' in opts ? opts.stepGranularity : 1;
    let presetFontSizes = opts && 'presetFontSizes' in opts ? opts.presetFontSizes : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : null;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[style$] = style;
    this[minFontSize$] = minFontSize;
    this[maxFontSize$] = maxFontSize;
    this[stepGranularity$] = stepGranularity;
    this[presetFontSizes$] = presetFontSizes;
    this[group$] = group;
    this[textAlign$] = textAlign;
    this[textDirection$] = textDirection;
    this[locale$] = locale;
    this[softWrap$] = softWrap;
    this[overflow$] = overflow;
    this[textScaleFactor$] = textScaleFactor;
    this[maxLines$] = maxLines;
    this[semanticsLabel$] = semanticsLabel;
    if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 49, 16, "data != null");
    if (!(dart.notNull(stepGranularity) >= 0.1)) dart.assertFailed(null, "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 50, 16, "stepGranularity >= 0.1");
    this[textSpan$] = null;
    auto_size_text.AutoSizeText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auto_size_text.AutoSizeText.prototype;
  (auto_size_text.AutoSizeText.rich = function(textSpan, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let minFontSize = opts && 'minFontSize' in opts ? opts.minFontSize : 12;
    let maxFontSize = opts && 'maxFontSize' in opts ? opts.maxFontSize : null;
    let stepGranularity = opts && 'stepGranularity' in opts ? opts.stepGranularity : 1;
    let presetFontSizes = opts && 'presetFontSizes' in opts ? opts.presetFontSizes : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : null;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[textSpan$] = textSpan;
    this[style$] = style;
    this[minFontSize$] = minFontSize;
    this[maxFontSize$] = maxFontSize;
    this[stepGranularity$] = stepGranularity;
    this[presetFontSizes$] = presetFontSizes;
    this[group$] = group;
    this[textAlign$] = textAlign;
    this[textDirection$] = textDirection;
    this[locale$] = locale;
    this[softWrap$] = softWrap;
    this[overflow$] = overflow;
    this[textScaleFactor$] = textScaleFactor;
    this[maxLines$] = maxLines;
    this[semanticsLabel$] = semanticsLabel;
    if (!(textSpan != null)) dart.assertFailed(null, "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 72, 16, "textSpan != null");
    if (!(dart.notNull(stepGranularity) >= 0.1)) dart.assertFailed(null, "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 73, 16, "stepGranularity >= 0.1");
    this[data$] = null;
    auto_size_text.AutoSizeText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auto_size_text.AutoSizeText.prototype;
  dart.addTypeTests(auto_size_text.AutoSizeText);
  dart.setMethodSignature(auto_size_text.AutoSizeText, () => ({
    __proto__: dart.getMethods(auto_size_text.AutoSizeText.__proto__),
    createState: dart.fnType(auto_size_text._AutoSizeTextState, [])
  }));
  dart.setLibraryUri(auto_size_text.AutoSizeText, "package:dad_jokes/auto_size_text.dart");
  dart.setFieldSignature(auto_size_text.AutoSizeText, () => ({
    __proto__: dart.getFields(auto_size_text.AutoSizeText.__proto__),
    data: dart.finalFieldType(core.String),
    textSpan: dart.finalFieldType(text_span.TextSpan),
    style: dart.finalFieldType(text_style.TextStyle),
    minFontSize: dart.finalFieldType(core.double),
    maxFontSize: dart.finalFieldType(core.double),
    stepGranularity: dart.finalFieldType(core.double),
    presetFontSizes: dart.finalFieldType(core.List$(core.double)),
    group: dart.finalFieldType(auto_size_text.AutoSizeGroup),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textDirection: dart.finalFieldType(ui.TextDirection),
    locale: dart.finalFieldType(ui.Locale),
    softWrap: dart.finalFieldType(core.bool),
    overflow: dart.finalFieldType(paragraph.TextOverflow),
    textScaleFactor: dart.finalFieldType(core.double),
    maxLines: dart.finalFieldType(core.int),
    semanticsLabel: dart.finalFieldType(core.String)
  }));
  const _previousFontSize = dart.privateName(auto_size_text, "_previousFontSize");
  const _cachedText = dart.privateName(auto_size_text, "_cachedText");
  const _cachedFontSize = dart.privateName(auto_size_text, "_cachedFontSize");
  const _register = dart.privateName(auto_size_text, "_register");
  const _calculateFontSize = dart.privateName(auto_size_text, "_calculateFontSize");
  const _updateFontSize = dart.privateName(auto_size_text, "_updateFontSize");
  const _fontSize = dart.privateName(auto_size_text, "_fontSize");
  const _buildText = dart.privateName(auto_size_text, "_buildText");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C4;
  let C3;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C16;
  let C15;
  const _notifySync = dart.privateName(auto_size_text, "_notifySync");
  const _remove = dart.privateName(auto_size_text, "_remove");
  auto_size_text._AutoSizeTextState = class _AutoSizeTextState extends framework.State$(auto_size_text.AutoSizeText) {
    initState() {
      super.initState();
      if (this.widget.group != null) {
        this.widget.group[_register](this);
      }
    }
    didUpdateWidget(oldWidget) {
      auto_size_text.AutoSizeText._check(oldWidget);
      this[_cachedText] = null;
      super.didUpdateWidget(oldWidget);
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, size) => {
          let defaultTextStyle = text$.DefaultTextStyle.of(context);
          let style = this.widget.style;
          if (this.widget.style == null || dart.test(this.widget.style.inherit)) {
            style = defaultTextStyle.style.merge(this.widget.style);
          }
          let fontSize = this[_calculateFontSize](size, style, defaultTextStyle);
          let text = null;
          if (this.widget.group != null) {
            if (fontSize != this[_previousFontSize]) {
              this.widget.group[_updateFontSize](this, fontSize);
            }
            text = this[_buildText](this.widget.group[_fontSize], style);
          } else {
            text = this[_buildText](fontSize, style);
          }
          this[_previousFontSize] = fontSize;
          return text;
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_calculateFontSize](size, style, defaultStyle) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let userScale = (t0 = this.widget.textScaleFactor, t0 == null ? media_query.MediaQuery.textScaleFactorOf(this.context) : t0);
      let minFontSize = (t0$ = this.widget.minFontSize, t0$ == null ? 0.0 : t0$);
      if (!(dart.notNull(minFontSize) >= 0)) dart.assertFailed("MinFontSize has to be greater than or equal to 0.", "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 254, 9, "minFontSize >= 0");
      let maxFontSize = (t0$0 = this.widget.maxFontSize, t0$0 == null ? 1 / 0 : t0$0);
      if (!(dart.notNull(maxFontSize) > 0)) dart.assertFailed("MaxFontSize has to be greater than 0.", "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 257, 12, "maxFontSize > 0");
      if (!(dart.notNull(minFontSize) <= dart.notNull(maxFontSize))) dart.assertFailed("MinFontSize has to be smaller or equal than maxFontSize.", "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 259, 12, "minFontSize <= maxFontSize");
      let maxLines = (t0$1 = this.widget.maxLines, t0$1 == null ? defaultStyle.maxLines : t0$1);
      let presetIndex = 0;
      if (this.widget.presetFontSizes != null) {
        if (!dart.test(this.widget.presetFontSizes[$isNotEmpty])) dart.assertFailed("PresetFontSizes is empty.", "org-dartlang-app:///packages/dad_jokes/auto_size_text.dart", 266, 14, "widget.presetFontSizes.isNotEmpty");
      }
      let initialFontSize = null;
      if (this.widget.presetFontSizes == null) {
        let current = style.fontSize;
        initialFontSize = current[$clamp](minFontSize, maxFontSize)[$toDouble]();
      } else {
        initialFontSize = this.widget.presetFontSizes[$_get]((t0$2 = presetIndex, presetIndex = t0$2 + 1, t0$2));
      }
      let fontSize = dart.notNull(initialFontSize) * dart.notNull(userScale);
      let span = new text_span.TextSpan.new({style: (t0$4 = (t0$3 = this.widget.textSpan, t0$3 == null ? null : t0$3.style), t0$4 == null ? style : t0$4), text: (t0$6 = (t0$5 = this.widget.textSpan, t0$5 == null ? null : t0$5.text), t0$6 == null ? this.widget.data : t0$6), children: (t0$7 = this.widget.textSpan, t0$7 == null ? null : t0$7.children), recognizer: (t0$8 = this.widget.textSpan, t0$8 == null ? null : t0$8.recognizer)});
      while (!dart.test(auto_size_text.checkTextFits(span, this.widget.locale, fontSize / dart.notNull(style.fontSize), maxLines, size.maxWidth, size.maxHeight))) {
        if (this.widget.presetFontSizes == null) {
          let newFontSize = fontSize - dart.notNull(this.widget.stepGranularity);
          if (newFontSize < dart.notNull(minFontSize) * dart.notNull(userScale)) break;
          fontSize = newFontSize;
        } else if (presetIndex < dart.notNull(this.widget.presetFontSizes[$length])) {
          fontSize = dart.notNull(this.widget.presetFontSizes[$_get]((t0$9 = presetIndex, presetIndex = t0$9 + 1, t0$9))) * dart.notNull(userScale);
        } else {
          break;
        }
      }
      return fontSize;
    }
    [_buildText](fontSize, style) {
      if (this[_cachedText] != null && this[_cachedFontSize] == fontSize) {
        return this[_cachedText];
      }
      let text = null;
      if (this.widget.data != null) {
        text = new text$.Text.new(this.widget.data, {style: style.copyWith({fontSize: fontSize}), textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, locale: this.widget.locale, softWrap: this.widget.softWrap, overflow: this.widget.overflow, textScaleFactor: 1.0, maxLines: this.widget.maxLines, semanticsLabel: this.widget.semanticsLabel, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      } else {
        text = new text$.Text.rich(this.widget.textSpan, {style: style, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, locale: this.widget.locale, softWrap: this.widget.softWrap, overflow: this.widget.overflow, textScaleFactor: dart.notNull(fontSize) / dart.notNull(style.fontSize), maxLines: this.widget.maxLines, semanticsLabel: this.widget.semanticsLabel, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
      }
      this[_cachedText] = text;
      this[_cachedFontSize] = fontSize;
      return text;
    }
    [_notifySync]() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    dispose() {
      if (this.widget.group != null) {
        this.widget.group[_remove](this);
      }
      super.dispose();
    }
  };
  (auto_size_text._AutoSizeTextState.new = function() {
    this[_previousFontSize] = null;
    this[_cachedText] = null;
    this[_cachedFontSize] = null;
    auto_size_text._AutoSizeTextState.__proto__.new.call(this);
    ;
  }).prototype = auto_size_text._AutoSizeTextState.prototype;
  dart.addTypeTests(auto_size_text._AutoSizeTextState);
  dart.setMethodSignature(auto_size_text._AutoSizeTextState, () => ({
    __proto__: dart.getMethods(auto_size_text._AutoSizeTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_calculateFontSize]: dart.fnType(core.double, [box.BoxConstraints, text_style.TextStyle, text$.DefaultTextStyle]),
    [_buildText]: dart.fnType(framework.Widget, [core.double, text_style.TextStyle]),
    [_notifySync]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(auto_size_text._AutoSizeTextState, "package:dad_jokes/auto_size_text.dart");
  dart.setFieldSignature(auto_size_text._AutoSizeTextState, () => ({
    __proto__: dart.getFields(auto_size_text._AutoSizeTextState.__proto__),
    [_previousFontSize]: dart.fieldType(core.double),
    [_cachedText]: dart.fieldType(text$.Text),
    [_cachedFontSize]: dart.fieldType(core.double)
  }));
  const _listeners = dart.privateName(auto_size_text, "_listeners");
  const _widgetsNotified = dart.privateName(auto_size_text, "_widgetsNotified");
  const _notifyListeners = dart.privateName(auto_size_text, "_notifyListeners");
  auto_size_text.AutoSizeGroup = class AutoSizeGroup extends core.Object {
    [_register](text) {
      this[_listeners][$_set](text, 1 / 0);
    }
    [_updateFontSize](text, maxFontSize) {
      let oldFontSize = this[_fontSize];
      if (dart.notNull(maxFontSize) <= dart.notNull(this[_fontSize])) {
        this[_fontSize] = maxFontSize;
        this[_listeners][$_set](text, maxFontSize);
      } else if (this[_listeners][$_get](text) == this[_fontSize]) {
        this[_listeners][$_set](text, maxFontSize);
        this[_fontSize] = 1 / 0;
        for (let size of this[_listeners][$values]) {
          if (dart.notNull(size) < dart.notNull(this[_fontSize])) this[_fontSize] = size;
        }
      } else {
        this[_listeners][$_set](text, maxFontSize);
      }
      if (oldFontSize != this[_fontSize]) {
        this[_widgetsNotified] = false;
        this[_notifyListeners]();
      }
    }
    [_notifyListeners]() {
      if (dart.test(this[_widgetsNotified])) {
        return;
      } else {
        this[_widgetsNotified] = true;
      }
      for (let text of this[_listeners][$keys][$toList]()) {
        if (dart.test(text.mounted)) {
          text[_notifySync]();
        } else {
          this[_listeners][$remove](text);
        }
      }
    }
    [_remove](text) {
      this[_updateFontSize](text, 1 / 0);
      this[_listeners][$remove](text);
    }
  };
  (auto_size_text.AutoSizeGroup.new = function() {
    this[_listeners] = new (LinkedMapOf_AutoSizeTextState$double()).new();
    this[_widgetsNotified] = false;
    this[_fontSize] = 1 / 0;
    ;
  }).prototype = auto_size_text.AutoSizeGroup.prototype;
  dart.addTypeTests(auto_size_text.AutoSizeGroup);
  dart.setMethodSignature(auto_size_text.AutoSizeGroup, () => ({
    __proto__: dart.getMethods(auto_size_text.AutoSizeGroup.__proto__),
    [_register]: dart.fnType(dart.void, [auto_size_text._AutoSizeTextState]),
    [_updateFontSize]: dart.fnType(dart.void, [auto_size_text._AutoSizeTextState, core.double]),
    [_notifyListeners]: dart.fnType(dart.void, []),
    [_remove]: dart.fnType(dart.void, [auto_size_text._AutoSizeTextState])
  }));
  dart.setLibraryUri(auto_size_text.AutoSizeGroup, "package:dad_jokes/auto_size_text.dart");
  dart.setFieldSignature(auto_size_text.AutoSizeGroup, () => ({
    __proto__: dart.getFields(auto_size_text.AutoSizeGroup.__proto__),
    [_listeners]: dart.finalFieldType(core.Map$(auto_size_text._AutoSizeTextState, core.double)),
    [_widgetsNotified]: dart.fieldType(core.bool),
    [_fontSize]: dart.fieldType(core.double)
  }));
  auto_size_text.checkTextFits = function checkTextFits(text, locale, scale, maxLines, maxWidth, maxHeight) {
    let t0, t0$;
    let tp = (t0$ = new text_painter.TextPainter.new({text: text, textAlign: ui.TextAlign.left, textDirection: ui.TextDirection.ltr, textScaleFactor: (t0 = scale, t0 == null ? 1.0 : t0), maxLines: maxLines, locale: locale}), t0$.layout({maxWidth: maxWidth}), t0$);
    return !(dart.test(tp.didExceedMaxLines) || dart.notNull(tp.height) > dart.notNull(maxHeight) || dart.notNull(tp.width) > dart.notNull(maxWidth));
  };
  dart.trackLibraries("packages/dad_jokes/auto_size_text", {
    "package:dad_jokes/auto_size_text.dart": auto_size_text
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auto_size_text.dart"],"names":[],"mappings":"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","file":"auto_size_text.ddc.js"}');
  // Exports:
  return {
    auto_size_text: auto_size_text
  };
});

//# sourceMappingURL=auto_size_text.ddc.js.map
