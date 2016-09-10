// 公共footer directive
(function(){
  'use strict'

  angular
      .module('app')
      .directive('footer', footer);

  function footer () {
      var directive = {
          link: link,
          templateUrl: 'directive/common-footer.html',
          restrict: 'EA'
      };
      return directive;

      function link(scope, element, attrs) {
        /* */
      }
  }

})();
