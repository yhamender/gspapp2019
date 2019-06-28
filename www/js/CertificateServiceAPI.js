/**
 * Created by Siddhartha Kulshreshtha on 10/4/17.
 */
angular
  .module('starter.cetificateService', [])
  .service('cetificateService', function ($http) {
    'use strict';
	var vm = this;
    vm.certificateURL = 'http://greenschoolsprogramme.org/audit/19/api/certificate/digitalcerticatestudent';
	function _getStudentCertificateby(schoolid){
		return $http.get(vm.certificateURL+"?userid="+schoolid);
	};

	vm.certificateURL1 = 'http://greenschoolsprogramme.org/audit/19/api/certificate/digitalcerticatestaff';
	function _getStaffCertificateby(schoolid){
		return $http.get(vm.certificateURL1+"?userid="+schoolid);
	};

	vm.certificateURL2 = 'http://greenschoolsprogramme.org/audit/19/api/certificate/digitalcerticateprincipal';
	function _getPrincipalCertificateby(schoolid){
		return $http.get(vm.certificateURL2+"?userid="+schoolid);
	};

	vm.certificateURL3='http://greenschoolsprogramme.org/audit/19/api/certificate/generateDigitalCertificate'
	function generateCertificate(userData){
        return $http.post(vm.certificateURL3, userData);
	}

	vm.certificateURL4='http://greenschoolsprogramme.org/audit/19/api/certificate/checkDigitalCertificateAvaivale'
	function checkCertificateAvailabe(schoolid,certificate_username){
		return $http.get(vm.certificateURL4+"?userid="+schoolid+"&certificate_username="+certificate_username);
	}

    return {
	  getStudentCertificateby:_getStudentCertificateby,
	  getStaffCertificateby:_getStaffCertificateby,
	  getPrincipalCertificateby:_getPrincipalCertificateby,
	  generateCertificate:generateCertificate,
	  checkCertificateAvailabe:checkCertificateAvailabe
    };
  });
