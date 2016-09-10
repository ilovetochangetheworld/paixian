(function (){
  'use strict'

  angular
      .module('app')
      .directive('fileModel', fileModel);

  function fileModel(){
    var directive = {
        link: link,
        restrict: 'EA',
        controller: fileModelController,
		    controllerAs: 'vm',
    };
    return directive;

    function link(scope, element, attrs, ngModel) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      element.bind('change', function(event){
      scope.$apply(function(){
        modelSetter(scope, element[0].files[0]);
      });
      //附件预览
      scope.file = (event.srcElement || event.target).files[0];
      scope.getFile();
    });
  }
}

})();
