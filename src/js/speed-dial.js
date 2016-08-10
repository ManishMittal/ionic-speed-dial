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
				$scope.speedfun = function(index){
					$scope.funhandler({data:index});
					if($scope.status) $scope.status = false;
				}
			},

			template:'<div class="ostSpeedDial" >'

			+'<input type="checkbox" ng-model="status" id="menu_opener_id" class="menu_opener">'

			+'<label for="menu_opener_id" class="menu_opener_label"><img ng-src="{{config.menuImage}}" class="speedmenu" ></label>'

			+'<a class="link_{{$index+1}} link_general" ng-click="speedfun($index+1);" ng-repeat="mObj in config.submenus"  ><i class="ion {{mObj}}"></i></a>'

			+'</input>'

			+'<div>',

			replace: true

		};

	});
});
