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
import * as import0 from '../../app/clickable.parent.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './clickable.component.ngfactory';
import * as import11 from '../../app/clickable.component';
export var Wrapper_ClickableParentComponent = (function () {
    function Wrapper_ClickableParentComponent() {
        this.changed = false;
        this.context = new import0.ClickableParentComponent();
    }
    Wrapper_ClickableParentComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_ClickableParentComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ClickableParentComponent;
}());
var renderType_ClickableParentComponent_Host = null;
var _View_ClickableParentComponent_Host0 = (function (_super) {
    __extends(_View_ClickableParentComponent_Host0, _super);
    function _View_ClickableParentComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ClickableParentComponent_Host0, renderType_ClickableParentComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ClickableParentComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'clickable-cell', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ClickableParentComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ClickableParentComponent_0_4 = new Wrapper_ClickableParentComponent();
        this._appEl_0.initComponent(this._ClickableParentComponent_0_4.context, [], compView_0);
        compView_0.create(this._ClickableParentComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ClickableParentComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ClickableParentComponent) && (0 === requestNodeIndex))) {
            return this._ClickableParentComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ClickableParentComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ClickableParentComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ClickableParentComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ClickableParentComponent_Host0;
}(import1.AppView));
function viewFactory_ClickableParentComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ClickableParentComponent_Host === null)) {
        (renderType_ClickableParentComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ClickableParentComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ClickableParentComponentNgFactory = new import9.ComponentFactory('clickable-cell', viewFactory_ClickableParentComponent_Host0, import0.ClickableParentComponent);
var styles_ClickableParentComponent = [];
var renderType_ClickableParentComponent = null;
var _View_ClickableParentComponent0 = (function (_super) {
    __extends(_View_ClickableParentComponent0, _super);
    function _View_ClickableParentComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ClickableParentComponent0, renderType_ClickableParentComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ClickableParentComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'ag-clickable', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_1 = new import3.AppElement(1, null, this, this._el_1);
        var compView_1 = import10.viewFactory_ClickableComponent0(this.viewUtils, this.injector(1), this._appEl_1);
        this._ClickableComponent_1_4 = new import10.Wrapper_ClickableComponent();
        this._appEl_1.initComponent(this._ClickableComponent_1_4.context, [], compView_1);
        compView_1.create(this._ClickableComponent_1_4.context, [], null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'onClicked', this.eventHandler(this._handle_onClicked_1_0.bind(this)));
        var subscription_0 = this._ClickableComponent_1_4.context.onClicked.subscribe(this.eventHandler(this._handle_onClicked_1_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2
        ], [disposable_0], [subscription_0]);
        return null;
    };
    _View_ClickableParentComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.ClickableComponent) && (1 === requestNodeIndex))) {
            return this._ClickableComponent_1_4.context;
        }
        return notFoundResult;
    };
    _View_ClickableParentComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.context.cell;
        this._ClickableComponent_1_4.check_cell(currVal_1_0_0, throwOnChange, false);
        this._ClickableComponent_1_4.detectChangesInInputProps(this, this._el_1, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ClickableComponent_1_4.detectChangesInHostProps(this, this._el_1, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ClickableParentComponent0.prototype._handle_onClicked_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.context.clicked($event) !== false);
        return (true && pd_1_0);
    };
    return _View_ClickableParentComponent0;
}(import1.AppView));
export function viewFactory_ClickableParentComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ClickableParentComponent === null)) {
        (renderType_ClickableParentComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ClickableParentComponent, {}));
    }
    return new _View_ClickableParentComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=clickable.parent.component.ngfactory.js.map