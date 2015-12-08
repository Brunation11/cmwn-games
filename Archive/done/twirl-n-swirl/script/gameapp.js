var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop']);
var content_path = "http://action-items.gopagoda.io/done/twirl-n-swirl";
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
    $scope.data2 = [];
    $scope.data = [
    {
        'name': "Baby_Wipes",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_1.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_1.png",
        'text': "Baby wipes are thicker and sturdier <br/> than toilet paper and <br/> do not break down easily.<br/> They are a clog waiting to happen!",
        'sound' : 'wipes',
    },
    {
        'name': "Diapers",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_2.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_2.png",
        'text': "Diapers contain plastic that has<br/> chemicals which expand when wet. <br/> They create BIG clogs.",
        'sound' : 'diaper',
    },
    {
        'name': "Paper_Towels",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_3.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_3.png",
        'text': "Paper towels are not designed <br/> to break down in water <br/> like toilet paper. <br/> Flushing can cause problems.",
        'sound' : 'paper',
    },
    {
        'name': "Dryer_Sheets",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_4.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_4.png",
        'text': "Dryer Sheets contain synthetic<br/> chemicals that are not<br/> biodegradable!",
        'sound' : 'dryer',
    },
    {
        'name': "Fats",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_5.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_5.png",
        'text': "They may seem like liquid but<br/> when they cool they coat the pipe like<br/> wax, making the pipe opening <br/> smaller and smaller.",
        'sound' : 'oils',
    },
    {
        'name': "Cosmetics",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_6.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_6.png",
        'text': "Many of the ingredients in<br/> cosmetics are toxic and shouldn’t <br/> be in the water supply.",
        'sound' : 'cosmet',
    },
    {
        'name': "Band_Aids",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_7.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_7.png",
        'text': "The plastic in band-aids <br/> is not bio-degradable.<br/> They are bad for the environment.",
        'sound' : 'aids',
    },
    {
        'name': "Cat_Litter",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_8.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_8.png",
        'text': "Cat Litter can harbor parasites <br/> and even toxins. <br/> Litter is made from clay<br/>and sand, which should <br/> NEVER be put in a toilet.",
        'sound' : 'litter',
    },
    {
        'name': "Cotton",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_9.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_9.png",
        'text': "<p style='margin-top: 2px; margin-left: 56px;''>They clump together and<br/>bend in the pipes <br/> and create blockages.</p>",
        'sound' : 'cotton',
    },
    {
        'name': "Gum",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_10.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_10.png",
        'text': "It’s gooey and sticky and definitely <br/> can cause problems.",
        'sound' : 'gum',
    },
    {
        'name': "Dental_Floss",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_11.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_11.png",
        'text': "Dental Floss is not biodegradable.<br/> In the pipeline it can wrap<br/> around other objects and create<br/> monster clogs.",
        'sound' : 'floss',
    },
    {
        'name': "Hair",
        'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_12.png",
        'mainHeader': content_path + "/content/_assets/elements/headers/header_12.png",
        'text': "Hair catches things and tangles<br/> almost like dental floss.<br/> It’s a big clogger!",
        'sound' : 'hair',
    },
     {
         'name': "Preacsrpition_Medication",
         'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_13.png",
         'mainHeader': content_path + "/content/_assets/elements/headers/header_13.png",
         'text': "This is a BIG NO!<br/> Medications are not removed in <br/> treatment plants and contaminate<br/> water supplies. They are very <br/> bad for animals and people.",
         'sound' : 'pres',
     },
      {
          'name': "Blue_Automatic_Toilet_Bowl_Cleaner",
          'mainImageUrl': content_path + "/content/_assets/elements/Non Flushables/item_14.png",
          'mainHeader': content_path + "/content/_assets/elements/headers/header_14.png",
          'text': "Sounds surprising! <br/> The chemicals are toxic and can<br/> damage animals, humans,<br/> and the environment.",
          'sound' : 'cleaner',
      }

    ];

    $scope.onDrag = function (e) {
        //angular.element(e.target).parent().addClass("dragstarted");
        $scope.data2 = [];
    };

    $scope.onDrop = function (e, ui) {
        console.log(ui.draggable.scope().item.name.toLowerCase());
        var item_name = ui.draggable.scope().item.name.toLowerCase();
        
        $("#" + ui.draggable.scope().item.name).addClass("drag");
        var parrentSlide = angular.element(e.target);
        parrentSlide.addClass('done');
        $('.sidebar-hover ').fadeIn();
        $('#flush').get(0).currentTime = 0;
        $('#flush').get(0).pause();
        $('#drop').get(0).play();
        $(".block-btn").hide();

        var mycount = 0;
        $('.flush a').click(function () {

            if (mycount==0) {
                $('#' + item_name).get(0).play();
            }
            mycount++;

            $('#flush').get(0).currentTime = 0;
            $('#flush').get(0).pause();
            $('#flush').get(0).play();
            $('.drag').addClass("dragstarted");

            $('.correct-ansver').fadeIn(500).css('z-index', '10');
            $('.correct-ansver-hover').fadeIn(500);
            $('.sidebar-hover ').fadeOut();

            setTimeout(function () {$('.correct-ansver a').fadeIn(500);}, 1000);

        });

       /* var parrentSlideId = parrentSlide.parents().eq(2).get(0).id
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
        $('.img-hold img').removeClass('dragstarted');*/
    };

    $rootScope.triggerRelink = function () {
        $rootScope.$broadcast('myEventName');
    };

     /*   $scope.data1 = [];
        angular.forEach($scope.data, function (item) {
            $scope.data1.push({
                item: item,
                rank: 0.5 - $window.Math.random()
            });
        });

        console.log($scope.data1);

*/
    $('.correct-ansver a.next').click(function () {
        $('.correct-ansver a.next').fadeOut(500);
        $('.correct-ansver > p').fadeOut(500);

        $('.correct-ansver').fadeOut(500).css('z-index', '10');
        $('.correct-ansver-hover').fadeOut(500);
        $scope.data2 = [];

    $(".block-btn").show();
        /*console.log($(".sidebar.left").children().length, '$(".sidebar.left").children().length');
        console.log($(".sidebar.left").children(".dragstarted").length, '$(".sidebar.left").children(".dragstarted").length');
        console.log($(".sidebar.right").children().length, '$(".sidebar.right").children().length');
        console.log($(".sidebar.right").children(".dragstarted").length , '$(".sidebar.right").children(".dragstarted").length');*/
        if (($(".sidebar.left").children().length == $(".sidebar.left").children(".dragstarted").length) && ($(".sidebar.right").children().length == $(".sidebar.right").children(".dragstarted").length))
        {
            $("#step .slider a.next").fadeIn(500);
        }
    });

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
