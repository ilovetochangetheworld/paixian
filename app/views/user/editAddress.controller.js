//editAddress.controller控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('editAddressController', editAddressController);

    editAddressController.$inject = ['$state'];

    function editAddressController($state) {
        var vm = this;
        vm.return = true;
        vm.header = '修改地址';
        document.title='收货地址';
    }
})();
