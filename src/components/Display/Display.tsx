import { AiFillDelete } from 'react-icons/ai';
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
            <div className='flex justify-center items-center'>
                {todo.map((item) => (
                    <div className="mt-5 bg-gray-200 rounded-md" key={item?.id}>
                        <div className="text-black font-medium p-5 flex items-center">
                            <p className="text-lg">
                                Task {item?.id + 1}:{' '}
                                <span className="ml-2">{item?.text}</span>
                            </p>
                            <span
                                onClick={() => removeItem(item?.id)}
                                className="rounded-md ml-5  cursor-pointer "
                            >
                                <AiFillDelete className="text-xl hover:text-red-600 hover:scale-150 transition ease-in-out delay-50" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Display;
