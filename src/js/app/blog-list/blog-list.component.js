"use strict";

angular.module("blogList").component("blogList", {
  //note that the name of the component will be formatted to kebob case
  template:
    "<div class='new-class' ><h1>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
  //template does not need ng-controller="BlogListController" anymore
  controller: function($scope) {
    console.log("hello");
    $scope.title = "this is andrews angular app";
    $scope.clicks = 0;
    $scope.someClickTest = function() {
      console.log("Clicking the button");
      $scope.clicks += 1;
      $scope.title = "Clicked! " + $scope.clicks + " times";
    };
  }
});
