export default function Input({children, onChange, ...props}){
    function getValue(event){
        const value = event.target.value;
        onChange(children, value);
    }
    return (
        <div>
            <label htmlFor="input">{children}</label>
            <input {...props} onChange={getValue} required/>
        </div>
    );
}