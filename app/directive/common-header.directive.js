// 公共header directive
angular
    .module('app')
    .directive('header', header);

function header () {
    var directive = {
        link: link,
        templateUrl: 'directive/common-header.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}
