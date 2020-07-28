import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault';

function Page404(){
    return( 
        <PageDefault>
            <h1>Erro 404 - Página não encontrada</h1>

            <Link to="/">
                <h3>
                    Voltar à página inicial
                </h3>
            </Link>
        </PageDefault>
    )
}

export default Page404;