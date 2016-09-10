angular.module('app').directive('repeatdone', function() {
        return {
            link: function(scope, element, attrs) {
                if (scope.$last) {                   // 这个判断意味着最后一个 OK
                    scope.$eval(attrs.repeatdone)    // 执行绑定的表达式
                }
            }
        }
    });