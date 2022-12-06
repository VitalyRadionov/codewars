let obj = {
  x: 1,
  y: 2
};


function undoRedo(object) {
  //var storage = object;
  var actions = [];  // keep track of action performed
  // action schema -> { name, params, has_undone }
  // for non-undo acton, example of params { key, value }
  // for undo action, example of params { action, key, value }

  var findLastAction = function (status) {
    var lastAction = null;
    for (var i = actions.length - 1; i >= 0; i--) {
      var action = actions[i];
      if ((action.name === 'del' || action.name === 'set') && action.has_undone === status) {
        lastAction = action;
        return lastAction;
      }
    }
    return null;
  }

  var redoUndoSet = function (lastAction) {
    if (lastAction.params.old_value != null && typeof lastAction.params.old_value !== 'undefined') {
      object[lastAction.params.key] = lastAction.params.old_value;
    } else {
      delete object[lastAction.params.key];
    }
  }

  return {
    set: function (key, value) {
      var oldvalue = undefined;
      if (object[key]) {
        oldvalue = object[key];
      }
      object[key] = value;
      actions.push({ name: 'set', has_undone: false, params: { key: key, old_value: oldvalue, new_value: value } });
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      if (object[key]) {
        var value = object[key];
        actions.push({ name: 'del', has_undone: false, params: { key: key, old_value: value, new_value: undefined } });
        delete object[key];
      }
    },
    undo: function () {
      // look for last set/del action, perform it and push undo action in stack
      if (actions.length > 0) {
        var lastAction = findLastAction(false);
        if (lastAction) {
          lastAction.has_undone = true;
          if (lastAction.name === 'set') {
            redoUndoSet(lastAction);
            actions.push({
              name: 'undo',
              params: {
                action: 'set',
                key: lastAction.params.key,
                old_value: lastAction.params.new_value,
                new_value: lastAction.params.old_value
              }
            });
          } else if (lastAction.name === 'del') {
            // perform set 
            object[lastAction.params.key] = lastAction.params.old_value;
            actions.push({
              name: 'undo',
              params: {
                action: 'set',
                key: lastAction.params.key,
                old_value: undefined,
                new_value: lastAction.params.old_value
              }
            });
          }
        } else {
          throw new Error();
        }
      } else {
        throw new Error('no action to undo');
      }
    },
    redo: function () {
      // check if last action is undo
      if (actions.length > 0) {
        var lastAction = actions[actions.length - 1];
        if (lastAction.name === 'undo') {
          var lastDelSetAction = findLastAction(true);
          if (lastDelSetAction) {
            lastDelSetAction.has_undone = false;
          }
          if (lastAction.params.action === 'set') {
            redoUndoSet(lastAction);
            // pop the last undo action
            actions.splice(actions.length - 1, 1);
          } else if (lastAction.params.action === 'delete') {
            // redo set
            object[lastAction.params.key] = lastAction.params.old_value;
            // pop the last undo action
            actions.splice(actions.length - 1, 1);
          }
        } else {
          throw new Error('Redo is not immediately after Undo');
        }
      } else {
        throw new Error('no action to redo');
      }
    }
  };
}

let unRe = undoRedo(obj);

// console.log(unRe.get('x')); // 1
// unRe.set('x', 3);
// console.log(unRe.get('x')); // 3

// unRe.set('y', 10);
// console.log(unRe.get('y')); // 10
// unRe.undo();
// console.log(unRe.get('y')); // 2
// unRe.undo(); // false
// console.log(unRe.get('y')); // 2

// unRe.set('y', 10);
// console.log(unRe.get('y')); // 10
// unRe.undo();
// console.log(unRe.get('y')); // 2
// unRe.redo();
// unRe.redo();
// console.log(unRe.get('y')); // 10

unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
console.log(unRe.get('y')); // 100
console.log(unRe.get('x')); // 50
unRe.undo();
console.log(unRe.get('x')); // 150
console.log(unRe.get('y')); // 100
unRe.redo();
console.log(unRe.get('x')); // 50
console.log(unRe.get('y')); // 100
unRe.undo();
unRe.undo();
console.log(unRe.get('x')); // 1
console.log(unRe.get('y')); // 100
unRe.undo();
unRe.undo();
console.log(unRe.get('y')); // 2
console.log(unRe.get('x')); // 1
// unRe.undo(); // false
console.log(unRe.get('y')); // 2
unRe.redo();
unRe.redo();
unRe.redo();
unRe.redo();
console.log(unRe.get('y')); // 100
console.log(unRe.get('x')); // 50
// unRe.redo(); // false

// unRe.set('z', 10);
// console.log(unRe.get('z')); // 10
// unRe.undo();
// console.log(unRe.get('z')); // undefined
// unRe.redo();
// console.log(unRe.get('z')); // 10

// unRe.del('x');
// console.log(unRe.get('x')); // undefined
// console.log(!obj.hasOwnProperty('x')); // true
// unRe.undo();
// console.log(unRe.get('x')); // 1
// unRe.redo();
// console.log(unRe.get('x')); // undefined
// console.log(!obj.hasOwnProperty('x')); // true
