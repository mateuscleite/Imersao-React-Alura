import React from 'react';
import {FormFieldContainer, FormFieldLabel} from './styles';

function FormField({value, label, onChange, type}){
    return(
        <FormFieldLabel>
            {label}
            <FormFieldContainer
                onChange={onChange}
                type={type}
                value= {value} 
            />
        </FormFieldLabel>
    )
};

export default FormField;