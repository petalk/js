   var app = angular.module('ItemApp', []);
        app.controller('ItemController', function($scope, $http) {
            
            $scope.GICount;
            
            $http({
                method : "GET",
                url : "<?php echo base_url();?>index.php/ItemController/getDetail/<?php echo $id ?>"
            }).then(function mySuccess(response) {
                $scope.Items = response.data;
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });
            
            $http({
                method : "GET",
                url : "<?php echo base_url(); ?>index.php/ItemController/getItems"
            }).then(function mySuccess(response) {
                $scope.AllItems = response.data;
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });
            
            
            $http({
                method : "GET",
                url : "<?php echo base_url();?>index.php/ItemController/getSpecification/<?php echo $id ?>"
            }).then(function mySuccess(response) {
                $scope.Specification = response.data;
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });
            
            $scope.getFeature=function(){
               $http({
                    method : "GET",
                    url : "<?php echo base_url();?>index.php/ItemController/getFeatures/<?php echo $id ?>"
                }).then(function mySuccess(response) {
                    $scope.Features = response.data;
                }, function myError(response) {
                    $scope.myWelcome = response.statusText;
                });
              
            };
            
            $scope.searchBut=function()
            {
                  
            $http({
                method : "GET",
                url : "<?php echo base_url();?>index.php/ItemController/getSearch/"+$scope.searchInp
            }).then(function mySuccess(response) {
                $scope.SearchItems = response.data;
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });
            };
            
        });

