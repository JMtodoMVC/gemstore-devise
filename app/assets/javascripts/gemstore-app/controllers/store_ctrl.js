(function(){
  var app = angular.module('gemStoreApp');
  app.controller('StoreController', [ '$scope', '$http', function($scope, $http) {
    $scope.products = [];
    $scope.errors = [];

    $scope.index = function() {
      $http.get( "/api/v1/gemstones" )
        .success(function(data) {
          $scope.products = data.gemstones;
          console.log(data);
        })
        .error(function(data) {
          $scope.errors.push(data);
          //console.log(data);
          console.log(status);
        });
    };

    $scope.create = function(gemstone){
      $http.post( "/api/v1/gemstones", { gemstone: gemstone })
        .success(function(data) {
          $scope.products.unshift(data.gemstone);
          $scope.newGemstone = {};
        })
        .error(function(data, status) {
          $scope.errors = (data);
          console.log(data);
          console.log(status);
        });
    };

    $scope.update = function(gemstone){
      //save temp version
      $http.patch( "/api/v1/gemstones/" + gemstone.id,
        { gemstone: gemstone })
        .success(function(data) {
          gemstone.editing = false;
      })
        .error(function(data, status) {
          $scope.errors = data;
      });
    };

    $scope.destroy = function(gemstone){
      $http({
        method: 'DELETE',
        url: "/api/v1/gemstones/" + gemstone.id
      })
        .success(function(data) {
          gemstone.deleteConfirm = false;
          $scope.products.splice($scope.products.indexOf(gemstone), 1);
      })
        .error(function(data, status) {
          $scope.errors.push(data);
          // console.log(data);
          // console.log(status);
      });
    };

  }]);
})();
