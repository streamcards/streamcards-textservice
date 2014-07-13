(function(angular, converter, storage) {
  'use strict';

  var STORAGE_ID = 'textservice-data';

  var app = angular.module('whiteboard', ['ngSanitize', 'ui.ace', 'rx']);

  app.controller('MainCtrl', function($scope, observeOnScope, $sce) {

    var data = JSON.parse(storage.getItem(STORAGE_ID));
    $scope.data = data || {
      html: '',
      md: '#Start typing markdown here\n\nIt will show up in the right pane as HTML.\n'
    };

    $scope.aceLoaded = function(_editor) {
      _editor.focus();
    };

    var markdownChange = observeOnScope($scope, 'data.md')
      .map(function(change) {
        return converter.makeHtml(change.newValue);
      });

    markdownChange.subscribe(function(html) {
      $scope.data.html = html;
      storage.setItem(STORAGE_ID, JSON.stringify($scope.data));
    });

  });

})(
  window.angular,
  new window.Markdown.Converter(),
  window.localStorage
);
