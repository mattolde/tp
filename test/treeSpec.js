describe('Tree breadth first functionality', function(){

  beforeEach(function(){
    tree = new Tree();
  });

  it('should add a child to the tree', function(){
    var child = new Tree(1);
    tree.addChild(child);
    expect(tree.children[0].value).to.equal(1);
  });

  it('should not find value in tree', function(){
    var childOne = new Tree(1);
    var childTwo = new Tree(2);
    tree.addChild(childOne);
    tree.addChild(childTwo);
    expect(tree.containsBreadthFirst(3)).to.equal(false);
  });

  it('should find value in tree', function(){
    var childOne = new Tree(1);
    var childTwo = new Tree(2);
    tree.addChild(childOne);
    tree.addChild(childTwo);
    expect(tree.containsBreadthFirst(1)).to.equal(true);
  });

});

describe('Tree depth first functionality', function(){

  beforeEach(function(){
    tree = new Tree();
  });

  it('should not find a value in tree', function(){
    var childOne = new Tree(1);
    var childTwo = new Tree(2);
    tree.addChild(childOne);
    tree.addChild(childTwo);
    expect(tree.containsDepthFirst(3)).to.equal(false);    
  });

});