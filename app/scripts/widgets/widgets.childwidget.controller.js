/*global angular, ChildWidget, $controller, console, BaseWidget */

angular
    .module('com.ni.widgets')
    .controller('ChildWidget', ChildWidget);

function ChildWidget($controller, $scope) {
    'use strict';
    var viewModel = this,
        base,
        clickMe,
        prop;
    BaseWidget.call(viewModel, $controller, $scope);
    viewModel.width = 1234;
}