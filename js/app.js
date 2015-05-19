var app = angular.module('website', ['ngAnimate', 'ui.bootstrap']);

app.controller('MainCtrl', function ($scope, $timeout) {

    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slideCnt - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slideCnt - 1;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $scope.moveSlide = function(keyCode){
        if(keyCode == 39)
           $scope.prevSlide();
        if(keyCode == 37)
           $scope.nextSlide();
    }

    $scope.testText ="Hello, Javascript";
    $scope.currentIndex = 0;
    $scope.slideCnt = 0;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;
});



app.directive('slides', function () {
    return {
        restrict:'AE',
        scope: false,
        transclude: true,
        template: '<div class="animate-show" ng-show="isCurrentSlideIndex({{slideCnt}})"><div ng-transclude></div>',
        link:function (scope, element, attr) {
          scope.slideCnt++
        }
    }
});

