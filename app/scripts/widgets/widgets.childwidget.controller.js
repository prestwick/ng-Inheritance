/*global angular, ChildWidget, $controller, console, BaseWidget */

angular
    .module('com.ni.widgets')
    .controller('com.ni.widgets.ChildWidget', ChildWidget);


//ChildWidget.$inject = ['$controller', '$scope'];

function ChildWidget($controller, $scope) {
    'use strict';
    var viewModel = this,
        base,
        clickMe,
        prop;
    BaseWidget.call(viewModel, $controller, $scope);
    viewModel.width = 1234;
}