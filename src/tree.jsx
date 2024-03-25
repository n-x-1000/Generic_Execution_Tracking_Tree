import React, { useState, useRef } from 'react';
import './Tree.css';
import Arrow, { DIRECTION } from 'react-arrows';
import Popover from 'react-popover';

function TreeNode({ node, onClick }) {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);
  const nodeRef = useRef(null);
  const nodeId = `tree-node-${node.name}`;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick(node, !isOpen);
  };
  
  const handlePopoverToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className={`tree-node tree-node-${node.name}`} ref={nodeRef}>
      <Popover
        isOpen={isPopoverOpen}
        preferPlace="above"
        body={<div>{node.description}</div>}
        onOuterAction={() => setIsPopoverOpen(false)}
      >
        <button
          id={nodeId}
          className={`tree-node-button tree-node-button-${node.name}`}
          onClick={handleClick}
          onMouseEnter={handlePopoverToggle}
          onMouseLeave={handlePopoverToggle} 
        >
          {node.name}
        </button>
      </Popover>
      
      {isOpen && node.children && (
        <div>
          <ul id='unordered_list' style={{ listStyleType: 'none' }}>
            {node.children.map((child) => (
              <li key={child.name} className='child'>
                <TreeNode node={child} onClick={onClick} />
              </li>
            ))}
          </ul>
          
          {node.children.map((child) => (
            <Arrow
              key={`${node.name}-${child.name}`}
              from={{
                direction: DIRECTION.RIGHT,
                node: () => document.getElementById(nodeId),
                translation: [0, 0]
              }}
              to={{
                direction: DIRECTION.LEFT,
                node: () => document.getElementById(`tree-node-${child.name}`),
                translation: [0, 0]
              }}
              className="arrow" 
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Tree() {
  const [treeData, setTreeData] = useState({
    name: '.',
    description: 'This is the root node',
    isOpen: false,
    children: [
      {
        name: 'Research',
        description: 'Research Node',
        isOpen: false,
        children: [
          {
            name: 'External',
            description: 'External Research Node',
            isOpen: false,
            children: [
              {
                name: 'B2C',
                description: 'B2C Research Node',
                isOpen: false,
                children: [
                  {
                    name: 'online',
                    description: 'Online Node',
                    isOpen: false,
                    children: [],
                  },
                  {
                    name: 'Interview',
                    description: 'Interview Node',
                    isOpen: false,
                    children: [],
                  },
                  {
                    name: 'Public Data',
                    description: 'Public Data Node',
                    isOpen: false,
                    children: [],
                  },
                  {
                    name: 'Health',
                    description: 'Health Node',
                    isOpen: false,
                    children: [],
                  },
                ],
              },
              {
                name: 'B2B',
                description: 'B2B Research Node',
                isOpen: false,
                children: [],
              },
            ],
          },
          {
            name: 'Internal',
            description: 'Internal Research Node',
            isOpen: false,
            children: [],
          },
        ],
      },
      {
        name: 'Planning',
        description: 'Planning Node',
        isOpen: false,
        children: [
          {
            name: 'PRD',
            description: 'PRD Node',
            isOpen: false,
            children: [],
          },
          {
            name: 'Specs',
            description: 'Specs Node',
            isOpen: false,
            children: [],
          },
        ],
      },
      {
        name: 'Designing',
        description: 'Designing Node',
        isOpen: false,
        children: [
          {
            name: 'Hardware',
            description: 'Hardware Node',
            isOpen: false,
            children: [],
          },
          {
            name: 'Software',
            description: 'Software Node',
            isOpen: false,
            children: [],
          },
        ],
      },
      {
        name: 'Manufacturing',
        description: 'Manufacturing Node',
        isOpen: false,
        children: [
          {
            name: 'Material',
            description: 'Material Node',
            isOpen: false,
            children: [],
          },
          {
            name: 'Production',
            description: 'Production Node',
            isOpen: false,
            children: [],
          },
        ],
      },
      {
        name: 'SalesMarketing',
        description: 'Sales/Marketing Node',
        isOpen: false,
        children: [
          {
            name: 'Online',
            description: 'Online Node',
            isOpen: false,
            children: [],
          },
          {
            name: 'Dealership',
            description: 'Dealership Node',
            isOpen: false,
            children: [],
          },
        ],
      },
    ],
  });

  const handleClick = (clickedNode, parentIsOpen) => {
    const updatedData = {
      ...treeData,
      children: updateNode(treeData.children, clickedNode, parentIsOpen),
    };
    setTreeData(updatedData);
  };

  const updateNode = (nodes, clickedNode, parentIsOpen) => {
    return nodes.map((node) => {
      if (node.name === clickedNode.name) {
        return {
          ...node,
          isOpen: !parentIsOpen,
          children: node.children && node.children.map((child) => ({ ...child, isOpen: false })),
        };
      } else if (node.children) {
        return { ...node, children: updateNode(node.children, clickedNode, parentIsOpen) };
      }
      return node;
    });
  };



  
  return (
    <div className="tree-container">
      <TreeNode node={treeData} onClick={handleClick} />
    </div>
  );
}

export default Tree;
