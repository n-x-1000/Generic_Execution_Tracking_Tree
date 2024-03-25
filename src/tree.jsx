import React, { useState } from "react";
import TreeNode from "./TreeNode";
import TreeData from "./TreeData";

function Tree() {
    const treeData = TreeData();
    const [data, setData] = useState(treeData);

    const handleClick = (clickedNode, parentIsOpen) => {
        const updatedData = {
            ...data,
            children: updateNode(data.children, clickedNode, parentIsOpen),
        };
        setData(updatedData);
    };

    const updateNode = (nodes, clickedNode, parentIsOpen) => {
        return nodes.map((node) => {
            if (node.name === clickedNode.name) {
                return {
                    ...node,
                    isOpen: !parentIsOpen,
                    children:
                        node.children &&
                        node.children.map((child) => ({ ...child, isOpen: false })),
                };
            } else if (node.children) {
                return { ...node, children: updateNode(node.children, clickedNode, parentIsOpen) };
            }
            return node;
        });
    };

    return (
        <div className="tree-container">
            <TreeNode node={data} onClick={handleClick} />
        </div>
    );
}

export default Tree;
