//order.controllerc控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('OrderController', OrderController);

    OrderController.$inject = ['$state'];

    function OrderController($state) {
        var vm = this;
        document.title='订单';
    }
})();
