(function(){
	angular.module('ionic-speed-dial', [])
.directive('speedDial',function(){

	return {
		scope: {
			config:'=',
			funhandler:'&'
		},
		restrict: 'E',
		controller:function($scope) {
			var utils = this;
			$scope.config.menuImage = $scope.config.menuImage || 'ion-plus';
			$scope.config.menuBackground = $scope.config.menuBackground || '#ff1744';
			$scope.config.menuColor = $scope.config.menuColor || '#ffffff';
			
			$scope.speedfun = function(index){
				$scope.funhandler({data:index});				
				if($scope.status) $scope.status = false;
			}
		},

		template:'<div class="ostSpeedDial" >'

		+'<input type="checkbox" ng-model="status" id="menu_opener_id" class="menu_opener">'
		+'</input>'
		+'<label for="menu_opener_id" class="menu_opener_label" ng-style="{ \'background-color\': config.menuBackground }"><i class="ion {{config.menuImage}} speedmenu" ng-style="{\'color\': config.menuColor }"></i></label>'

		+'<a ng-repeat="mObj in config.submenus" class="link_{{$index+1}} link_general" ng-click="speedfun($index+1);" ng-style="{ \'background-color\':mObj.background || config.subMenuBackground }">'
		+'<i class="ion {{mObj.icon}}" ng-style="{\'color\': mObj.color ||config.menuColor }"></i></a>'
		

		+'<div>',

		replace: true

	};

});
});
