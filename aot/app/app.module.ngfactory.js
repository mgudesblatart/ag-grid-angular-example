/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from 'ag-grid-ng2/lib/aggrid.module';
import * as import6 from '../../app/ratio.module';
import * as import7 from '../../app/clickable.module';
import * as import8 from '@angular/forms/src/directives';
import * as import9 from '@angular/forms/src/form_providers';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from 'ag-grid-ng2/lib/ng2ComponentFactory';
import * as import24 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
import * as import26 from './square.component.ngfactory';
import * as import27 from './cube.component.ngfactory';
import * as import28 from './params.component.ngfactory';
import * as import29 from './ratio.parent.component.ngfactory';
import * as import30 from './clickable.parent.component.ngfactory';
import * as import31 from './numeric-editor.component.ngfactory';
import * as import32 from './mood-editor.component.ngfactory';
import * as import33 from './mood-renderer.component.ngfactory';
import * as import34 from './styled-renderer.component.ngfactory';
import * as import35 from './name-age-renderer.component.ngfactory';
import * as import36 from './medal-renderer.component.ngfactory';
import * as import37 from './partial-match-filter.component.ngfactory';
import * as import38 from './app.component.ngfactory';
import * as import39 from '@angular/core/src/application_tokens';
import * as import40 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import41 from '@angular/platform-browser/src/dom/events/key_events';
import * as import42 from '@angular/core/src/zone/ng_zone';
import * as import43 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import44 from '@angular/core/src/console';
import * as import45 from '@angular/core/src/i18n/tokens';
import * as import46 from '@angular/core/src/error_handler';
import * as import47 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import48 from '@angular/platform-browser/src/dom/animation_driver';
import * as import49 from '@angular/core/src/render/api';
import * as import50 from '@angular/core/src/security';
import * as import51 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import52 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import53 from 'ag-grid-ng2/lib/baseComponentFactory';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import26.SquareComponentNgFactory,
            import27.CubeComponentNgFactory,
            import28.ParamsComponentNgFactory,
            import29.RatioParentComponentNgFactory,
            import30.ClickableParentComponentNgFactory,
            import31.NumericEditorComponentNgFactory,
            import32.MoodEditorComponentNgFactory,
            import33.MoodRendererComponentNgFactory,
            import34.StyledComponentNgFactory,
            import35.NameAndAgeRendererComponentNgFactory,
            import36.MedalRendererComponentNgFactory,
            import37.PartialMatchFilterComponentNgFactory,
            import38.AppComponentNgFactory
        ], [import38.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_9", {
        get: function () {
            if ((this.__LOCALE_ID_9 == null)) {
                (this.__LOCALE_ID_9 = 'en-US');
            }
            return this.__LOCALE_ID_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_10", {
        get: function () {
            if ((this.__NgLocalization_10 == null)) {
                (this.__NgLocalization_10 = new import10.NgLocaleLocalization(this._LOCALE_ID_9));
            }
            return this.__NgLocalization_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_15", {
        get: function () {
            if ((this.__ApplicationRef_15 == null)) {
                (this.__ApplicationRef_15 = this._ApplicationRef__14);
            }
            return this.__ApplicationRef_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_16", {
        get: function () {
            if ((this.__Compiler_16 == null)) {
                (this.__Compiler_16 = new import14.Compiler());
            }
            return this.__Compiler_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_17", {
        get: function () {
            if ((this.__APP_ID_17 == null)) {
                (this.__APP_ID_17 = import39._appIdRandomProviderFactory());
            }
            return this.__APP_ID_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_18", {
        get: function () {
            if ((this.__DOCUMENT_18 == null)) {
                (this.__DOCUMENT_18 = import4._document());
            }
            return this.__DOCUMENT_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_19", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_19 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_19 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_20", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_20 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_20 = [
                    new import40.DomEventsPlugin(),
                    new import41.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_19)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_21", {
        get: function () {
            if ((this.__EventManager_21 == null)) {
                (this.__EventManager_21 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_20, this.parent.get(import42.NgZone)));
            }
            return this.__EventManager_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_22", {
        get: function () {
            if ((this.__DomSharedStylesHost_22 == null)) {
                (this.__DomSharedStylesHost_22 = new import17.DomSharedStylesHost(this._DOCUMENT_18));
            }
            return this.__DomSharedStylesHost_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_23", {
        get: function () {
            if ((this.__AnimationDriver_23 == null)) {
                (this.__AnimationDriver_23 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_24", {
        get: function () {
            if ((this.__DomRootRenderer_24 == null)) {
                (this.__DomRootRenderer_24 = new import18.DomRootRenderer_(this._DOCUMENT_18, this._EventManager_21, this._DomSharedStylesHost_22, this._AnimationDriver_23));
            }
            return this.__DomRootRenderer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_25", {
        get: function () {
            if ((this.__RootRenderer_25 == null)) {
                (this.__RootRenderer_25 = import43._createConditionalRootRenderer(this._DomRootRenderer_24, this.parent.get(import43.NgProbeToken, null)));
            }
            return this.__RootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_26", {
        get: function () {
            if ((this.__DomSanitizer_26 == null)) {
                (this.__DomSanitizer_26 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_27", {
        get: function () {
            if ((this.__Sanitizer_27 == null)) {
                (this.__Sanitizer_27 = this._DomSanitizer_26);
            }
            return this.__Sanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_28", {
        get: function () {
            if ((this.__ViewUtils_28 == null)) {
                (this.__ViewUtils_28 = new import20.ViewUtils(this._RootRenderer_25, this._APP_ID_17, this._Sanitizer_27));
            }
            return this.__ViewUtils_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_29", {
        get: function () {
            if ((this.__IterableDiffers_29 == null)) {
                (this.__IterableDiffers_29 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_30", {
        get: function () {
            if ((this.__KeyValueDiffers_30 == null)) {
                (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_31", {
        get: function () {
            if ((this.__SharedStylesHost_31 == null)) {
                (this.__SharedStylesHost_31 = this._DomSharedStylesHost_22);
            }
            return this.__SharedStylesHost_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_32", {
        get: function () {
            if ((this.__Title_32 == null)) {
                (this.__Title_32 = new import21.Title());
            }
            return this.__Title_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_33", {
        get: function () {
            if ((this.__RadioControlRegistry_33 == null)) {
                (this.__RadioControlRegistry_33 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Ng2ComponentFactory_34", {
        get: function () {
            if ((this.__Ng2ComponentFactory_34 == null)) {
                (this.__Ng2ComponentFactory_34 = new import23.Ng2ComponentFactory(this));
            }
            return this.__Ng2ComponentFactory_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BaseComponentFactory_35", {
        get: function () {
            if ((this.__BaseComponentFactory_35 == null)) {
                (this.__BaseComponentFactory_35 = this._Ng2ComponentFactory_34);
            }
            return this.__BaseComponentFactory_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Ng2FrameworkFactory_36", {
        get: function () {
            if ((this.__Ng2FrameworkFactory_36 == null)) {
                (this.__Ng2FrameworkFactory_36 = new import24.Ng2FrameworkFactory(this._BaseComponentFactory_35));
            }
            return this.__Ng2FrameworkFactory_36;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._AgGridModule_3 = new import5.AgGridModule();
        this._RatioModule_4 = new import6.RatioModule();
        this._ClickableModule_5 = new import7.ClickableModule();
        this._InternalFormsSharedModule_6 = new import8.InternalFormsSharedModule();
        this._FormsModule_7 = new import9.FormsModule();
        this._AppModule_8 = new import1.AppModule();
        this._ErrorHandler_11 = import4.errorHandler();
        this._ApplicationInitStatus_12 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER, null));
        this._Testability_13 = new import12.Testability(this.parent.get(import42.NgZone));
        this._ApplicationRef__14 = new import13.ApplicationRef_(this.parent.get(import42.NgZone), this.parent.get(import44.Console), this, this._ErrorHandler_11, this, this._ApplicationInitStatus_12, this.parent.get(import12.TestabilityRegistry, null), this._Testability_13);
        return this._AppModule_8;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.AgGridModule)) {
            return this._AgGridModule_3;
        }
        if ((token === import6.RatioModule)) {
            return this._RatioModule_4;
        }
        if ((token === import7.ClickableModule)) {
            return this._ClickableModule_5;
        }
        if ((token === import8.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_6;
        }
        if ((token === import9.FormsModule)) {
            return this._FormsModule_7;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_8;
        }
        if ((token === import45.LOCALE_ID)) {
            return this._LOCALE_ID_9;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import46.ErrorHandler)) {
            return this._ErrorHandler_11;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_12;
        }
        if ((token === import12.Testability)) {
            return this._Testability_13;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__14;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_15;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_16;
        }
        if ((token === import39.APP_ID)) {
            return this._APP_ID_17;
        }
        if ((token === import47.DOCUMENT)) {
            return this._DOCUMENT_18;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_19;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_20;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_21;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_22;
        }
        if ((token === import48.AnimationDriver)) {
            return this._AnimationDriver_23;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_24;
        }
        if ((token === import49.RootRenderer)) {
            return this._RootRenderer_25;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_26;
        }
        if ((token === import50.Sanitizer)) {
            return this._Sanitizer_27;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_28;
        }
        if ((token === import51.IterableDiffers)) {
            return this._IterableDiffers_29;
        }
        if ((token === import52.KeyValueDiffers)) {
            return this._KeyValueDiffers_30;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_31;
        }
        if ((token === import21.Title)) {
            return this._Title_32;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_33;
        }
        if ((token === import23.Ng2ComponentFactory)) {
            return this._Ng2ComponentFactory_34;
        }
        if ((token === import53.BaseComponentFactory)) {
            return this._BaseComponentFactory_35;
        }
        if ((token === import24.Ng2FrameworkFactory)) {
            return this._Ng2FrameworkFactory_36;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__14.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map