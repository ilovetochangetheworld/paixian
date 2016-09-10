//address.controller控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('addressController', addressController);

    addressController.$inject = ['$state'];

    function addressController($state) {
        var vm = this;
        vm.return = true;
        vm.header = '地址管理';
        document.title='收货地址';
    }
})();
