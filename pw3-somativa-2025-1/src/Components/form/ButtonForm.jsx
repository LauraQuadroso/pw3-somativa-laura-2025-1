import style from './ButtonForm.module.css'
const ButtonForm=({label})=>{
    return(
<div className={style.button_form}>
    <button>
     {label}
    </button>
</div>
    )
}
export default ButtonForm