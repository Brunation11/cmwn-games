var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate'])
var content_path = "http://actionitems.changemyworldnow.com/taleofatail";
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

moduleGame.controller('stepController', function ($scope, $http, $sce, $window) {
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }
    $scope.data1 = [
    {
        'name': "Lemur",
        'mainImageUrl': content_path + "/content/_assets/elements/_Lemur/lemur.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Lemur/tail_1.png",
                'tail2': content_path + "/content/_assets/elements/_Lemur/tail_2.png",
                'tail3': content_path + "/content/_assets/elements/_Lemur/tail_3.png",
                'correct': "1"
            }
        ],
        'text': "Lemurs hold their tails in <br/> the air when they forage <br/>to be sure they can <br/> see each other and <br/>stay together."
    }, {
        'name': "Peacock",
        'mainImageUrl': content_path + "/content/_assets/elements/_Peacock/peacock.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Peacock/tail_4.png",
                'tail2': content_path + "/content/_assets/elements/_Peacock/tail_5.png",
                'tail3': content_path + "/content/_assets/elements/_Peacock/tail_6.png",
                'correct': "3"
            }
            ],
        'text': "The Peacock is a male <br/> <span>(the female is called a Peahen). </span> <br/>They spread out their <br/> tail feathers <br/>to attract a mate."
    }, {
        'name': "Whale",
        'mainImageUrl': content_path + "/content/_assets/elements/_Whale/whale.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Whale/tail_7.png",
                'tail2': content_path + "/content/_assets/elements/_Whale/tail_8.png",
                'tail3': content_path + "/content/_assets/elements/_Whale/tail_9.png",
                'correct': "1"
            }
        ],
        'text': "The Humpback Whale <br/>slaps its tail on the <br/>surface of the water, <br/>called <b>lobtailing</b>. <br/> This can be heard <br/>underwater for miles."
    }, {
        'name': "Beaver",
        'mainImageUrl': content_path + "/content/_assets/elements/_Beaver/beaver.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Beaver/tail_10.png",
                'tail2': content_path + "/content/_assets/elements/_Beaver/tail_11.png",
                'tail3': content_path + "/content/_assets/elements/_Beaver/tail_12.png",
                'correct': "1"
            }
        ],
        'text': "The Beaver uses its <br/>large tail to slap the <br/>water to warn that <br/>danger is near."
    }, {
        'name': "Fox",
        'mainImageUrl': content_path + "/content/_assets/elements/_Fox/fox.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Fox/tail_13.png",
                'tail2': content_path + "/content/_assets/elements/_Fox/tail_14.png",
                'tail3': content_path + "/content/_assets/elements/_Fox/tail_15.png",
                'correct': "3"
            }
        ],
        'text': "The bushy tail on the Fox <br/>not only helps with balance, <br/>it also works as a <br/>nice warm blanket!"
    }, {
        'name': "Giraffe",
        'mainImageUrl': content_path + "/content/_assets/elements/_Giraffe/giraffe.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Giraffe/tail_16.png",
                'tail2': content_path + "/content/_assets/elements/_Giraffe/tail_17.png",
                'tail3': content_path + "/content/_assets/elements/_Giraffe/tail_18.png",
                'correct': "2"
            }
        ],
        'text': "The Giraffe’s tufted tail <br/>is the longest of <br/>any mammal. <br/>It can grow up to <br/> 8 feet long!"
    }, {
        'name': "Crocodile",
        'mainImageUrl': content_path + "/content/_assets/elements/_Alligator/alligator.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Alligator/tail_19.png",
                'tail2': content_path + "/content/_assets/elements/_Alligator/tail_20.png",
                'tail3': content_path + "/content/_assets/elements/_Alligator/tail_21.png",
                'correct': "3"
            }
        ],
        'text': "The Crocodile uses its <br/>tail for swimming <br/>and as a weapon!"
    }, {
        'name': "Gila",
        'mainImageUrl': content_path + "/content/_assets/elements/_Gila Monster/gila_monster.png",
        'tailImages': [
            {
                'tail1': content_path + "/content/_assets/elements/_Gila Monster/tail_1.png",
                'tail2': content_path + "/content/_assets/elements/_Gila Monster/tail_2.png",
                'tail3': content_path + "/content/_assets/elements/_Gila Monster/tail_3.png",
                'correct': "1"
            }
        ],
        'text': "The Gila Monster <br/>uses its tail to store fat. <br/>It gets bigger when <br/>food is plentiful and <br/>shrinks as its body <br/>uses the stored energy."
    }
    ]

    $scope.data = [];
    angular.forEach($scope.data1, function (item) {
        $scope.data.push({
            item: item,
            rank: 0.5 - $window.Math.random()
        });
    });

    console.log($scope.data);

});


