import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper, FormHeader} from '../styles';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Title } from '../../../components/Carousel/styles';
import Button from '../../../components/Button'

function NewCategory(){
    const initialValues = {
        categoryTitle: 'Título',
        categoryColor: '#c9c602',
        description: 'Descrição',
        url: 'URL'
    }
    const [values, setValues] = useState(initialValues);

    function setValue(field, value){
        setValues({
            ...values,
            [field]: value
        })
    }

    return( 
        <PageDefault>
            <FormWrapper>

                <FormHeader>
                    Nova categoria
                </FormHeader>

                    {/* Nome */}
                    <FormField 
                        value={values.categoryTitle}
                        type="text"
                        onChange={function TitleHandler(eventInfo) {
                            setValue('categoryTitle', eventInfo.target.value)
                            console.log(values.categoryTitle)
                        }}
                    />

                    {/* Cor */}
                    <FormField
                        label="Cor: " 
                        type="color"
                        value={values.categoryColor}
                        onChange={function ColorHandler(eventInfo) {
                            setValue('categoryColor', eventInfo.target.value)
                            console.log(values.categoryColor)
                        }}
                    />
                    <Title style={{ backgroundColor: values.categoryColor || 'red' }}>
                        {values.categoryTitle}
                    </Title>
                
                    
                <Link to="/">
                    <h3>
                        Voltar à página inicial
                    </h3>
                </Link>
            
            </FormWrapper>
        </PageDefault>
    )
}

export default NewCategory;