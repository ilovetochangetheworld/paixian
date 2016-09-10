//cart.controller控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('cartController', cartController);

    cartController.$inject = ['$state'];

    function cartController($state) {
        var vm = this;
        vm.return = true;
        vm.header = '购物车';
        document.title='购物车';
        
    }
})();
