/*global angular*/
'use strict';
/**
 * @ngdoc overview
 * @name ngInheritanceApp
 * @description
 * # ngInheritanceApp
 *
 * Main module of the application.
 */


var namespace = {};
namespace.ngInherit = {};
namespace.ngInherit.app =
    angular
    .module('ngInheritanceApp', [
        'com.ni.widgets',
        'com.ni.widgets.deux'
    ]);
 