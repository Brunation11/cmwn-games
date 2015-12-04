var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop'])
var content_path = "http://actionitems.changemyworldnow.com/realornot";
var content_path = "";

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
    $scope.data = [
      {
        'name': "slide0",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_faucet.png",
        'mainImageStyle': "left:0; top:0",
        'text': "<img class='why animated tada' src='" + content_path + "content/_assets/elements/header_why_should.png'>"
    },
    {
        'name': "slide1",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_faucet.png",
        'mainImageStyle': "left:0; top:0",
        'text': "<img class='why ' src='" + content_path + "content/_assets/elements/header_catch.png'>"
    },
    {
        'name': "slide2",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_faucet.png",
        'mainImageStyle': "left:0; top:0",
        'text': "<p class=''>Less than 1% of the<br/> water on the planet can <br/>be used by humans.<p/>"
    },
        {
        'name': "slide3",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_faucet.png",
        'mainImageStyle': "left:0; top:0",
        'text': "<p class='' >Water is a <br/>limited resource.<p/>"
    }, {
        'name': "slide4",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_faucet.png",
        'mainImageStyle': "left:0; top:0",
        'text': "<p class='' >The more the population <br/> grows the more important<br/>  it is to conserve water.<p/>"
    }, {
        'name': "slide5",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/image_shower_head.png",
        'mainImageStyle': "left:0; top:0; width:200px; height:200px",
        'text': "<p class='font-size28' >There are many <br/>ways to save water <br/>but we are going to concentrate <br/>on the water used to shower.</p>"
    },
    {
        'name': "slide6",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_1.png); background-position:center center;",
        'mainImageUrl': content_path + "content/_assets/elements/header_showering_per_minute.png",
        'mainImageStyle': "left:50px; top: -18px; width: 476px;",
        'text': "<ul class='gallons'><li class=''><span></span> 2.5 gallons</li><li><span></span> 1.5 gallons</li><li><span></span> 4.5 gallons</li><ul>"
    }, {
        'name': "slide7",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "",
        'mainImageStyle': "left: 145px;top: 180px;width: 299px",
        'text': "<p > You are now going <br/> to become a</p><img style='width:90%; margin: 0 auto' src='" + content_path + "content/_assets/elements/header_water_sleuth.png'>"
    },{
        'name': "slide8",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "",
        'mainImageStyle': "left: 145px;top: 180px;width: 299px",
        'text': "<p> Do you know what <br/> a sleuth is?</p>"
    },{
        'name': "slide9",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "content/_assets/elements/image_hat.png",
        'mainImageStyle': "left: 239px; top: 4px; width: 256px;height: 185px;",
        'text': "<p>A sleuth is a</p><img style='width:90%; margin: 0 auto'  src='" + content_path + "content/_assets/elements/header_detective.png'>"
    },{
        'name': "slide10",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "content/_assets/elements/image_hat.png",
        'mainImageStyle': "left: 239px; top: 4px; width: 256px;height: 185px;",
        'text': "<p style='font-size: 28px;'>You are going to use<br/> your detective skills to <br/>figure out how much <br/>water your family uses <br/>to shower every day!"
    },
      {
        'name': "slide12",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "content/_assets/elements/header_list.png",
        'mainImageStyle': "left: 50px; top: 4px; width: 452px; height: 98px;",
        'text': "<div id='timeform' ><ul class='list'><li class=''><input type='text' name='tp1'  ng-model='formTodoText' ng-model-instant/></li>" +
            "<li class=''><input type='text' name='tp2'  ng-model='formTodoText' ng-model-instant /></li>" +
            "<li class=''><input type='text' name='tp3' ng-model='formTodoText' ng-model-instant/></li>" +
            "<li class=''><input type='text' name='tp4' ng-model='formTodoText' ng-model-instant/></li>" +
            "<li class=''><input type='text' name='tp5'  ng-model='formTodoText' ng-model-instant/></li>" +
            "<li class=''><input type='text' name='tp6' ng-model='formTodoText' ng-model-instant/></li></ul>" +
            "<div class='clearfix clear'><a class='click' >GO!</a></div></div>"
    },{
        'name': "slide13",
        'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
        'mainImageUrl': content_path + "content/_assets/elements/image_timer.png",
        'mainImageStyle': "left: 136px; top: 52px; width: 319px; height: 314px; position: absolute; z-index: 0;",
        'text': "<p class='font-size28' style='position:absolute; z-index:2; top:40%; left:33%'>Now, time how long<br/> each person spends in <br/> the shower in one day!</p>"
    },
     {
         'name': "slide14",
         'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_2.png); background-position:left bottom;",
         'mainImageUrl': content_path + "content/_assets/elements/header_select.png",
         'mainImageStyle': "left: 50px; top: 30px; width: 452px; height: 98px;",
         'text': "<ul class='lister'><li class=''></li><li class=''></li><li class=''></li><li class=''></li><li class=''></li><li class=''></li></ul>"
     },
    {
         'name': "slide15",
         'bgImage': "background-image:url(" + content_path + "content/_assets/elements/frame_3.png); background-position: center center;     background-size: 70%;",
         'mainImageUrl': content_path + "",
         'mainImageStyle': "",
         'text': "<p class='font-size' >Set the timer when water starts running</p>"
    },
    {
        'name': "slide16",
        'bgImage': "background-image:url(" + content_path + "",
        'mainImageUrl': content_path + "",
        'mainImageStyle': "",
        'text': "<div class='user-timer'><div class='user'>Name</div><div class='timer'><div class='clock'><span class='min'></span>:<span class='sec'></span></div></div><div class='buttons-srat-stop'><button class='start'></button> <a href='#' class='stop'></a></div></div>"
    },
    {
        'name': "slide17",
        'bgImage': "background-image:url(" + content_path + "content/_assets/background/bkg_3.png); background-position: center center;     background-size: 107%;",
        'mainImageUrl': content_path + "",
        'mainImageStyle': "left: 50px; top: 43%; width: 466px; height: 50px;",
        'text': "<div class='estimate' style=' text-align: left;  padding-left: 0px; '>So lets estimate how many gallons your family uses.</div>"
    },{
        'name': "slide18",
        'bgImage': "background-image:url(" + content_path + "content/_assets/background/bkg_3.png); background-position: center center;     background-size: 107%;",
        'mainImageUrl': content_path + "content/_assets/elements/header_week.png",
        'mainImageStyle': "left: 50px; top: 43%; width: 150px; height: 50px;",
        'text': "<div class='week-spent' style=' text-align: left; font-size: 40px; padding-left: 90px; '>Number</div>"
    },
    {
        'name': "slide19",
        'bgImage': "background-image:url(" + content_path + "content/_assets/background/bkg_3.png); background-position: center center;     background-size: 107%;",
        'mainImageUrl': content_path + "content/_assets/elements/header_month.png",
        'mainImageStyle': "left: 50px; top: 43%; width: 150px; height: 50px;",
        'text': "<div class='month-spent' style=' text-align: left; font-size: 40px; padding-left: 90px; '>Number</div>"
    },{
        'name': "slide20",
        'bgImage': "background-image:url(" + content_path + "content/_assets/background/bkg_3.png); background-position: center center;     background-size: 107%;",
        'mainImageUrl': content_path + "content/_assets/elements/header_year.png",
        'mainImageStyle': "left: 50px; top: 43%; width: 150px; height: 50px;",
        'text': "<div class='year-spent' style=' text-align: left; font-size: 40px; padding-left: 90px; '>Number</div>"
    },{
        'name': "slide20",
        'bgImage': "background-image:url(" + content_path + "content/_assets/background/bkg_4.png); background-position: center center;     background-size: 107%;",
        'mainImageUrl': content_path + "content/_assets/elements/frame_3.png",
        'mainImageStyle': "left: 0px; top: 0%; width: 577px; height: 400px; background-positionn: center center; background-size:70%",
        'text': "<p style='position:absolute; z-index:3; top:30%' >Now, let's take a look at<br/> how many gallons <br/> your family could save with <br/> slightly shorter showers!</p>"
    },
    ]
   
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
