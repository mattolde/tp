var Tree = function(value){
  this.value = value;
  this.children = [];
};

// pass in a new tree node and add to tree.
Tree.prototype.addChild = function(node){
  this.children.push(node);
};

Tree.prototype.containsBP = function(findValue){

};

// var treeDF = function(value){
//   tree.call(this, value);
// }

// treeDF.prototype = Object.create(tree.prototype);
// treeDF.prototype.constructor = treeDF;

// treeDF.prototype.containsDF = function(){

// };