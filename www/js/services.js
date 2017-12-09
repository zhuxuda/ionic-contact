angular.module('starter.services', [])

.factory('Cantact', function($http, $cordovaFile) {
        var sieeuserurl = 'http://221.193.216.51:3000/users/siee/user';
        return {
            all: function() {
                return $http.get(sieeuserurl);
            },
            get: function(_id) {
                return $http.get(sieeuserurl + '/' + _id);
            }
        }
    })
    .factory('Department', function($http) {
        var departmenturl = 'http://221.193.216.51:3000/departments/siee/dep';
        return {
            all: function() {
                return $http.get(departmenturl);
            }
        }
    })
