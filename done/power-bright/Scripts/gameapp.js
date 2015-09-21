var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop'])
var content_path = "http://actionitems.changemyworldnow.com/powerbright";
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
        'name': "coal",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_coal.png",
        'correct': 2,
        'text': "coal",
    }, {
        'name': "oil",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_oil.png",
        'correct': 2,
        'text': "oil",
    }, {
        'name': "natural_gas",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_natural_gas.png",
        'correct': 2,
        'text': "natural gas",
    }, {
        'name': "nuclear",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_nuclear.png",
        'correct': 2,
        'text': "nuclear energy",
    }, {
        'name': "propane",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_propane.png",
        'correct': 2,
        'text': "propane",
    }, {
        'name': "bioenergy",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_bioenergy.png",
        'correct': 1,
        'text': "bioenergy",
    }, {
        'name': "wind",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_wind.png",
        'correct': 1,
        'text': "wind energy",
    }, {
        'name': "ethanol",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_ethenol.png",
        'correct': 1,
        'text': "ethanol",
    }, {
        'name': "hydroelectric",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_hydroelectric.png",
        'correct': 1,
        'text': "hydroelectric",
    }, {
        'name': "geothermal",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_geothermal.png",
        'correct': 1,
        'text': "geothermal",
    }, {
        'name': "solar",
        'mainImageUrl': content_path + "/content/_assets/elements/icon_solar.png",
        'correct': 1,
        'text': "solar energy",
    },
    ];


    setTimeout(function () {
        $scope.data1 = [];
        angular.forEach($scope.data, function (item) {
            $scope.data1.push({
                item: item,
                rank: 0.5 - $window.Math.random()
            });
        });

        console.log($scope.data1);

    }, 500);


});



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