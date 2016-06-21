var employeeApp = angular.module("EmployeeApp",[]);
  employeeApp.controller("empCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.employees = [
      {
       "id":"0",
       "name": "Krishna",
		   "title": "Software Engineer",
	     "description": "Java developer",
		   "joiningDate": "1/12/2014",
		   "yearsOfExpie": "4"
      },
      {
      "id":"1",  
		  "name": "Naveen",
		  "title": "Tester",
	  	"description": "Make sure things work",
	  	"joiningDate": "1/11/2014",
		  "yearsOfExpie": "2"
    	},
      {
        "id":"2",
        "name": "Rashmi",
		    "title": "Human Resources",
		    "description": "Hire best people",
		    "joiningDate": "1/11/2014",
		    "yearsOfExpie": "12"
      }
    ];
    $scope.orderProp="name"; 
    
    
     
     $scope.editingData = {};
    
    for (var i = 0, length = $scope.employees.length; i < length; i++) {
      $scope.editingData[$scope.employees[i].id] = false;
    }


    $scope.modify = function(emp){
        $scope.editingData[emp.id] = true;
    };


    $scope.update = function(emp){
        $scope.editingData[emp.id] = false;
    };
    
    $scope.Delete = function (index) {
        $scope.employees.splice(index, 1);
    };
    
      $scope.Reset = function () {
            $scope.newname = '';
            $scope.newtitle = '';
            $scope.newdescription = '';
            $scope.newjoiningDate = '';
            $scope.newyearsOfExpie = '';
        }
        $scope.Reset();
        
        
       $scope.Add = function () {
           if (!$scope.newname)
                return;
          
           
            $scope.employees.push({
                name: $scope.newname,
                title: $scope.newtitle,
                description: $scope.newdescription,
                joiningDate: $scope.newjoiningDate,
                yearsOfExpie: $scope.newyearsOfExpie,
        });
            
            $scope.Reset();
            
        }
        
    
  });
