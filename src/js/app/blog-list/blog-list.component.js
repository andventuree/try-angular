"use strict";

angular.module("blogList").controller("BlogListController", function($scope) {
  console.log("hello");
  $scope.title = "this is andrews angular app";
  $scope.clicks = 0;
  $scope.someClickTest = function() {
    console.log("Clicking the button");
    $scope.clicks += 1;
    $scope.title = "Clicked! " + $scope.clicks + " times";
  };
});
//.component('blogList')
