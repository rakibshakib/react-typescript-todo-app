import React, { useRef } from 'react';

const TodoContainer = ({ addItem }: { addItem: (text: string) => void }) => {
    const getText = useRef<HTMLInputElement>(null);

    const addItems = () => {
        if (getText.current) {
            addItem(getText?.current?.value);
            getText.current.value = '';
        }   
    };
    return (
        <div className="m-5">
            <div className="flex justify-center items-center">
                <div className="inputBox border-2 border-gray-700 rounded-md">
                    <input
                        className="outline-0 p-2"
                        type="text"
                        ref={getText}
                    />
                    <button
                        onClick={addItems}
                        className="border-0 bg-black text-white p-2"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