moduleGame.controller('stepTailController', function ($scope, $http, $sce) {
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }

    $scope.data = [
    {
        'name': "need",
        'mainImageUrl': content_path + "/content/_assets/elements/header_3.png",
        'text': "<div><h2>Acrylic Yarn</h2> <p class='samlltext'>(Choose the color of <br/> an animal or be creative and <br/>use whatever colors you love.)</p></div><div><h2>Brush</h2> <p  class='samlltext'>(A fine tooth pet brush works best <br/>or a stiff natural bristle hairbrush.)</p></div><div><h2>Scissors</p></div>",
        'tailImg': "",
        'imgStyle': 'display:none',
        'divStyle': 'padding: 7% 10% 10% 10%; text-align: left; '
    },
     {
         'name': "step1",
         'mainImageUrl': content_path + "/content/_assets/elements/step_1.png",
         'text': " <div><p>Decide how long you want your tail <br/>  to be, and measure the yarn. <br/> Cut at least 24 pieces of yarn  <br/>  the same length. <br/> For a bigger tail, use more yarn. </p></div>",
         'tailImg': "",
         'imgStyle': 'display:none',
         'divStyle': ' text-align: center; font-size: 20px; text-align:center ',
     },
    {
        'name': "step2",
        'mainImageUrl': content_path + "/content/_assets/elements/step_2.png",
        'text': " <div><p>Keeping the pieces together, <br/> tie a knot on one end.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_1.png",
        'imgStyle': 'float:left; width:35%;',
        'divStyle': 'float:right; width: 78%;position: absolute;top: 94px;left: 78px;',

    },
    {
        'name': "step3",
        'mainImageUrl': content_path + "/content/_assets/elements/step_3.png",
        'text': " <div><p>Separate the yarn into three sections <br/> and braid it all the way down. <br/> Use a smaller piece of yarn <br/> to tie a knot on that end.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_3.png",
        'imgStyle': 'clear:both; width:85%; margin:0 auto;  ',
        'divStyle': 'clear:both; width: 340px; margin:0 auto; text-align:center; padding:  6% 0 0 6%; font-size:20px;height: 30px;',

    },
    {
        'name': "step4",
        'mainImageUrl': content_path + "/content/_assets/elements/step_4.png",
        'text': " <div><p>Cut 10 pieces of yarn <br/>about the length <br/> of the braided <br/>part of your tail. <br/> Use another piece of <br/> yarn to tie those <br/> strings in the middle.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_4.png",
        'imgStyle': 'float:right; width: 38%; padding:5% 0 10% 0%',
        'divStyle': 'float:left; width: 62%; padding: 13% 0 0 10%;',

    },
    {
        'name': "step5",
        'mainImageUrl': content_path + "/content/_assets/elements/step_5.png",
        'text': " <div><p>Holding the center knot,<br/> brush out the yarn. <br/> This might take a little while <br/>as you want to break apart <br/>the strings so that they <br/>look more like fur.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_5.png",
        'imgStyle': 'float:left;  max-width: 15%; margin-left: 9%;',
        'divStyle': 'float:right;   width: 76%; padding: 16% 5% 0% 0',

    },
    {
        'name': "step6",
        'mainImageUrl': content_path + "/content/_assets/elements/step_6.png",
        'text': " <div><p>Using the string, <br/>tie around and through <br/>the bottom of <br/>your braid.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_6.png",
        'imgStyle': 'float:right; width: 54%; padding: 10px 0 0 0;',
        'divStyle': 'float:left; width: 67%; padding: 0; position: absolute;top: 80px;left: 10px;',

    },
    {
        'name': "step7",
        'mainImageUrl': content_path + "/content/_assets/elements/step_7.png",
        'text': " <div style='padding:0;'><p>Now repeat steps four through six <br/>and work your way up the braid. <br/><br/> You can just do the bottom like <br/>a giraffe’s tail or go all the way up <br/>to make a wolf or fox tail.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_7.png",
        'imgStyle': 'clear:both; width:80%;margin:0 auto; ',
        'divStyle': 'clear:both; width:80%; margin:0 auto; text-align:center; padding:20px 0 0 0; font-size:20px;height: 105px;'

    },
    ]
});
moduleGame.controller('easyTailController', function ($scope, $http, $sce) {
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }
    $scope.data = [
    {
        'name': "need",
        'mainImageUrl': content_path + "/content/_assets/elements/header_3.png",
        'text': "<div><h2>Acrylic Yarn</h2> <p class='samlltext'>(Choose the color of <br/>an animal or be creative and <br/>use whatever colors you love.)</p></div><div><h2>Scissors</p></div>",
        'tailImg': "",
        'imgStyle': 'display:none',
        'divStyle': 'padding:15% 15% 22% 15%; text-align: left; '
    },
    {
        'name': "step1",
        'mainImageUrl': content_path + "/content/_assets/elements/step_1.png",
        'text': " <div><p>Decide how long you want your tail <br/>  to be, and measure the yarn. <br/> Cut at least 24 pieces of yarn  <br/>  the same length. <br/> For a bigger tail, use more yarn. </p></div>",
        'tailImg': "",
        'imgStyle': 'display:none',
        'divStyle': ' text-align: center; font-size: 20px; text-align:center ',
    },
    {
        'name': "step2",
        'mainImageUrl': content_path + "/content/_assets/elements/step_2.png",
        'text': " <div><p>Keeping the pieces together, <br/> tie a knot on one end.</p></div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_1.png",
        'imgStyle': 'float:left; width:35%;',
        'divStyle': 'float:right; width: 78%;position: absolute;top: 94px;left: 78px;',

    },
    {
        'name': "step3",
        'mainImageUrl': content_path + "/content/_assets/elements/step_3.png",
        'text': " <div><p>Cut another peace of yarn <br/>and double it. Tie around <br/> the base of your knot.</p><br/><br/> <p> Use this to tie  your tail onto <br/>a beltand gallup away.</div>",
        'tailImg': content_path + "/content/_assets/elements/tail_step_2.png",
        'imgStyle': 'float:left; width:35%;',
        'divStyle': 'float:right; width: 78%;position: absolute;top: 62px;left: 78px;'

    }]
});

