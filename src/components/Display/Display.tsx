import React from 'react';
interface TODO {
    id: number;
    text: string;
}
const Display = ({
    todo,
    removeItem,
}: {
    todo: TODO[];
    removeItem: (id: number) => void;
}) => {
    return (
        <div>
            <h2 className="text-center text-xl font-medium border-b-2">
                Task List
            </h2>
            {todo.map((item) => (
                <div className="mt-2 bg-gray-200 rounded-md" key={item?.id}>
                    <div className="text-black font-medium p-5 flex items-center">
                        <p>Task Name:  {item?.text}</p>
                        <button
                            onClick={() => removeItem(item?.id)}
                            className="bg-red-500 p-2 text-white rounded-md ml-5"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Display;
