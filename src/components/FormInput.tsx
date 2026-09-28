import type { ValidationRuleType } from "./Form";

type FormInputProps = {
    idx: string,
    label: string,
    value: string,
    validationRules: ValidationRuleType[],
    onChange: ()=>{}
}


function FormInput({idx, label, value, validationRules, onChange}:FormInputProps) {
    return(
        <>
            <div className="d-flex align-items-center m-2">
                <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
                <input className={"form-control"} value={value} id={idx} name={idx} onChange={onChange}/>
            </div>
            <FormValidation validationRules={validationRules} value={value}/>
        </>
    )
}

export {FormInput};
