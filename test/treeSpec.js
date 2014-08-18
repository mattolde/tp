describe('Tree main functions', function(){

  beforeEach(function(){
    tree = new Tree();
  });

  it('should add a child to the tree', function(){
    var child = new Tree(1);
    tree.addChild(child);
    expect(tree.children[0].value).to.equal(1);
  });

});

describe('Tree breadth first functionality', function(){

  beforeEach(function(){
    tree = new Tree();
    var childOne = new Tree(1);
    var childTwo = new Tree(2);
    tree.addChild(childOne);
    tree.addChild(childTwo);    
  });

  it('should not find value in tree', function(){
    expect(tree.containsBreadthFirst(3)).to.equal(false);
  });

  it('should find value in tree', function(){
    expect(tree.containsBreadthFirst(1)).to.equal(true);
  });

});

describe('Tree depth first functionality', function(){

  beforeEach(function(){
    tree = new Tree();
    var childOne = new Tree(1);
    var childTwo = new Tree(2);
    tree.addChild(childOne);
    tree.addChild(childTwo);    
  });

  it('should not find a value in tree', function(){
    expect(tree.containsDepthFirst(3)).to.equal(false);    
  });

  it('should find a value in tree', function(){
    expect(tree.containsDepthFirst(2)).to.equal(true);
  });

});