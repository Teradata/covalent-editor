(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/code-editor', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent['code-editor'] = {}), global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, forms, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Waits until monaco has been loaded so we can reference its global object.
     * @return {?}
     */
    function waitUntilMonacoReady() {
        /** @type {?} */
        var monacoReady$ = new rxjs.Subject();
        // create interval to check if monaco has been loaded
        /** @type {?} */
        var interval = setInterval((/**
         * @return {?}
         */
        function () {
            if (isMonacoLoaded()) {
                // clear interval when monaco has been loaded
                clearInterval(interval);
                monacoReady$.next();
                monacoReady$.complete();
            }
        }), 100);
        return monacoReady$.asObservable();
    }
    /**
     * Check if monaco has been loaded
     * @return {?}
     */
    function isMonacoLoaded() {
        return typeof ((/** @type {?} */ (window))).monaco === 'object';
    }
    /**
     * Loads monaco
     * @return {?}
     */
    function loadMonaco() {
        // check if the script tag has been created in case another code component has done this already
        if (!document.getElementById('monaco-loader-script')) {
            /** @type {?} */
            var onGotAmdLoader = (/**
             * @return {?}
             */
            function () {
                // Load monaco
                ((/** @type {?} */ (window))).require.config({ paths: { vs: 'assets/monaco/vs' } });
                ((/** @type {?} */ (window))).require(['vs/editor/editor.main'], (/**
                 * @return {?}
                 */
                function () {
                    // TODO
                }));
            });
            // Load AMD loader if necessary
            if (!((/** @type {?} */ (window))).require) {
                /** @type {?} */
                var loaderScript = document.createElement('script');
                loaderScript.id = 'monaco-loader-script';
                loaderScript.type = 'text/javascript';
                loaderScript.src = 'assets/monaco/vs/loader.js';
                loaderScript.addEventListener('load', onGotAmdLoader);
                document.body.appendChild(loaderScript);
            }
            else {
                onGotAmdLoader();
            }
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = (/**
     * @return {?}
     */
    function () {
        // empty method
    });
    var ɵ0 = noop;
    // counter for ids to allow for multiple editors on one page
    /** @type {?} */
    var uniqueCounter = 0;
    var TdCodeEditorComponent = /** @class */ (function () {
        /**
         * Set if using Electron mode when object is created
         */
        function TdCodeEditorComponent(zone, _changeDetectorRef, _elementRef) {
            this.zone = zone;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._destroy = new rxjs.Subject();
            this._widthSubject = new rxjs.Subject();
            this._heightSubject = new rxjs.Subject();
            this._editorStyle = 'width:100%;height:100%;border:1px solid grey;';
            this._appPath = '';
            this._isElectronApp = false;
            this._value = '';
            this._theme = 'vs';
            this._language = 'javascript';
            this._subject = new rxjs.Subject();
            this._editorInnerContainer = 'editorInnerContainer' + uniqueCounter++;
            this._editorNodeModuleDirOverride = '';
            this._componentInitialized = false;
            this._fromEditor = false;
            this._editorOptions = {};
            this._isFullScreen = false;
            this.initialContentChange = true;
            this._registeredLanguagesStyles = [];
            /**
             * editorInitialized: function($event)
             * Event emitted when editor is first initialized
             */
            this.editorInitialized = new core.EventEmitter();
            /**
             * editorConfigurationChanged: function($event)
             * Event emitted when editor's configuration changes
             */
            this.editorConfigurationChanged = new core.EventEmitter();
            /**
             * editorLanguageChanged: function($event)
             * Event emitted when editor's Language changes
             */
            this.editorLanguageChanged = new core.EventEmitter();
            /**
             * editorValueChange: function($event)
             * Event emitted any time something changes the editor value
             */
            this.editorValueChange = new core.EventEmitter();
            /**
             * The change event notifies you about a change happening in an input field.
             * Since the component is not a native Angular component have to specifiy the event emitter ourself
             */
            this.change = new core.EventEmitter();
            /* tslint:disable-next-line */
            this.propagateChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) { });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return noop; });
            // since accessing the window object need this check so serverside rendering doesn't fail
            if (typeof document === 'object' && !!document) {
                /* tslint:disable-next-line */
                this._isElectronApp = ((/** @type {?} */ (window)))['process'] ? true : false;
                if (this._isElectronApp) {
                    this._appPath = electron.remote.app
                        .getAppPath()
                        .split('\\')
                        .join('/');
                }
            }
        }
        Object.defineProperty(TdCodeEditorComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            /**
             * value?: string
             * Value in the Editor after async getEditorContent was called
             */
            set: /**
             * value?: string
             * Value in the Editor after async getEditorContent was called
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                // Clear any timeout that might overwrite this value set in the future
                if (this._setValueTimeout) {
                    clearTimeout(this._setValueTimeout);
                }
                this._value = value;
                if (this._componentInitialized) {
                    if (this._webview) {
                        if (this._webview.send !== undefined) {
                            // don't want to keep sending content if event came from IPC, infinite loop
                            if (!this._fromEditor) {
                                this._webview.send('setEditorContent', value);
                            }
                            this.editorValueChange.emit();
                            this.propagateChange(this._value);
                            this.change.emit();
                            this._fromEditor = false;
                        }
                        else {
                            // Editor is not loaded yet, try again in half a second
                            this._setValueTimeout = setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.value = value;
                            }), 500);
                        }
                    }
                    else {
                        if (this._editor && this._editor.setValue) {
                            // don't want to keep sending content if event came from the editor, infinite loop
                            if (!this._fromEditor) {
                                this._editor.setValue(value);
                            }
                            this.editorValueChange.emit();
                            this.propagateChange(this._value);
                            this.change.emit();
                            this._fromEditor = false;
                            this.zone.run((/**
                             * @return {?}
                             */
                            function () { return (_this._value = value); }));
                        }
                        else {
                            // Editor is not loaded yet, try again in half a second
                            this._setValueTimeout = setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.value = value;
                            }), 500);
                        }
                    }
                }
                else {
                    this._setValueTimeout = setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.value = value;
                    }), 500);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Implemented as part of ControlValueAccessor.
         */
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        TdCodeEditorComponent.prototype.writeValue = /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // do not write if null or undefined
            // tslint:disable-next-line
            if (value != undefined) {
                this.value = value;
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TdCodeEditorComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TdCodeEditorComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * getEditorContent?: function
         * Returns the content within the editor
         */
        /**
         * getEditorContent?: function
         * Returns the content within the editor
         * @return {?}
         */
        TdCodeEditorComponent.prototype.getValue = /**
         * getEditorContent?: function
         * Returns the content within the editor
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._componentInitialized) {
                if (this._webview) {
                    this._webview.send('getEditorContent');
                    return this._subject.asObservable();
                }
                else if (this._editor) {
                    this._value = this._editor.getValue();
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._subject.next(_this._value);
                        _this._subject.complete();
                        _this._subject = new rxjs.Subject();
                        _this.editorValueChange.emit();
                    }));
                    return this._subject.asObservable();
                }
            }
        };
        Object.defineProperty(TdCodeEditorComponent.prototype, "language", {
            get: /**
             * @return {?}
             */
            function () {
                return this._language;
            },
            /**
             * language?: string
             * language used in editor
             */
            set: /**
             * language?: string
             * language used in editor
             * @param {?} language
             * @return {?}
             */
            function (language) {
                var _this = this;
                this._language = language;
                if (this._componentInitialized) {
                    if (this._webview) {
                        this._webview.send('setLanguage', language);
                    }
                    else if (this._editor) {
                        /** @type {?} */
                        var currentValue = this._editor.getValue();
                        this._editor.dispose();
                        /** @type {?} */
                        var myDiv = this._editorContainer.nativeElement;
                        this._editor = monaco.editor.create(myDiv, Object.assign({
                            value: currentValue,
                            language: language,
                            theme: this._theme,
                        }, this.editorOptions));
                        this._editor.getModel().onDidChangeContent((/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
                            _this._fromEditor = true;
                            _this.writeValue(_this._editor.getValue());
                        }));
                        this.editorConfigurationChanged.emit();
                        this.editorLanguageChanged.emit();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * registerLanguage?: function
         * Registers a custom Language within the editor
         */
        /**
         * registerLanguage?: function
         * Registers a custom Language within the editor
         * @param {?} language
         * @return {?}
         */
        TdCodeEditorComponent.prototype.registerLanguage = /**
         * registerLanguage?: function
         * Registers a custom Language within the editor
         * @param {?} language
         * @return {?}
         */
        function (language) {
            var e_1, _a, e_2, _b;
            if (this._componentInitialized) {
                if (this._webview) {
                    this._webview.send('registerLanguage', language);
                }
                else if (this._editor) {
                    this._editor.dispose();
                    try {
                        for (var _c = __values(language.completionItemProvider), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var provider = _d.value;
                            /* tslint:disable-next-line */
                            provider.kind = eval(provider.kind);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    try {
                        for (var _e = __values(language.monarchTokensProvider), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var monarchTokens = _f.value;
                            /* tslint:disable-next-line */
                            monarchTokens[0] = eval(monarchTokens[0]);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    monaco.languages.register({ id: language.id });
                    monaco.languages.setMonarchTokensProvider(language.id, {
                        tokenizer: {
                            root: language.monarchTokensProvider,
                        },
                    });
                    // Define a new theme that constains only rules that match this language
                    monaco.editor.defineTheme(language.customTheme.id, language.customTheme.theme);
                    this._theme = language.customTheme.id;
                    monaco.languages.registerCompletionItemProvider(language.id, {
                        provideCompletionItems: (/**
                         * @return {?}
                         */
                        function () {
                            return language.completionItemProvider;
                        }),
                    });
                    /** @type {?} */
                    var css = document.createElement('style');
                    css.type = 'text/css';
                    css.innerHTML = language.monarchTokensProviderCSS;
                    document.body.appendChild(css);
                    this.editorConfigurationChanged.emit();
                    this._registeredLanguagesStyles = __spread(this._registeredLanguagesStyles, [css]);
                }
            }
        };
        Object.defineProperty(TdCodeEditorComponent.prototype, "editorStyle", {
            get: /**
             * @return {?}
             */
            function () {
                return this._editorStyle;
            },
            /**
             * style?: string
             * css style of the editor on the page
             */
            set: /**
             * style?: string
             * css style of the editor on the page
             * @param {?} editorStyle
             * @return {?}
             */
            function (editorStyle) {
                var _this = this;
                this._editorStyle = editorStyle;
                if (this._componentInitialized) {
                    if (this._webview) {
                        this._webview.send('setEditorStyle', { language: this._language, theme: this._theme, style: editorStyle });
                    }
                    else if (this._editor) {
                        /** @type {?} */
                        var containerDiv = this._editorContainer.nativeElement;
                        containerDiv.setAttribute('style', editorStyle);
                        /** @type {?} */
                        var currentValue = this._editor.getValue();
                        this._editor.dispose();
                        /** @type {?} */
                        var myDiv = this._editorContainer.nativeElement;
                        this._editor = monaco.editor.create(myDiv, Object.assign({
                            value: currentValue,
                            language: this._language,
                            theme: this._theme,
                        }, this.editorOptions));
                        this._editor.getModel().onDidChangeContent((/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
                            _this._fromEditor = true;
                            _this.writeValue(_this._editor.getValue());
                        }));
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdCodeEditorComponent.prototype, "theme", {
            get: /**
             * @return {?}
             */
            function () {
                return this._theme;
            },
            /**
             * theme?: string
             * Theme to be applied to editor
             */
            set: /**
             * theme?: string
             * Theme to be applied to editor
             * @param {?} theme
             * @return {?}
             */
            function (theme) {
                this._theme = theme;
                if (this._componentInitialized) {
                    if (this._webview) {
                        this._webview.send('setEditorOptions', { theme: theme });
                    }
                    else if (this._editor) {
                        this._editor.updateOptions({ theme: theme });
                        this.editorConfigurationChanged.emit();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdCodeEditorComponent.prototype, "fullScreenKeyBinding", {
            get: /**
             * @return {?}
             */
            function () {
                return this._keycode;
            },
            /**
             * fullScreenKeyBinding?: number
             * See here for key bindings https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html
             * Sets the KeyCode for shortcutting to Fullscreen mode
             */
            set: /**
             * fullScreenKeyBinding?: number
             * See here for key bindings https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html
             * Sets the KeyCode for shortcutting to Fullscreen mode
             * @param {?} keycode
             * @return {?}
             */
            function (keycode) {
                this._keycode = keycode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdCodeEditorComponent.prototype, "editorOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._editorOptions;
            },
            /**
             * editorOptions?: object
             * Options used on editor instantiation. Available options listed here:
             * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
             */
            set: /**
             * editorOptions?: object
             * Options used on editor instantiation. Available options listed here:
             * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
             * @param {?} editorOptions
             * @return {?}
             */
            function (editorOptions) {
                this._editorOptions = editorOptions;
                if (this._componentInitialized) {
                    if (this._webview) {
                        this._webview.send('setEditorOptions', editorOptions);
                    }
                    else if (this._editor) {
                        this._editor.updateOptions(editorOptions);
                        this.editorConfigurationChanged.emit();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * layout method that calls layout method of editor and instructs the editor to remeasure its container
         */
        /**
         * layout method that calls layout method of editor and instructs the editor to remeasure its container
         * @return {?}
         */
        TdCodeEditorComponent.prototype.layout = /**
         * layout method that calls layout method of editor and instructs the editor to remeasure its container
         * @return {?}
         */
        function () {
            if (this._componentInitialized) {
                if (this._webview) {
                    this._webview.send('layout');
                }
                else if (this._editor) {
                    this._editor.layout();
                }
            }
        };
        Object.defineProperty(TdCodeEditorComponent.prototype, "isElectronApp", {
            /**
             * Returns if in Electron mode or not
             */
            get: /**
             * Returns if in Electron mode or not
             * @return {?}
             */
            function () {
                return this._isElectronApp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdCodeEditorComponent.prototype, "isFullScreen", {
            /**
             * Returns if in Full Screen Mode or not
             */
            get: /**
             * Returns if in Full Screen Mode or not
             * @return {?}
             */
            function () {
                return this._isFullScreen;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * setEditorNodeModuleDirOverride function that overrides where to look
         * for the editor node_module. Used in tests for Electron or anywhere that the
         * node_modules are not in the expected location.
         */
        /**
         * setEditorNodeModuleDirOverride function that overrides where to look
         * for the editor node_module. Used in tests for Electron or anywhere that the
         * node_modules are not in the expected location.
         * @param {?} dirOverride
         * @return {?}
         */
        TdCodeEditorComponent.prototype.setEditorNodeModuleDirOverride = /**
         * setEditorNodeModuleDirOverride function that overrides where to look
         * for the editor node_module. Used in tests for Electron or anywhere that the
         * node_modules are not in the expected location.
         * @param {?} dirOverride
         * @return {?}
         */
        function (dirOverride) {
            this._editorNodeModuleDirOverride = dirOverride;
            this._appPath = dirOverride;
        };
        /**
         * ngOnInit only used for Electron version of editor
         * This is where the webview is created to sandbox away the editor
         */
        /**
         * ngOnInit only used for Electron version of editor
         * This is where the webview is created to sandbox away the editor
         * @return {?}
         */
        TdCodeEditorComponent.prototype.ngOnInit = /**
         * ngOnInit only used for Electron version of editor
         * This is where the webview is created to sandbox away the editor
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var editorHTML = '';
            if (this._isElectronApp) {
                editorHTML = "<!DOCTYPE html>\n            <html style=\"height:100%\">\n            <head>\n                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n                <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" >\n                <link rel=\"stylesheet\" data-name=\"vs/editor/editor.main\"\n                    href=\"file://" + this._editorNodeModuleDirOverride + "/assets/monaco/vs/editor/editor.main.css\">\n            </head>\n            <body style=\"height:100%;width: 100%;margin: 0;padding: 0;overflow: hidden;\">\n            <div id=\"" + this._editorInnerContainer + "\" style=\"width:100%;height:100%;" + this._editorStyle + "\"></div>\n            <script>\n                // Get the ipcRenderer of electron for communication\n                const {ipcRenderer} = require('electron');\n            </script>\n            <script src=\"file://" + this._editorNodeModuleDirOverride + "/assets/monaco/vs/loader.js\"></script>\n            <script>\n                var editor;\n                var theme = '" + this._theme + "';\n                var value = '" + this._value + "';\n                var registeredLanguagesStyles = [];\n\n                require.config({\n                    baseUrl: '" + this._appPath + "/assets/monaco'\n                });\n                self.module = undefined;\n                self.process.browser = true;\n\n                require(['vs/editor/editor.main'], function() {\n                    editor = monaco.editor.create(document.getElementById('" + this._editorInnerContainer + "'), Object.assign({\n                        value: value,\n                        language: '" + this.language + "',\n                        theme: '" + this._theme + "',\n                    }, " + JSON.stringify(this.editorOptions) + "));\n                    editor.getModel().onDidChangeContent( (e)=> {\n                        ipcRenderer.sendToHost(\"onEditorContentChange\", editor.getValue());\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'fullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [" + this._keycode + "],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('" + this._editorInnerContainer + "');\n                        editorDiv.webkitRequestFullscreen();\n                      }\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'exitfullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Exit Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [9],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('" + this._editorInnerContainer + "');\n                        document.webkitExitFullscreen();\n                      }\n                    });\n                    ipcRenderer.sendToHost(\"editorInitialized\", this._editor);\n                });\n\n                // return back the value in the editor to the mainview\n                ipcRenderer.on('getEditorContent', function(){\n                    ipcRenderer.sendToHost(\"editorContent\", editor.getValue());\n                });\n\n                // set the value of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorContent', function(event, data){\n                    value = data;\n                    editor.setValue(data);\n                });\n\n                // set the style of the editor container div\n                ipcRenderer.on('setEditorStyle', function(event, data){\n                    var editorDiv = document.getElementById('" + this._editorInnerContainer + "');\n                    editorDiv.style = data.style;\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('" + this._editorInnerContainer + "'), Object.assign({\n                        value: currentValue,\n                        language: data.language,\n                        theme: data.theme,\n                    }, " + JSON.stringify(this.editorOptions) + "));\n                });\n\n                // set the options of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorOptions', function(event, data){\n                    editor.updateOptions(data);\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                });\n\n                // set the language of the editor from what was sent from the mainview\n                ipcRenderer.on('setLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('" + this._editorInnerContainer + "'), Object.assign({\n                        value: currentValue,\n                        language: data,\n                        theme: theme,\n                    }, " + JSON.stringify(this.editorOptions) + "));\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                    ipcRenderer.sendToHost(\"editorLanguageChanged\", '');\n                });\n\n                // register a new language with editor\n                ipcRenderer.on('registerLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n\n                    for (var i = 0; i < data.completionItemProvider.length; i++) {\n                        var provider = data.completionItemProvider[i];\n                        provider.kind = eval(provider.kind);\n                    }\n                    for (var i = 0; i < data.monarchTokensProvider.length; i++) {\n                        var monarchTokens = data.monarchTokensProvider[i];\n                        monarchTokens[0] = eval(monarchTokens[0]);\n                    }\n                    monaco.languages.register({ id: data.id });\n\n                    monaco.languages.setMonarchTokensProvider(data.id, {\n                        tokenizer: {\n                            root: data.monarchTokensProvider\n                        }\n                    });\n\n                    // Define a new theme that constains only rules that match this language\n                    monaco.editor.defineTheme(data.customTheme.id, data.customTheme.theme);\n                    theme = data.customTheme.id;\n\n                    monaco.languages.registerCompletionItemProvider(data.id, {\n                        provideCompletionItems: () => {\n                            return data.completionItemProvider\n                        }\n                    });\n\n                    var css = document.createElement(\"style\");\n                    css.type = \"text/css\";\n                    css.innerHTML = data.monarchTokensProviderCSS;\n                    document.body.appendChild(css);\n                    registeredLanguagesStyles = [...registeredLanguagesStyles, css];\n\n\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                });\n\n                // Instruct the editor to remeasure its container\n                ipcRenderer.on('layout', function(){\n                    editor.layout();\n                });\n\n                // Instruct the editor go to full screen mode\n                ipcRenderer.on('showFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('" + this._editorInnerContainer + "');\n                  editorDiv.webkitRequestFullscreen();\n                });\n\n                // Instruct the editor exit full screen mode\n                ipcRenderer.on('exitFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('" + this._editorInnerContainer + "');\n                  editorDiv.webkitExitFullscreen();\n                });\n\n                ipcRenderer.on('dispose', function(){\n                  editor.dispose();\n                  registeredLanguagesStyles.forEach((style) => style.remove());\n                });\n\n                // need to manually resize the editor any time the window size\n                // changes. See: https://github.com/Microsoft/monaco-editor/issues/28\n                window.addEventListener(\"resize\", function resizeEditor() {\n                    editor.layout();\n                });\n            </script>\n            </body>\n            </html>";
                // dynamically create the Electron Webview Element
                // this will sandbox the monaco code into its own DOM and its own
                // javascript instance. Need to do this to avoid problems with monaco
                // using AMD Requires and Electron using Node Requires
                // see https://github.com/Microsoft/monaco-editor/issues/90
                this._webview = document.createElement('webview');
                this._webview.setAttribute('nodeintegration', 'true');
                this._webview.setAttribute('disablewebsecurity', 'true');
                // take the html content for the webview and base64 encode it and use as the src tag
                this._webview.setAttribute('src', 'data:text/html;base64,' + window.btoa(editorHTML));
                this._webview.setAttribute('style', 'display:inline-flex; width:100%; height:100%');
                // to debug:
                //  this._webview.addEventListener('dom-ready', () => {
                //     this._webview.openDevTools();
                //  });
                // Process the data from the webview
                this._webview.addEventListener('ipc-message', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (event.channel === 'editorContent') {
                        _this._fromEditor = true;
                        _this.writeValue(event.args[0]);
                        _this._subject.next(_this._value);
                        _this._subject.complete();
                        _this._subject = new rxjs.Subject();
                    }
                    else if (event.channel === 'onEditorContentChange') {
                        _this._fromEditor = true;
                        _this.writeValue(event.args[0]);
                        if (_this.initialContentChange) {
                            _this.initialContentChange = false;
                            _this.layout();
                        }
                    }
                    else if (event.channel === 'editorInitialized') {
                        _this._componentInitialized = true;
                        _this._editorProxy = _this.wrapEditorCalls(_this._editor);
                        _this.editorInitialized.emit(_this._editorProxy);
                    }
                    else if (event.channel === 'editorConfigurationChanged') {
                        _this.editorConfigurationChanged.emit();
                    }
                    else if (event.channel === 'editorLanguageChanged') {
                        _this.editorLanguageChanged.emit();
                    }
                }));
                // append the webview to the DOM
                this._editorContainer.nativeElement.appendChild(this._webview);
            }
        };
        /**
         * ngAfterViewInit only used for browser version of editor
         * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
         */
        /**
         * ngAfterViewInit only used for browser version of editor
         * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
         * @return {?}
         */
        TdCodeEditorComponent.prototype.ngAfterViewInit = /**
         * ngAfterViewInit only used for browser version of editor
         * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._isElectronApp) {
                loadMonaco();
                waitUntilMonacoReady()
                    .pipe(operators.takeUntil(this._destroy))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.initMonaco();
                }));
            }
            rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(100)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._heightSubject.asObservable().pipe(operators.distinctUntilChanged()))
                .pipe(operators.takeUntil(this._destroy), operators.debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.layout();
                _this._changeDetectorRef.markForCheck();
            }));
            rxjs.timer(500, 250)
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._elementRef && _this._elementRef.nativeElement) {
                    _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                    _this._heightSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().height);
                }
            }));
        };
        /**
         * @return {?}
         */
        TdCodeEditorComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._changeDetectorRef.detach();
            this._registeredLanguagesStyles.forEach((/**
             * @param {?} style
             * @return {?}
             */
            function (style) { return style.remove(); }));
            if (this._webview) {
                this._webview.send('dispose');
            }
            else if (this._editor) {
                this._editor.dispose();
            }
            this._destroy.next(true);
            this._destroy.unsubscribe();
        };
        /**
         * showFullScreenEditor request for full screen of Code Editor based on its browser type.
         */
        /**
         * showFullScreenEditor request for full screen of Code Editor based on its browser type.
         * @return {?}
         */
        TdCodeEditorComponent.prototype.showFullScreenEditor = /**
         * showFullScreenEditor request for full screen of Code Editor based on its browser type.
         * @return {?}
         */
        function () {
            var e_3, _a;
            if (this._componentInitialized) {
                if (this._webview) {
                    this._webview.send('showFullScreenEditor');
                }
                else {
                    /** @type {?} */
                    var codeEditorElement_1 = (/** @type {?} */ (this._editorContainer.nativeElement));
                    /** @type {?} */
                    var fullScreenMap = {
                        // Chrome
                        requestFullscreen: (/**
                         * @return {?}
                         */
                        function () { return codeEditorElement_1.requestFullscreen(); }),
                        // Safari
                        webkitRequestFullscreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (codeEditorElement_1))).webkitRequestFullscreen(); }),
                        // IE
                        msRequestFullscreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (codeEditorElement_1))).msRequestFullscreen(); }),
                        // Firefox
                        mozRequestFullScreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (codeEditorElement_1))).mozRequestFullScreen(); }),
                    };
                    try {
                        for (var _b = __values(Object.keys(fullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var handler = _c.value;
                            if (codeEditorElement_1[handler]) {
                                fullScreenMap[handler]();
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            this._isFullScreen = true;
        };
        /**
         * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
         */
        /**
         * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
         * @return {?}
         */
        TdCodeEditorComponent.prototype.exitFullScreenEditor = /**
         * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
         * @return {?}
         */
        function () {
            var e_4, _a;
            if (this._componentInitialized) {
                if (this._webview) {
                    this._webview.send('exitFullScreenEditor');
                }
                else {
                    /** @type {?} */
                    var exitFullScreenMap = {
                        // Chrome
                        exitFullscreen: (/**
                         * @return {?}
                         */
                        function () { return document.exitFullscreen(); }),
                        // Safari
                        webkitExitFullscreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (document))).webkitExitFullscreen(); }),
                        // Firefox
                        mozCancelFullScreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (document))).mozCancelFullScreen(); }),
                        // IE
                        msExitFullscreen: (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (document))).msExitFullscreen(); }),
                    };
                    try {
                        for (var _b = __values(Object.keys(exitFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var handler = _c.value;
                            if (document[handler]) {
                                exitFullScreenMap[handler]();
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            this._isFullScreen = false;
        };
        /**
         * addFullScreenModeCommand used to add the fullscreen option to the context menu
         */
        /**
         * addFullScreenModeCommand used to add the fullscreen option to the context menu
         * @private
         * @return {?}
         */
        TdCodeEditorComponent.prototype.addFullScreenModeCommand = /**
         * addFullScreenModeCommand used to add the fullscreen option to the context menu
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._editor.addAction({
                // An unique identifier of the contributed action.
                id: 'fullScreen',
                // A label of the action that will be presented to the user.
                label: 'Full Screen',
                // An optional array of keybindings for the action.
                contextMenuGroupId: 'navigation',
                keybindings: this._keycode,
                contextMenuOrder: 1.5,
                // Method that will be executed when the action is triggered.
                // @param editor The editor instance is passed in as a convinience
                run: (/**
                 * @param {?} ed
                 * @return {?}
                 */
                function (ed) {
                    _this.showFullScreenEditor();
                }),
            });
        };
        /**
         * wrapEditorCalls used to proxy all the calls to the monaco editor
         * For calls for Electron use this to call the editor inside the webview
         */
        /**
         * wrapEditorCalls used to proxy all the calls to the monaco editor
         * For calls for Electron use this to call the editor inside the webview
         * @private
         * @param {?} obj
         * @return {?}
         */
        TdCodeEditorComponent.prototype.wrapEditorCalls = /**
         * wrapEditorCalls used to proxy all the calls to the monaco editor
         * For calls for Electron use this to call the editor inside the webview
         * @private
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var that = this;
            /** @type {?} */
            var handler = {
                get: /**
                 * @param {?} target
                 * @param {?} propKey
                 * @param {?} receiver
                 * @return {?}
                 */
                function (target, propKey, receiver) {
                    var _this = this;
                    return (/**
                     * @param {...?} args
                     * @return {?}
                     */
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(_this, void 0, void 0, function () {
                            var executeJavaScript, origMethod, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!that._componentInitialized) return [3 /*break*/, 3];
                                        if (!that._webview) return [3 /*break*/, 1];
                                        executeJavaScript = (/**
                                         * @param {?} code
                                         * @return {?}
                                         */
                                        function (code) {
                                            return new Promise((/**
                                             * @param {?} resolve
                                             * @return {?}
                                             */
                                            function (resolve) {
                                                that._webview.executeJavaScript(code, resolve);
                                            }));
                                        });
                                        return [2 /*return*/, executeJavaScript('editor.' + propKey + '(' + args + ')')];
                                    case 1:
                                        origMethod = target[propKey];
                                        return [4 /*yield*/, origMethod.apply(that._editor, args)];
                                    case 2:
                                        result = _a.sent();
                                        // since running javascript code manually need to force Angular to detect changes
                                        setTimeout((/**
                                         * @return {?}
                                         */
                                        function () {
                                            that.zone.run((/**
                                             * @return {?}
                                             */
                                            function () {
                                                // tslint:disable-next-line
                                                if (!that._changeDetectorRef['destroyed']) {
                                                    that._changeDetectorRef.detectChanges();
                                                }
                                            }));
                                        }));
                                        return [2 /*return*/, result];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    });
                },
            };
            return new Proxy(obj, handler);
        };
        /**
         * initMonaco method creates the monaco editor into the @ViewChild('editorContainer')
         * and emit the editorInitialized event.  This is only used in the browser version.
         */
        /**
         * initMonaco method creates the monaco editor into the \@ViewChild('editorContainer')
         * and emit the editorInitialized event.  This is only used in the browser version.
         * @private
         * @return {?}
         */
        TdCodeEditorComponent.prototype.initMonaco = /**
         * initMonaco method creates the monaco editor into the \@ViewChild('editorContainer')
         * and emit the editorInitialized event.  This is only used in the browser version.
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var containerDiv = this._editorContainer.nativeElement;
            containerDiv.id = this._editorInnerContainer;
            this._editor = monaco.editor.create(containerDiv, Object.assign({
                value: this._value,
                language: this.language,
                theme: this._theme,
            }, this.editorOptions));
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._editorProxy = _this.wrapEditorCalls(_this._editor);
                _this._componentInitialized = true;
                _this.editorInitialized.emit(_this._editorProxy);
            }));
            this._editor.getModel().onDidChangeContent((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this._fromEditor = true;
                _this.writeValue(_this._editor.getValue());
                if (_this.initialContentChange) {
                    _this.initialContentChange = false;
                    _this.layout();
                }
            }));
            this.addFullScreenModeCommand();
        };
        TdCodeEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-code-editor',
                        template: "<div class=\"editorContainer\" #editorContainer></div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdCodeEditorComponent; })),
                                multi: true,
                            },
                        ],
                        styles: [":host{display:block;position:relative}:host .editorContainer{position:absolute;top:0;bottom:0;left:0;right:0}::ng-deep .monaco-aria-container{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdCodeEditorComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        TdCodeEditorComponent.propDecorators = {
            _editorContainer: [{ type: core.ViewChild, args: ['editorContainer', { static: true },] }],
            editorInitialized: [{ type: core.Output }],
            editorConfigurationChanged: [{ type: core.Output }],
            editorLanguageChanged: [{ type: core.Output }],
            editorValueChange: [{ type: core.Output }],
            change: [{ type: core.Output }],
            value: [{ type: core.Input, args: ['value',] }],
            language: [{ type: core.Input, args: ['language',] }],
            editorStyle: [{ type: core.Input, args: ['editorStyle',] }],
            theme: [{ type: core.Input, args: ['theme',] }],
            fullScreenKeyBinding: [{ type: core.Input, args: ['fullScreenKeyBinding',] }],
            editorOptions: [{ type: core.Input, args: ['editorOptions',] }]
        };
        return TdCodeEditorComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._destroy;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._heightSubject;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editorStyle;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._appPath;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._isElectronApp;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._webview;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._value;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._theme;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._language;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._subject;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editorInnerContainer;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editorNodeModuleDirOverride;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editor;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editorProxy;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._componentInitialized;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._fromEditor;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._editorOptions;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._isFullScreen;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._keycode;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._setValueTimeout;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype.initialContentChange;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._registeredLanguagesStyles;
        /** @type {?} */
        TdCodeEditorComponent.prototype._editorContainer;
        /**
         * editorInitialized: function($event)
         * Event emitted when editor is first initialized
         * @type {?}
         */
        TdCodeEditorComponent.prototype.editorInitialized;
        /**
         * editorConfigurationChanged: function($event)
         * Event emitted when editor's configuration changes
         * @type {?}
         */
        TdCodeEditorComponent.prototype.editorConfigurationChanged;
        /**
         * editorLanguageChanged: function($event)
         * Event emitted when editor's Language changes
         * @type {?}
         */
        TdCodeEditorComponent.prototype.editorLanguageChanged;
        /**
         * editorValueChange: function($event)
         * Event emitted any time something changes the editor value
         * @type {?}
         */
        TdCodeEditorComponent.prototype.editorValueChange;
        /**
         * The change event notifies you about a change happening in an input field.
         * Since the component is not a native Angular component have to specifiy the event emitter ourself
         * @type {?}
         */
        TdCodeEditorComponent.prototype.change;
        /** @type {?} */
        TdCodeEditorComponent.prototype.propagateChange;
        /** @type {?} */
        TdCodeEditorComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype.zone;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdCodeEditorComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentCodeEditorModule = /** @class */ (function () {
        function CovalentCodeEditorModule() {
        }
        CovalentCodeEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TdCodeEditorComponent],
                        exports: [TdCodeEditorComponent],
                        bootstrap: [TdCodeEditorComponent],
                    },] }
        ];
        return CovalentCodeEditorModule;
    }());

    exports.CovalentCodeEditorModule = CovalentCodeEditorModule;
    exports.TdCodeEditorComponent = TdCodeEditorComponent;
    exports.isMonacoLoaded = isMonacoLoaded;
    exports.loadMonaco = loadMonaco;
    exports.waitUntilMonacoReady = waitUntilMonacoReady;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-code-editor.umd.js.map