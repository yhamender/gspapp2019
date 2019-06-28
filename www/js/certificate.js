angular.module('starter.certificate', [])
  .controller('certificateCtrl', function ($scope, $state, $window, $stateParams, AppServiceAPI, cetificateService, $rootScope,$ionicPlatform, $ionicModal, $sce, $ionicPopup, ValidationService,$ionicLoading, UploadService) {

    'use strict';
	$scope.arr=[];
	$rootScope.webProgress = $rootScope.completeness;
	function getStudentCertificate(){
		 //$rootScope.user
     cetificateService.getStudentCertificateby($rootScope.user)
		  .then(function (res) {
		  $scope.arr = res.data;
		  console.log(res.data);
		  }, function (err) {
		  console.error(err);
	   	 });
	 }
	 $scope.arr1=[];
	 function getStaffCertificate(){
     cetificateService.getStaffCertificateby($rootScope.user)
		  .then(function (res) {
		  $scope.arr1 = res.data;
		  console.log(res.data);
		  }, function (err) {
		  console.error(err);
	   	 });
	 }
	 $scope.arr2=[];
	 function getPrincipalCertificate(){
     cetificateService.getPrincipalCertificateby($rootScope.user)
		  .then(function (res) {
		  $scope.arr2 = res.data;
		  console.log(res.data);
		  }, function (err) {
		  console.error(err);
	   	 });
	 }
	 $scope.goToBackWaste=function(){
	   $state.go('app.waste');
	 }
	 $scope.goToNextFeedback=function(){
	   $state.go('app.feedback');	 
	 }
	 
	 $scope.addCertificateRow=function(certificateName,schoolName){
		 $scope.data = [];
		 var newEmp = {
			 userid:$rootScope.user,
             certificate_username: certificateName,
             certificate_schoolname:schoolName
        };
		$scope.data.push(newEmp);
		cetificateService.generateCertificate($scope.data)
		 .then(function (res) {
		}, function (err) {
		console.error('Error In Digital Certificate: ' + JSON.stringify(err)); 
		});
		console.log($scope.data);
	 };
	 var avaliabelStatus;
	 $scope.checkCertificateAvailabe=function(certificate_username){ 
	    cetificateService.checkCertificateAvailabe($rootScope.user,certificate_username).then(function (res) {
		   return res.data;
		}, function (err) {
		 console.error('Check Avaliable Certificate: ' + JSON.stringify(err)); 
		});
		 console.log($scope.data);
	 }
	
	 getStaffCertificate();
	 getStudentCertificate();
	 getPrincipalCertificate();
   
  });
