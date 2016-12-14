var app = angular.module('ngDynamicForms',[]);

app.controller('FormBuilderCtrl',function FormBuilderCtrl($scope)
{
	$scope.newField = {};
	$scope.fields = [ {
		type : 'text',
		name : 'Name',
		placeholder : 'Please enter your name',
	} ];
	$scope.editing = false;

	$scope.saveField = function() {
		console.log("entered save");
		if ($scope.newField.type == 'checkboxes') {
			$scope.newField.value = {};
		}
		if ($scope.editing !== false) {
			$scope.fields[$scope.editing] = $scope.newField;
			$scope.editing = false;
		} else {
			$scope.fields.push($scope.newField);
		}
		$scope.newField = {

		};
	};

	$scope.addOption = function() {
		$scope.newField.options = [{"name":"Chennai","value":"Chennai"},{"name":"Bangalore","value":"Bangalore"},{"name":"Coimbatore","value":"Coimbatore"}];
	};
	$scope.typeSwitch = function(type) {
		
		if (type == 'select')
			return 'multiple';
		
		if(type=='date')
     return 'date';
		return type;
	}
});

app.directive('ngDynamicForm', function () {
    return {

        templateUrl : 'dynamicForms.html'
    }
});
