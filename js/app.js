var app = angular.module('website', ['ngAnimate', 'ui.bootstrap']);

app.controller('MainCtrl', function ($scope, $timeout) {

<<<<<<< HEAD
=======
    var slides =  
        [ { name: 'template1.html', url: 'slides/slide1.html'},
          { name: 'template2.html', url: 'slides/slide2.html'},
          { name: 'template3.html', url: 'slides/slide3.html'},
          { name: 'template4.html', url: 'slides/slide4.html'},
          { name: 'template5.html', url: 'slides/slide5.html'},
          { name: 'template6.html', url: 'slides/slide6.html'},
          { name: 'template7.html', url: 'slides/slide7.html'},
          { name: 'template8.html', url: 'slides/slide8.html'},
          { name: 'template9.html', url: 'slides/slide9.html'} ];


>>>>>>> 93d864a17e844a9c33a32f9e94824c2f34a8e66e
    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    $scope.prevSlide = function () {
<<<<<<< HEAD
        $scope.currentIndex = ($scope.currentIndex < $scope.slideCnt - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slideCnt - 1;
=======
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
>>>>>>> 93d864a17e844a9c33a32f9e94824c2f34a8e66e
    };

    $scope.moveSlide = function(keyCode){
        if(keyCode == 39)
           $scope.prevSlide();
        if(keyCode == 37)
           $scope.nextSlide();
    }

    $scope.testText ="Hello, Javascript";
    $scope.currentIndex = 0;
<<<<<<< HEAD
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

=======
    $scope.slides = slides;
    $scope.slide = $scope.slides[0];
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;

});


>>>>>>> 93d864a17e844a9c33a32f9e94824c2f34a8e66e
