/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/line-chart/line-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../src/common/area.component';
import * as import9 from '../common/area.component.ngfactory';
import * as import10 from '../../../src/line-chart/line.component';
import * as import11 from './line.component.ngfactory';
import * as import12 from '@angular/core/src/linker/element_ref';
export class Wrapper_LineSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LineSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.LineSeriesComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_xScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.xScale = currValue;
      this._changes['xScale'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_yScale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.yScale = currValue;
      this._changes['yScale'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._changes['color'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_scaleType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.scaleType = currValue;
      this._changes['scaleType'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_curve(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.curve = currValue;
      this._changes['curve'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_LineSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_LineSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.LineSeriesComponent>;
  _LineSeriesComponent_0_3:Wrapper_LineSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LineSeriesComponent_Host0,renderType_LineSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'lineSeries',''),rootSelector,(null as any));
    this.compView_0 = new View_LineSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._LineSeriesComponent_0_3 = new Wrapper_LineSeriesComponent();
    this.compView_0.create(this._LineSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._LineSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LineSeriesComponent) && (0 === requestNodeIndex))) { return this._LineSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._LineSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LineSeriesComponentNgFactory:import7.ComponentFactory<import0.LineSeriesComponent> = new import7.ComponentFactory<import0.LineSeriesComponent>('g[lineSeries]',View_LineSeriesComponent_Host0,import0.LineSeriesComponent);
const styles_LineSeriesComponent:any[] = ([] as any[]);
var renderType_LineSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_LineSeriesComponent,{});
export class View_LineSeriesComponent0 extends import2.AppView<import0.LineSeriesComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import2.AppView<import8.AreaComponent>;
  _AreaComponent_1_3:import9.Wrapper_AreaComponent;
  _text_2:any;
  _el_3:any;
  compView_3:import2.AppView<import10.LineComponent>;
  _LineComponent_3_3:import11.Wrapper_LineComponent;
  _text_4:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LineSeriesComponent0,renderType_LineSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',new import3.InlineArray4(4,'area','','class','line-highlight'),(null as any));
    this.compView_1 = new import9.View_AreaComponent0(this.viewUtils,this,1,this._el_1);
    this._AreaComponent_1_3 = new import9.Wrapper_AreaComponent(new import12.ElementRef(this._el_1));
    this.compView_1.create(this._AreaComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',new import3.InlineArray4(4,'class','line-series','line',''),(null as any));
    this.compView_3 = new import11.View_LineComponent0(this.viewUtils,this,3,this._el_3);
    this._LineComponent_3_3 = new import11.Wrapper_LineComponent(new import12.ElementRef(this._el_3));
    this.compView_3.create(this._LineComponent_3_3.context);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.AreaComponent) && (1 === requestNodeIndex))) { return this._AreaComponent_1_3.context; }
    if (((token === import10.LineComponent) && (3 === requestNodeIndex))) { return this._LineComponent_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.data;
    this._AreaComponent_1_3.check_data(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.areaPath;
    this._AreaComponent_1_3.check_path(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.color;
    this._AreaComponent_1_3.check_fill(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = 0.25;
    this._AreaComponent_1_3.check_opacity(currVal_1_0_3,throwOnChange,false);
    const currVal_1_0_4:any = 0;
    this._AreaComponent_1_3.check_startOpacity(currVal_1_0_4,throwOnChange,false);
    const currVal_1_0_5:any = true;
    this._AreaComponent_1_3.check_gradient(currVal_1_0_5,throwOnChange,false);
    if (this._AreaComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_3_0_0:any = this.context.path;
    this._LineComponent_3_3.check_path(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.color;
    this._LineComponent_3_3.check_stroke(currVal_3_0_1,throwOnChange,false);
    const currVal_3_0_2:any = this.context.data;
    this._LineComponent_3_3.check_data(currVal_3_0_2,throwOnChange,false);
    if (this._LineComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange)) { this.compView_3.markAsCheckOnce(); }
    const currVal_9:any = this.context.isActive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_1,'active',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.isInactive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_1,'inactive',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.context.isActive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_3,'active',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this.context.isInactive(this.context.data);
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_3,'inactive',currVal_12);
      this._expr_12 = currVal_12;
    }
    this.compView_1.detectChanges(throwOnChange);
    this.compView_3.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_3.destroy();
    this._AreaComponent_1_3.ngOnDestroy();
    this._LineComponent_3_3.ngOnDestroy();
  }
}