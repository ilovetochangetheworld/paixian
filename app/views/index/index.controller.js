//index.controllerc控制器!

(function() {
    'use strict';

    angular.module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state'];

    function IndexController($state) {
        var vm = this;
        document.title='首页';
    }
})();
