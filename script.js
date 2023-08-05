var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    

    //mảng users chứa các chuỗi 
    $scope.users = [
        {name: 'ThiDK', email: '123@yahoo.com', fullname:'Dang Kim Thi'},
        {name: 'Thi', email: '456@yahoo.com', fullname:'ThiDK'},
        {name: 'CodeLean', email: '789@yahoo.com', fullname:'Code Lean'}
    ];
    
    //hàm addUser phụ trách add vào mảng users chuỗi mới .đồng thời thông báo .
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = { };
        $scope.message = "new user added successfully";
    };
    
    $scope.selectUser = function(user){
        
        $scope.clickedUser = user;
    };
    

    $scope.editUser = function(){
        $scope.message = "user edited successfully";
    };

    //Trong hàm deleteUser, xóa người dùng được chọn (clickedUser) khỏi mảng users.
    $scope.deleteUser = function(){

    /*sử dụng phương thức indexOf để tìm vị trí của clickedUser trong mảng users.
     Sau đó, sử dụng phương thức splice để xóa người dùng khỏi mảng dựa vào vị trí đã tìm thấy.*/
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);//Thêm đối số 1 cho splice,có nghĩa ta muốn xóa duy nhất 1 người dùng.
        $scope.message = "user deleted successfully";
    };
     

    $scope.clearMessage = function(){
        $scope.message = "";
    };

});
