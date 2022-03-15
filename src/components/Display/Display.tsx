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
            <h2 className="text-center text-xl font-medium border-b-2 pb-2">
                Task List
            </h2>
            {todo.map((item) => (
                <div className="mt-5 bg-gray-200 rounded-md" key={item?.id}>
                    <div className="text-black font-medium p-5 flex items-center">
                        <p className='text-lg'>Task {item?.id +1}:  <span className='ml-2'>{item?.text}</span></p>
                        <button
                            onClick={() => removeItem(item?.id)}
                            className="bg-black py-1 px-3 text-white rounded-md ml-5 hover:scale-105 hover:bg-red-500 transition ease-in-out delay-50"
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
