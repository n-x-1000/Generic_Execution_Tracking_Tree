import React, { useState } from "react";

const TreeData = () => {
    const [treeData, setTreeData] = useState({
        name: ".",
        description: "This is the root node",
        isOpen: true,
        children: [
            {
                name: "Research",
                description: "Research Node",
                isOpen: false,
                children: [
                    {
                        name: "External",
                        description: "External Research Node",
                        isOpen: false,
                        children: [
                            {
                                name: "B2C",
                                description: "B2C Research Node",
                                isOpen: false,
                                children: [],
                            },
                            {
                                name: "Interview",
                                description: "Interview Node",
                                isOpen: false,
                                children: [],
                            },
                            {
                                name: "Public Data",
                                description: "Public Data Node",
                                isOpen: false,
                                children: [],
                            },
                            {
                                name: "Health",
                                description: "Health Node",
                                isOpen: false,
                                children: [],
                            },
                        ],
                    },
                    {
                        name: "Internal",
                        description: "Internal Research Node",
                        isOpen: false,
                        children: [],
                    },
                ],
            },
            {
                name: "Planning",
                description: "Planning Node",
                isOpen: false,
                children: [
                    {
                        name: "PRD",
                        description: "PRD Node",
                        isOpen: false,
                        children: [],
                    },
                    {
                        name: "Specs",
                        description: "Specs Node",
                        isOpen: false,
                        children: [],
                    },
                ],
            },
            {
                name: "Designing",
                description: "Designing Node",
                isOpen: false,
                children: [
                    {
                        name: "Hardware",
                        description: "Hardware Node",
                        isOpen: false,
                        children: [],
                    },
                    {
                        name: "Software",
                        description: "Software Node",
                        isOpen: false,
                        children: [],
                    },
                ],
            },
            {
                name: "Manufacturing",
                description: "Manufacturing Node",
                isOpen: false,
                children: [
                    {
                        name: "Material",
                        description: "Material Node",
                        isOpen: false,
                        children: [],
                    },
                    {
                        name: "Production",
                        description: "Production Node",
                        isOpen: false,
                        children: [],
                    },
                ],
            },
            {
                name: "SalesMarketing",
                description: "Sales/Marketing Node",
                isOpen: false,
                children: [
                    {
                        name: "Online",
                        description: "Online Node",
                        isOpen: false,
                        children: [],
                    },
                    {
                        name: "Dealership",
                        description: "Dealership Node",
                        isOpen: false,
                        children: [],
                    },
                ],
            },
        ],
    });

    return treeData;
};

export default TreeData;
