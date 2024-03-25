import React, { useState, useRef, useEffect } from "react";
import "./Tree.css";
import Arrow, { DIRECTION } from "react-arrows";
import Popover from "react-popover";
import Chart from "chart.js/auto";

function TreeNode({ node, onClick }) {
    const [isOpen, setIsOpen] = useState(node.isOpen || false);
    const nodeRef = useRef(null);
    const nodeId = `tree-node-${node.name}`;
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [chartInstance, setChartInstance] = useState(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick(node, !isOpen);
    };

    const handlePopoverToggle = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    useEffect(() => {
        if (isOpen) {
            if (!chartInstance) {
                const ctx = document.getElementById(`chart-${nodeId}`).getContext("2d");
                const newChartInstance = new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: ["Positive", "Negative", "Comments"],
                        datasets: [
                            {
                                label: "value",
                                backgroundColor: "rgb(54, 162, 235)",
                                data: [20, 30, 45],
                            },
                        ],
                    },
                    options: {
                        indexAxis: "y",
                    },
                });
                setChartInstance(newChartInstance);
            }
        } else {
            if (chartInstance) {
                chartInstance.destroy();
                setChartInstance(null);
            }
        }
    }, [isOpen, nodeId]);

    return (
        <div className={`tree-node tree-node-${node.name}`} ref={nodeRef}>
            <Popover
                isOpen={isPopoverOpen}
                preferPlace="above"
                body={
                    <canvas
                        id={`chart-${nodeId}`}
                        style={{
                            width: "300px",
                            height: "200px",
                            maxWidth: "300px",
                            maxHeight: "200px",
                        }}
                    ></canvas>
                }
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
                    <ul id="unordered_list" style={{ listStyleType: "none" }}>
                        {node.children.map((child) => (
                            <li key={child.name} className="child">
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
                                translation: [0, 0],
                            }}
                            to={{
                                direction: DIRECTION.LEFT,
                                node: () => document.getElementById(`tree-node-${child.name}`),
                                translation: [0, 0],
                            }}
                            className="arrow"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TreeNode;
