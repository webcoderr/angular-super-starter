app.controller('CategoryCtrl',['$scope','$http','$routeParams','$rootScope', function($scope, $http, $routeParams, $rootScope){

		$http.get('response.json').success(function(data){
			$scope.article = data[0];
			$scope.article1 = data[0].List_of_articles[0].Article;
			$scope.article2 = data[0].List_of_articles[0].Article.Category_Id;						
			$scope.itemid = $routeParams.id;						
		});
}]);