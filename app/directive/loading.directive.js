(function() {
    angular.module('app').directive('loading', function() {

        var str = '<div id="loading" ng-if="vm.isNoLoaded"><img src="resource/img/loading.gif" /></div>';
        return {
            restrict: 'AE',
            template: str,
            replace: true
        };
    });
})();
