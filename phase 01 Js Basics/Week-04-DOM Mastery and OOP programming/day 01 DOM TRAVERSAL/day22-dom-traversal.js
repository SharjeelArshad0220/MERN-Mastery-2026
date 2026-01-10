// 1. Simulate DOM structure with objects
const commentTree = {
  id: 'c1',
  text: 'Great article!',
  children: [
    { id: 'c1-1', text: 'Thanks!', children: [] },
    { id: 'c1-2', text: 'Agreed', children: [
      { id: 'c1-2-1', text: 'Me too', children: [] }
    ]}
  ]
};

// 2. Functions to implement:
function findCommentById(tree, id) {
  if (tree.id===id) {
    return { id: tree.id, text:tree.text, children:tree.children }
  }
  for (let index = 0; index < tree.children.length; index++) {
    const cmntObject = tree.children[index];
    const result=findCommentById(cmntObject,id);
    if(result){
        return result;
    }
  }
  return null;
}

function getParentComment(tree, childId) {
    for (let i = 0; i < tree.children.length; i++) {
        const element = tree.children[i];
        if (element.id===childId) {
            return tree;
        }
        else{
           const result =getParentComment(element,childId);
           if(result){return result};
        }
    }
    return null;
}

function getSiblingCount(tree, id) {
  const parent=getParentComment(tree,id);
 const result= parent?(parent.children.length-1):"No siblings found";
 return result;  
}

function getNestingLevel(tree, id) {
    const comment=findCommentById(tree,id);
    let count=0;
    if (comment) {
        let currentId=comment.id;
        while (true) {
        let parentComment=getParentComment(tree,currentId);
        if (parentComment) {
            count++;
            currentId=parentComment.id
        }
        else{
            break;
        }
    }
}
return count;
}

function deleteComment(tree, id) {
const comment=findCommentById(tree,id);
if (comment) {
    const parent=getParentComment(tree,id);
    if (parent) {
        let updatedParent=parent;
        let childrens=parent.children;
        childrens=childrens.filter((child)=>{
            return child.id!==id;
        });
        updatedParent.children=childrens;
        return updatedParent;
    }
    else{
        return "trying to delete root element.";
    }
}
else{
    return "comment not found";
}
}

// 3. Test all functions with console output
console.log("Finding c1-2-1:", findCommentById(commentTree, 'c1-2-1'));
console.log("Parent of c1-2-1:", getParentComment(commentTree, 'c1-2-1'));
console.log("Siblings of c1-1:", getSiblingCount(commentTree, 'c1-1'));
console.log("Nesting level of c1-2-1:", getNestingLevel(commentTree, 'c1-2-1'));
console.log(`"Deleted parent with id c1-2-1:",${deleteComment(commentTree,'c1-2-1')}\nAfter deletion:running findCommentById(commentTree, 'c1-2-1') the output is :${findCommentById(commentTree,'c1-2-1')}`);