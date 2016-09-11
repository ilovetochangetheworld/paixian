(function() {
    'use strict';
    angular
        .module('app', ['ngFileUpload', 'ngCookies', 'ui.router', 'angular-popups'])
        .config(config);

    function config($stateProvider, $urlRouterProvider, $httpProvider, PopupProvider) {
        //若想在 js 代码中调用浮层相关控件，可以使用 Popup 服务。
        PopupProvider.title = '提示';
        PopupProvider.okValue = '确定';
        PopupProvider.cancelValue = '取消';
        // 修改http头
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $urlRouterProvider.otherwise('/index');
        $stateProvider

            //首页
            .state('index', {
                url: "/index",
                templateUrl: "views/index/index.html",
                controller: "IndexController as vm"
            })
            //个人中心
            .state('usercenter', {
                url: "/usercenter",
                templateUrl: "views/user/user.html",
                controller: "UserCenterController as vm"
            })
            //收货地址
            .state('address', {
                url: "/address",
                templateUrl: "views/user/address.html",
                controller: "addressController as vm"
            })
            //编辑收货地址
            .state('editAddress', {
                url: "/editAddress",
                templateUrl: "views/user/editAddress.html",
                controller: "editAddressController as vm"
            })
            //购物车
            .state('cart', {
                url: "/cart",
                templateUrl: "views/cart/cart.html",
                controller: "cartController as vm"
            })
            //购物车
            .state('order', {
                url: "/order",
                templateUrl: "views/order/order.html",
                controller: "OrderController as vm"
            })

    }
})();
