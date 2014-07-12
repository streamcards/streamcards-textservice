(function(angular, converter) {
  'use strict';

  var app = angular.module('whiteboard', ['ngSanitize', 'ui.ace', 'rx']);

  app.controller('MainCtrl', function($scope, observeOnScope, $sce) {

    $scope.data = {
      html: '',
      md: ''
    };
    $scope.data.md = "#Start typing markdown here\n\nIt will show up in the right pane as HTML.\n";

    $scope.aceLoaded = function(_editor) {
      _editor.focus();
    };

    var markdownChange = observeOnScope($scope, 'data.md')
      .map(function(change) {
        return converter.makeHtml(change.newValue);
      });

    markdownChange.subscribe(function(html) {
      $scope.data.html = html;
    });

  });

})(
  window.angular,
  new window.Markdown.Converter()
);
