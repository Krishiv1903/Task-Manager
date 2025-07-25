import React from 'react'

const Progress = ({ progress, status }) => {
    const getColor = () => {
        switch(status) {
            case "In Progress":
                return "text-yellow-500 bg-yellow-200 border border-yellow-500/10";

            case "Completed":
                return "text-lime-600 bg-lime-200 border border-lime-600/10";

            default:
                return "text-red-600 bg-red-200 border border-red-600/10";
        }
    };

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className={`${getColor()} h-1.5 rounded-full text-center text-xs font-medium`} style={{ width: `${progress}%` }}></div>
        </div>
    )
}

export default Progress
