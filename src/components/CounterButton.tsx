
type CounterButtonProps = {
onClick: () => void;
disabled?: boolean;
label: string;
bgClass?: string;
}

const CounterButton = ({onClick, disabled = false , label, bgClass = "bg-black" } : CounterButtonProps) => {

    return (
        
        <>
          <button onClick={onClick}
                    disabled={disabled}
                    className={"disabled:bg-gray-600 text-white py-2 px-4 " + bgClass} >{label}</button>              
        </>

    );

}

export default CounterButton;