var Tree = function(value){
  this.value = value;
  this.children = [];
};

// pass in a new tree node and add to tree.
Tree.prototype.addChild = function(node){
  this.children.push(node);
};

Tree.prototype.containsBP = function(findValue){
  var queue = [];
  var node = this;

  while(node){
  
    if(node.value === findValue){
      return true;
    }

    // add nodes children to queue
    for(var i=0; i < node.children.length; i++){
      queue.unshift(node.children[i]);
    }
  
    // remove node from queue
    node = queue.pop();    
  }

  return false;
};