'use strict';

module.exports = function(electronApp, menuState) {
  return [{
    label: 'Generate IDs',
    accelerator: 'CommandOrControl+G',
    enabled: () => menuState.bpmn,
    action: function() {
      electronApp.emit('menu:action', 'generateIDs');
    }
  }];
};
