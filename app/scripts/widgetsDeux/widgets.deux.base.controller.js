/*global angular, BaseWidgetDeux, console, namespace*/

    
angular
    .module('com.ni.widgets.deux')
    .controller('namespace.ngInherit.widgets.BaseWidgetDeux', namespace.ngInherit.widgets.BaseWidgetDeux);

namespace.ngInherit.widgets.BaseWidgetDeux = function BaseWidgetDeux() {
    'use strict';
    var viewModel = this,
        count = 0;
    viewModel.label = 'fooBarDeux';
    viewModel.randomProp = "this is my next property deux";
    viewModel.doSomething = function doSomething() {
        console.log("I did something base deux");
        this.label = this.label + count;
        count += 1;
    };
};