var moduleGame = angular.module('GameApp', ['ngRoute', 'underscore', 'gamecatControllers', 'ngAnimate', 'ngDragDrop']);
var content_path = "http://actionitems.changemyworldnow.com/wastepro";
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

moduleGame.controller('TodoCtrl', function ($scope, $rootScope) {

    $scope.todos = [];
  
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };
  
    $scope.addTodo = function (todo) {
        if ($scope.formTodoText.length > 0) {
            $scope.todos.push({ text: $scope.formTodoText, done: false });
            $scope.formTodoText = '';
            /*$rootScope.todos = $scope.todos;
            $rootScope.$broadcast('todos', 'value');*/
            
            console.log($scope.todos, 'TODOS');
        }
    };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {          
            return !todo.done;        
        });
    };

    $scope.next = function () {
        $rootScope.todos = $scope.todos;
        $rootScope.$broadcast('todos');  
    }
});

moduleGame.controller('TodoListCtrl', function ($scope, $rootScope, $window) {
    $scope.$on('todos', function (response) {
        $scope.todos2 = $rootScope.todos;
        $scope.todos3 = [];
        angular.forEach($scope.todos2, function (item) {
            $scope.todos3.push({
                item: item,
                rank: 0.5 - $window.Math.random()
            });
        });

        console.log($scope.todos3);

    })
   /*$scope.todos1 = [
        { text: "asbvdkfbv1" },
        { text: "asbvdkfbv2" },
        { text: "asbvdkfbv3" },
        { text: "asbvdkfbv4" },
        { text: "asbvdkfbv5" },
    ];*/

});

/*-----------------------------------*/

moduleGame.service('productService', function($rootScope) {});

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

