import { useState, useEffect } from "react";
import { FormInput } from "./FormInput";

function FormValidation({validationRules,value}){

    let _msgs = "";

    validationRules.map((v,i,a)=>{
        if (!v.rule(value)) { _msgs += v.msg + " " }
    })

    return(<p>{_msgs}</p>)
}



type ValidationRuleType = {
    rule: (value:string)=>{},
    msg: string,
};

function Form() {

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");


    let validationRules : ValidationRuleType[] = [
        {
            rule: (value)=>{return(value.length > 3)},
            msg: "Długość musi być większa niż 3 znaków!",
        },
        {
            rule: (value)=>{return(value.length < 10)},
            msg: "Długość musi być mniejsza niż 10 znaków!"
        },
        {
            rule: (value)=>{return(value.includes("@"))},
            msg: "Pole musi zawierać znak @"
        }
    ]

    function formReset(){
        setLink("");
        setLabel("");
    }

    function formResetButtonClickHandler(e){
        e.preventDefault();
        formReset();
    }

    return(
    <form>
        <FormInput idx="link" 
            label="Odnośnik" 
            validationRules={validationRules} 
            value={link} 
            onChange={(e)=>{setLink(e.target.value)}}
        />

        <FormInput 
            idx="label" 
            label="Opis" 
            value={label} 
            validationRules={validationRules} 
            onChange={(e)=>{setLabel(e.target.value)}}
        />

        <button className={"btn btn-primary"}>Wyślij</button>
        <button onClick={formResetButtonClickHandler} className={"btn btn-danger"}>Reset</button>
        <pre>
            Link: {link}<br/>
            Label: {label}
        </pre>
    </form>
    )
}

export {Form, type ValidationRuleType};