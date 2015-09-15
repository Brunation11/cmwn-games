var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop'])
var content_path = "http://actionitems.changemyworldnow.com/realornot";
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
    $scope.data = [
    {
        'name': "Axolotl",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_1.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_1.png",
        'correct' : 1,
        'text': "Axolotl"
    },   {
        'name': "Springtails",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_2.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_2.png",
        'correct': 1,
        'text': "Springtails"
    }, {
        'name': "Giant_Calm",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_3.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_3.png",
        'correct': 1,
        'text': "Giant_Calm"
    }, {
        'name': "Rock_Hyrax",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_4.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_4.png",
        'correct': 1,
        'text': "Rock_Hyrax"
    }, {
        'name': "Fishing_Lure",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_5.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_5.png",
        'correct': 2,
        'text': "Fishing_Lure"
    }, {
        'name': "Spiny_Leaf_insect",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_6.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_6.png",
        'correct': 1,
        'text': "Spiny_Leaf_insect"
    }, {
        'name': "Red_Panda",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_7.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_7.png",
        'correct': 1,
        'text': "Red_Panda"
    }, {
        'name': "Jackalope",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_8.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_8.png",
        'correct': 2,
        'text': "Jackalope"
    }, {
        'name': "Orchid_Mantis",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_9.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_9.png",
        'correct': 1,
        'text': "Orchid_Mantis"
    }, {
        'name': "Pit_Angel",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_10.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_10.png",
        'correct': 2,
        'text': "Pit_Angel"
    },  {
        'name': "Fake_Pur",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_11.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_11.png",
        'correct': 2,
        'text': "Fake_Pur"
    }, {
        'name': "Parrot_Worm",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_12.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_12.png",
        'correct': 2,
        'text': "Parrot_Worm"
    }, {
        'name': "Asian_Tapir",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_13.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_13.png",
        'correct': 1,
        'text': "Asian_Tapir"
    }, {
        'name': "Mantis_Shrimp",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_14.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_14.png",
        'correct': 1,
        'text': "Mantis_Shrimp"
    }, {
        'name': "Christmastree_Worm",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_15.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_15.png",
        'correct': 1,
        'text': "Christmastree_Worm"
    }, {
        'name': "Striped_Frogfish",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_16.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_16.png",
        'correct': 1,
        'text': "Striped_Frogfish"
    }, {
        'name': "Tunicates",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_17.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_17.png",
        'correct': 1,
        'text': "Tunicates"
    }, {
        'name': "Ornate_Ghost_Pipefish",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_18.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_18.png",
        'correct': 1,
        'text': "Ornate_Ghost_Pipefish"
    }, {
        'name': "Nudibranch",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_19.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_19.png",
        'correct': 1,
        'text': "Nudibranch"
    }, {
        'name': "Wolf_Jay",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_20.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_20.png",
        'correct': 2,
        'text': "Wolf_Jay"
    }, {
        'name': "Brasilian_Porcupine",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_21.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_21.png",
        'correct': 1,
        'text': "Brasilian_Porcupine"
    }, {
        'name': "Polar_Cat",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_22.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_22.png",
        'correct': 2,
        'text': "Polar_Cat"
    },
    {
        'name': "Owl_Squirrel",
        'mainImageUrl': content_path + "/content/_assets/elements/Photos/photo_23.png",
        'imgHeader': content_path + "/content/_assets/elements/headers/header_23.png",
        'correct': 2,
        'text': "Owl_Squirrel"
    }
    ]
    //setTimeout(function () {
        $scope.data1 = [];
        angular.forEach($scope.data, function (item) {
            $scope.data1.push({
                item: item,
                rank: 0.5 - $window.Math.random()
            });
        });

       // console.log($scope.data1);

    //}, 500);
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

