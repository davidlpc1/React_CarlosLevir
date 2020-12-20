import { useCallback, useEffect, useState } from "react";
import api from "./services/api";

interface UserData {
  name:string;
  company:string;
}

export default function App() {
  const [ username, setUsername ] = useState('CarlosLevir')
  const [ userData, setUserData ] = useState<UserData>({ 
    name:'',
    company:'',
  })

  useEffect(() => {
    const localStorageUserData = localStorage.getItem('@reactapp/githubUserData')

    setUserData(JSON.parse(localStorageUserData || ''))
  },[])

  const alterInput = useCallback(event => 
    setUsername(event.target.value)
  ,[])

  async function getUserGithubData(){
    const { data } = await api.get(username);

    localStorage.setItem('@reactapp/githubUserData', JSON.stringify(data))
    setUserData(data);
  }

  return (
    <div>
      <input 
        type="text" 
        value={ username }
        onChange={alterInput}
      />
      <button onClick={getUserGithubData}>Pesquisar usuário</button>
      <div>{ userData.name }</div>
      <div>{ userData.company }</div>
    </div>
  );
}