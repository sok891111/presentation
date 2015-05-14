var app = angular.module('website', ['ngAnimate', 'ui.bootstrap']);

app.controller('MainCtrl', function ($scope, $timeout) {

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


    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
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
    $scope.slides = slides;
    $scope.slide = $scope.slides[0];
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;

});


