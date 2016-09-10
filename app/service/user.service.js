//user service
(function() {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {
        var defaultApiUrl = "http://king.wedoyun.com/api.php";
        var services = {
            regist: regist,
            getSms: getSms,
            getOrderId: getOrderId,
            loginOut: loginOut,
            login: login,
            getFav: getFav,
            getOrders:getOrders,
            orderCancel:orderCancel,
            orderConfirm:orderConfirm,
            orderDetail:orderDetail,
            refundOrder:refundOrder,
            returnOrder:returnOrder,
            getUserInfor:getUserInfor,
            updateUserInfo:updateUserInfo,
            applyAistributor:applyAistributor,
            getshopInfo:getshopInfo,
            shareUser:shareUser,
            shareDistributor:shareDistributor,
            wXJsSDKConfig:wXJsSDKConfig,
            subordinate:subordinate

        };
        return services;

        /*===========================*/

        // 注册
        function regist(registData) {
            var apiUrl = defaultApiUrl + '/login/regist';

            return $http.post(apiUrl, registData)
                .then(registComplete).catch(registFailed);

            function registComplete(response) {
                return response;
            }

            function registFailed(error) {
                return error;
            }
        }

        // 登录
        function login(loginData) {
            var apiUrl = defaultApiUrl + '/login/loginIn';
            return $http.post(apiUrl, loginData)
                .then(commonHandler)
                .catch(commonHandler);

            function commonHandler(data) {
                return data;
            }
        }

        // 获取验证码
        function getSms(smsData) {
            var apiUrl = defaultApiUrl + '/login/getSms';

            return $http.post(apiUrl, smsData)
                .then(getSmsComplete).catch(getSmsFailed);

            function getSmsComplete(response) {
                return response;
            }

            function getSmsFailed(error) {
                return error;
            }
        }

        // 获取OpenID
        function getOrderId(code) {
            var apiUrl = defaultApiUrl + '/Wx/getWxUserInfo?code=' + code;

            return $http.get(apiUrl)
                .then(getOrderIdComplete).catch(getOrderIdFailed);

            function getOrderIdComplete(response) {
                return response;
            }

            function getOrderIdFailed(error) {
                return error;
            }
        }

        // 退出登录
        function loginOut(token) {
            var apiUrl = defaultApiUrl + '/login/loginOut?' + token;

            return $http.get(apiUrl)
                .then(loginOutComplete).catch(loginOutFailed);

            function loginOutComplete(response) {
                return response
            }

            function loginOutFailed(error) {
                return error
            }
        }

        // 收藏
        function getFav(postData) {
            var apiUrl = defaultApiUrl + '/MemberMall/getProductFav?token=' + postData.token + '&pageIndex=' + postData.pageIndex + '&pageSize=' + postData.pageSize;

            return $http.get(apiUrl)
                .then(getFavComplete).catch(getFavFailed);

            function getFavComplete(response) {
                return response
            }

            function getFavFailed(error) {
                return error
            }
        }

        //获取订单
        function getOrders(token,pageIndex,pageSize,status) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrder/getOrders?token=" + token +"&pageIndex="+ pageIndex +"&pageSize=" + pageSize+"&status=" + status;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //取消订单
        function orderCancel(token,order_id) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrder/orderCancel?token=" + token;
            return $http.post(apiUrl,{order_id:order_id}).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }

        //确认订单
        function orderConfirm(token,order_id) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrder/orderConfirm?token=" + token;
            return $http.post(apiUrl,{order_id:order_id}).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //订单详情
        function orderDetail(token,order_id) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrder/getOrderDetail?token=" + token +"&order_id=" + order_id;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //退款
        function refundOrder(postData) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrderExt/refundOrder?token=" + postData.token;
            return $http.post(apiUrl,postData).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //退款
        function returnOrder(postData) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberOrderExt/returnOrder?token=" + postData.token;
            return $http.post(apiUrl,postData).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //获取个人信息
        function getUserInfor(token) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfo/getUserInfo?token=" + token;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //获取个人信息
        function updateUserInfo(postData,token) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfo/updateUserInfo?token=" + token;
            return $http.post(apiUrl,postData).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //获取小店信息
        function getshopInfo(user_id) {
            var apiUrl = "http://king.wedoyun.com/api.php/Shop/shopFxInfo?user_id="+user_id;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //申请成为一级分销商请求接口
        function applyAistributor(token,postData) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfo/applyDistributor?token=" + token;
            return $http.post(apiUrl,postData).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //分销商分享小店给用户(生成二维码图片)
        function shareUser(token) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfoExt/shareUser?token="+token;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //获取jsdk
        function wXJsSDKConfig(url) {
            var apiUrl = "http://king.wedoyun.com/api.php/Wx/wXJsSDKConfig?url=" + url;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //一级分销商分享给二级分销商
        function shareDistributor(token) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfoExt/shareDistributor?token="+token;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
        //一级分销商分享给二级分销商
        function subordinate(token) {
            var apiUrl = "http://king.wedoyun.com/api.php/MemberInfoExt/subordinate?token="+token;
            return $http.get(apiUrl).then(doneCallbacks).catch(failCallbacks);

            function doneCallbacks(response) {
                return response.data
            }

            function failCallbacks(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }

    }
})();
