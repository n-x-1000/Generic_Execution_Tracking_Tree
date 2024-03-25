import React, { useState } from "react";

const TreeData = () => {
    const [treeData, setTreeData] = useState({
        name: ".",
        description: "This is the root node",
        isClickable: false,
        isHoverable:false,
        isOpen: true,
        children: [
            {
                name: "Research",
                description: "Research Node",
                isOpen: false,
                isClickable: true,
                isHoverable:true,
                children: [
                    {
                        name: "External",
                        description: "External Research Node",
                        isClickable: true,
                        isHoverable:true,
                        isOpen: false,
                        children: [
                            {
                                name: "B2B",
                                description: "B2B Research Node",
                                isOpen: false,
                                isClickable: true,
                                isHoverable:true,
                                children: [],
                            },
                            {
                                name: "B2C",
                                description: "B2C Research Node",
                                isOpen: false,
                                isClickable: true,
                                isHoverable:true,
                                children: [
                                    {
                                        name: "Online",
                                        description: "Online Node",
                                        isOpen: false,
                                        isClickable: true,
                                        isHoverable:true,
                                        children: [],
                                    },
                                    {
                                        name: "Interview",
                                        description: "Interview Node",
                                        isOpen: false,
                                        isClickable: true,
                                        isHoverable:true,
                                        children: [],
                                    },
                                    {
                                        name: "Public Data",
                                        description: "Public Data Node",
                                        isOpen: false,
                                        isClickable: true,
                                        isHoverable:true,
                                        children: [],
                                    },
                                    {
                                        name: "Health",
                                        description: "Health Node",
                                        isOpen: false,
                                        isClickable: true,
                                        isHoverable:true,
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Internal",
                        description: "Internal Research Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                ],
            },
            {
                name: "Planning",
                description: "Planning Node",
                isOpen: false,
                isClickable: true,
                isHoverable:true,
                children: [
                    {
                        name: "PRD",
                        description: "PRD Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                    {
                        name: "Specs",
                        description: "Specs Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                ],
            },
            {
                name: "Designing",
                description: "Designing Node",
                isOpen: false,
                isClickable: true,
                isHoverable:true,
                children: [
                    {
                        name: "Hardware",
                        description: "Hardware Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                    {
                        name: "Software",
                        description: "Software Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                ],
            },
            {
                name: "Manufacturing",
                description: "Manufacturing Node",
                isOpen: false,
                isClickable: true,
                isHoverable:true,
                children: [
                    {
                        name: "Material",
                        description: "Material Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                    {
                        name: "Production",
                        description: "Production Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                ],
            },
            {
                name: "SalesMarketing",
                description: "Sales/Marketing Node",
                isOpen: false,
                isClickable: true,
                isHoverable:true,
                children: [
                    {
                        name: "online",
                        description: "Online Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                    {
                        name: "Dealership",
                        description: "Dealership Node",
                        isOpen: false,
                        isClickable: true,
                        isHoverable:true,
                        children: [],
                    },
                ],
            },
        ],
    });

    return treeData;
};

export default TreeData;
