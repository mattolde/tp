describe('Tree breadth first functionality', function(){

  beforeEach(function(){
    var tree = new Tree();
  });

  it('should add a child to the tree', function(){
    var child = new Tree(1);
    tree.addChild(child);
    expect(tree.children[0].value).to.equal(1);
  });
});