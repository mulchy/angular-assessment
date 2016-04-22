var app = angular.module('messages', []);

app.controller('MainController', function(){
  var vm = this;
  vm.previousMessages = [];
  vm.currentMessage = '';
  vm.input = '';

  vm.addMessage = function(textInput) {
    if (vm.currentMessage != '') {
      vm.previousMessages.push(vm.currentMessage);
    }
    vm.currentMessage = textInput;
    vm.input='';
  };

  vm.shouldShowCurrent = function() {
    return vm.currentMessage != '';
  };

  vm.shouldShowPrevious = function() {
    return vm.previousMessages.length != 0;
  };

});
