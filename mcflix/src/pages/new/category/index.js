import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function NewCategory(){
    return( 
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <Link to="/">
                <h3>
                    Voltar à página inicial
                </h3>
            </Link>
        </PageDefault>
    )
}

export default NewCategory;