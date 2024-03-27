import React from "react";

interface LoadingProps {
    type?: string;
}

const Loading: React.FC<LoadingProps> = ({ type }) => {
    return (
        <div className="flex-center h-screen">
            <div className={`flex-center animate-spin rounded-full h-12 w-12 border-t-4  ${type !== 'grow' ? "border-green-300" : "border-red-300"}`}></div>
        </div>
    );
};

export default Loading;
