var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop']);
var content_path = "http://actionitems.changemyworldnow.com/noseyknows";
//var content_path = "";


// configure our routes
moduleGame.config(function ($routeProvider) {

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: '/home.html',
            controller: 'mainController'
        })
        // route for the home page
        .when('/video', {
            templateUrl: '/video.html',
            controller: 'videoController'
        })

        // route for the step page
        .when('/step', {
            templateUrl: '/step.html',
            controller: 'stepController'
        })
    .otherwise({
        redirectTo: '/'
    });

});

// create the controller and inject Angular's $scope
moduleGame.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.teplate = ['/home.html', '/video.html', '/step.html']
});
moduleGame.controller('videoController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

moduleGame.controller('stepController', function ($scope, $http, $sce, $window, $rootScope) {
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }
    $scope.data = [
    {
        'name': "Lion",
        'mainImageUrl': content_path + "/content/_assets/elements/_Lion/lion_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Lion/nose_1.png",
                'nose2': content_path + "/content/_assets/elements/_Lion/nose_2.png",
                'nose3': content_path + "/content/_assets/elements/_Lion/nose_3.png",
                'correct': "1"
            }
        ],
        'text': "Female lions are better at <br/> hunting than males!"
    }, {
        'name': "Sloth",
        'mainImageUrl': content_path + "/content/_assets/elements/_Three Toe Sloth/sloth_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Three Toe Sloth/nose_6.png",
                'nose2': content_path + "/content/_assets/elements/_Three Toe Sloth/nose_7.png",
                'nose3': content_path + "/content/_assets/elements/_Three Toe Sloth/nose_8.png",
                'correct': "1"
            }
        ],
        'text': "<b>Say Cheese!</b><br/> The way the Three Toed Sloth’s <br/>  mouth is shaped makes it look <br/>  like it’s always smiling!"
    }, {
        'name': "Wolf",
        'mainImageUrl': content_path + "/content/_assets/elements/_Wolf/wolf_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Wolf/nose_10.png",
                'nose2': content_path + "/content/_assets/elements/_Wolf/nose_11.png",
                'nose3': content_path + "/content/_assets/elements/_Wolf/nose_9.png",
                'correct': "2"
            }
        ],
        'text': "Wolves have been found in <br/> more places on earth than <br/> any other mammals <br/> except humans!"
    }, {
        'name': "Elephant",
        'mainImageUrl': content_path + "/content/_assets/elements/_Elephant/elephant_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Elephant/nose_12.png",
                'nose2': content_path + "/content/_assets/elements/_Elephant/nose_13.png",
                'nose3': content_path + "/content/_assets/elements/_Elephant/nose_14.png",
                'correct': "2"
            }
        ],
        'text': "Elephants are the biggest <br/> land mammals on earth!"
    }, {
        'name': "Komodo",
        'mainImageUrl': content_path + "/content/_assets/elements/_Komodo Dragon/komodo_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Komodo Dragon/nose_15.png",
                'nose2': content_path + "/content/_assets/elements/_Komodo Dragon/nose_16.png",
                'nose3': content_path + "/content/_assets/elements/_Komodo Dragon/nose_17.png",
                'correct': "1"
            }
        ],
        'text': "The Komodo Dragon <br/> is the largest living lizard <br/> in the world!"
    }, {
        'name': "Pig",
        'mainImageUrl': content_path + "/content/_assets/elements/_Pig/pig_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Pig/nose_19.png",
                'nose2': content_path + "/content/_assets/elements/_Pig/nose_18.png",
                'nose3': content_path + "/content/_assets/elements/_Pig/nose_20.png",
                'correct': "2"
            }
        ],
        'text': "Pigs are the fourth smartest <br/> animals on the planet!"
    }, {
        'name': "Gorilla",
        'mainImageUrl': content_path + "/content/_assets/elements/_Gorilla/gorilla_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Gorilla/nose_23.png",
                'nose2': content_path + "/content/_assets/elements/_Gorilla/nose_22.png",
                'nose3': content_path + "/content/_assets/elements/_Gorilla/nose_21.png",
                'correct': "3"
            }
        ],
        'text': "Gorillas are really smart. <br/> At least one gorilla learned <br/> human sign language!"
    }, {
        'name': "Mule",
        'mainImageUrl': content_path + "/content/_assets/elements/_Mule/mule_nose.png",
        'noseImages': [
            {
                'nose1': content_path + "/content/_assets/elements/_Mule/nose_25.png",
                'nose2': content_path + "/content/_assets/elements/_Mule/nose_24.png",
                'nose3': content_path + "/content/_assets/elements/_Mule/nose_26.png",
                'correct': "2"
            }
        ],
        'text': " A mule is the offspring of <br/> a male donkey and <br/> a female horse. <br/> The mule cannot reproduce."
    }
    ]

    $scope.onDrag = function (e) {
         angular.element(e.target).addClass("dragstarted");
        if ($(angular.element(e.target)).hasClass('incorrect')) {
       
            $(angular.element(e.target).parents()).siblings().find('.correct.dragstarted').removeClass('dragstarted')
        }
    };

    $scope.onDrop = function (e) {
        var parrentSlide = angular.element(e.target);
        parrentSlide.addClass('done');
        var parrentSlideId = parrentSlide.parents().eq(2).get(0).id
        if ($('#' + parrentSlideId + ' .dragstarted').hasClass('correct')) {

            parrentSlide.find(".correct-ansver").css('z-index', '10');
            $(' .arrows-inctive').css('z-index', '0');
            setTimeout(function () { $(' #step .slider .next').fadeIn(500); }, 500);
            $('#incorrect').get(0).pause();
            $('#incorrect').get(0).currentTime = 0;
            $('#correct').get(0).pause();
            $('#correct').get(0).currentTime = 0;
            $('#correct').get(0).play();
        }
        else if ($('#' + parrentSlideId + ' .dragstarted').hasClass('incorrect')) {
            $('#correct').get(0).pause();
            $('#correct').get(0).currentTime = 0;
            $('#incorrect').get(0).pause();
            $('#incorrect').get(0).currentTime = 0;
            $('#incorrect').get(0).play();
        }
        $('.img-hold img').removeClass('dragstarted');
    };

    $rootScope.triggerRelink = function () {
        $rootScope.$broadcast('myEventName');
    };
   
        $scope.data1 = [];
        angular.forEach($scope.data, function (item) {
            $scope.data1.push({
                item: item,
                rank: 0.5 - $window.Math.random()
            });
        });

        console.log($scope.data1);
    
});

moduleGame.directive('relinkEvent', function ($rootScope) {
    return {
        transclude: 'element',
        restrict: 'A',
        link: function (scope, element, attr, ctrl, transclude) {
            var previousContent = null;

            var triggerRelink = function () {
                if (previousContent) {
                    previousContent.remove();
                    previousContent = null;
                }

                transclude(function (clone) {
                    console.log('relinking');
                    element.parent().append(clone);
                    previousContent = clone;
                });

            };

            triggerRelink();
            $rootScope.$on(attr.relinkEvent, triggerRelink);

        }
    };

});


/*-----------------------------------*/


var gamecatControllers = angular.module('gamecatControllers', []);

gamecatControllers.controller('gameListCtrl', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('game.json').success(function (data) {
          $scope.game = data;
      });

      $scope.orderProp = 'age';
  }]);

gamecatControllers.controller('gameDenoseCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.gameId = $routeParams.gameId;
  }]);

/*-----------------------------*/
