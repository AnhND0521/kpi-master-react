import { CheckIcon } from "@heroicons/react/24/outline";

const ThemeColor = (props) => {
    const { value, selected, handleSelect } = props;
    return (
        <div className="relative cursor-pointer" onClick={handleSelect}>
            <div className='rounded-lg w-16 h-16' style={{
                backgroundColor: value
            }}></div>
            { selected && <div className="absolute top-14 left-14 rounded-full p-1" style={{
                backgroundColor: value
            }}>
                <CheckIcon color="white" className="w-4"/>
            </div>
            }
        </div>
    );
}

export default ThemeColor;