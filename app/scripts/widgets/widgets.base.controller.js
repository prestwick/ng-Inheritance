/*global angular, BaseWidget, console*/

angular
    .module('com.ni.widgets')
    .controller('BaseWidget', BaseWidget, ['$scope']);

function BaseWidget($scope) {
    'use strict';
    var viewModel = this,
        doSomething,
        count = 0;
    viewModel.label = 'fooBar';
    viewModel.randomProp = "this is my next property";
    viewModel.doSomething = function doSomething() {
        console.log("I did something base");
        viewModel.label = viewModel.label + count;
        count += 1;
    };
}