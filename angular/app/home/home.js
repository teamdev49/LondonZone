(function() {
    'use strict';
    
   angular
        .module('londonZones.home',[])
        .controller('homeController', homeController);

	function homeController($scope, QueryService){
        console.log($scope);
        $scope.displayviewDetails = false;
        QueryService.query('GET', 'components/services/data/data.json').then(function(trainDetails){
        //QueryService.query('GET', 'trainDetails').then(function(trainDetails){
            $scope.totalZoneDetails = trainDetails.data;
            $scope.zoneDetails = $scope.totalZoneDetails;
        });
        $scope.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $scope.getZoneDetails = function(letter){
            $scope.zoneDetails = [];
            console.log($scope.totalZoneDetails);
            angular.forEach($scope.totalZoneDetails, function(zone) {
                if(zone.name.startsWith(letter)){
                    $scope.zoneDetails.push(zone);
                }
            });
        }

        $scope.dispalyDetails = function(details){
            $scope.displayviewDetails = true;
            $scope.displayZone = details;
        }

        $scope.showAllZones = function(){
            $scope.displayviewDetails = false;
        }
        


        /*$scope.zoneDetails = [
            {
                'stationName':'Abbey Road',
                'londonZone':'Zone 2/3'
            },{
                'stationName':'Action Central',
                'londonZone':'Zone 3'
            },{
                'stationName':'Action Town',
                'londonZone':'Zone 3'
            },{
                'stationName':'Aldgate',
                'londonZone':'Zone 1'
            }
        ]*/
    }  
 })();
