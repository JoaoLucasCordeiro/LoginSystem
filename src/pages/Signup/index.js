import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Signup = () => {

  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const { signup } = useAuth()



  const handleSignup = () => {
    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Os E-mails não são iguais")
      return
    }

    const res = signup(email, senha)

    if(res) {
      setError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/")

  }
 

  return (
    <C.Container>
      <C.Label>Crie sua conta</C.Label>
      <C.Content>
        <Input type="email" placeholder="Digite seu E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
        <Input type="email" placeholder="Confime o  seu E-mail" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]} />
        <Input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
        <C.LabelError>{error}</C.LabelError>
        <Button text="Inscrever-se" onClick={handleSignup}/>
        <C.LabelSignup>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signup