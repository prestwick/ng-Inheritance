/*global angular, ChildWidget, $controller, console, namespace */

angular
    .module('com.ni.widgets.deux')
    .controller('ChildWidgetDeux', namespace.ngInherit.widgets.ChildWidgetDeux);

namespace.ngInherit.widgets.ChildWidgetDeux = function ChildWidgetDeux() {
    'use strict';
    var viewModel = this;
    viewModel.width = 4321;
    viewModel.label = 'MyNewLabelDeux';
};

namespace.ngInherit.widgets.ChildWidgetDeux.prototype = new namespace.ngInherit.widgets.BaseWidgetDeux();
