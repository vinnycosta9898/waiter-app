import React, { FormEvent, useState, useContext} from "react";

import Head from 'next/head';

import Image from 'next/image';

import Link from 'next/link';

import { Input } from '../../components/ui/Input/index';

import { Button } from '../../components/ui/Button/index';

import { AuthContext } from "../../context/AuthContext";

import { toast } from 'react-toastify'

import logoImg from '../../../public/logo.svg';

import styles from '../../../styles/home.module.scss';

export default function SignUp(){

  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent){
    event.preventDefault();

    if(name === "" || email === "" || password === ""){
      toast.error("Preencha todos os campos")
      return;
    }

    setLoading(true);

    let data = {
      name,
      email, 
      password
    }

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title> Faça seu Cadastro agora!</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
          <h1>Criando sua Conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite o seu Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="on"
            />

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
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <a className={styles.text}> Já possui uma conta? Faça Login </a>
          </Link>

        </div>

      </div>
    </>
  )
}
