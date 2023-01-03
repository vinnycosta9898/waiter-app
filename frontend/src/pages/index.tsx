import React, { useContext, useState, FormEvent } from "react";

import Head from 'next/head';

import Image from 'next/image';

import Link from 'next/link';

import { Input } from '../components/ui/Input/index';

import { Button } from '../components/ui/Button/index';

import { AuthContext } from '../context/AuthContext';

import { toast } from 'react-toastify';

import { canSSRGuest } from '../utils/canSSRGuest';

import logoImg from '../../public/logo.svg';

import styles from '../../styles/home.module.scss';

export default function Home() {
  
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event : FormEvent){
    event.preventDefault();

    if(email === "" || password === ""){
      toast.error("Preencha todos os campos")
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title> Sujeito Pizza Faca seu login </title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite o seu Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="on"
            />

            <Input
              placeholder="Digite a sua Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}> Nao possui uma conta? Cadastre-se</a>
          </Link>

        </div>

      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest( async (ctx) => {
  return{
    props: {}
  }
})

