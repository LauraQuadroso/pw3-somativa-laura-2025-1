import styles from './Input.module.css';

const Input = ({ type, name, id, placeholder, value, handlerChange }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{name}</label> 
            
            <input 
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handlerChange}
            />
        </div>
    );
}

export default Input;
