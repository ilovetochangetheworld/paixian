//user.controller控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('UserCenterController', UserCenterController);

    UserCenterController.$inject = ['$state'];

    function UserCenterController($state) {
        var vm = this;
        document.title='个人中心';
    }
})();