moduleGame.directive('slider', function ($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        $scope: {
            data: '='
        },
        link: function ($scope, elem, attrs) {

            $scope.currentIndex = 0;

            $scope.next = function () {
                jQuery('.arrows-inctive').css('z-index', '10');
                jQuery('#step .slider .next').fadeOut();
                if ($scope.currentIndex == $scope.data.length - 1) {
                    if (jQuery('#step').is(":visible")) {
                        jQuery('#step').fadeOut(500);
                        jQuery('#googjob').fadeIn(500);
                        jQuery('#mainSound').get(0).pause();
                        jQuery('#slide13').get(0).play();
                        jQuery('#step').addClass('innactive');
                    }
                    else if (jQuery('#step').hasClass(".innactive") || (jQuery('#hard').is(":visible"))) {
                        jQuery('#hard').fadeOut(500);
                        jQuery('#wellcome').fadeIn(500);
                        //jQuery('#showOff').fadeIn(500);
                        jQuery('#hard').addClass('innactive');
                    }
                    else if (jQuery('#step').hasClass(".innactive") || (jQuery('#easy').is(":visible"))) {
                        jQuery('#easy').fadeOut(500);
                        jQuery('#wellcome').fadeIn(500);
                        //jQuery('#showOff').fadeIn(500);
                        jQuery('#easy').addClass('innactive');
                    }
                };
                $scope.currentIndex < $scope.data.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
            };

            $scope.prev = function () {
                $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.data.length - 1;
            };

            $scope.$watch('currentIndex', function () {
                $scope.data.forEach(function (item) {
                    item.visible = false;
                });
                $scope.data[$scope.currentIndex].visible = true;
            });


        },

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

gamecatControllers.controller('gameDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.gameId = $routeParams.gameId;
  }]);


/*-----------------------------*/

