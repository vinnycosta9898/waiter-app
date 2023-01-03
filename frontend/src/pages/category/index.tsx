import { useState, FormEvent } from 'react';

import styles from './styles.module.scss';

import Head from 'next/head';

import { Header } from '../../components/Header';

import { setupAPIClient } from '../../services/api';

import { canSSRAUth } from '../../utils/canSSRAuth';

import { toast } from 'react-toastify';

export default function Category(){

    const [name, setName] = useState("");

    async function handleRegister(event: FormEvent){
        event.preventDefault();
        
        if(name === ""){
            return;
        }

        const apiClient = setupAPIClient();
        await apiClient.post("/category", {
            name: name
        })
        
        toast.success("Categoria Cadastrada com sucesso!")
        setName("");
    }
    return(
        <>
        <Head>
            <title>Nova Categoria - Sujeito Pizza</title>
        </Head>
        <div>
            <Header/>
            <main className={styles.container}>
                <h1>Cadastrar Categorias</h1>
                <form className={styles.form}
                onSubmit={handleRegister}>
                    <input 
                    type="text"
                    placeholder="Digite o nome da Categoria"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    <button 
                    type="submit"
                    className={styles.buttonAdd}>
                        Cadastrar
                    </button>
                </form>
            </main>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAUth(async (ctx) => {
    return{
        props:{}
    }
})