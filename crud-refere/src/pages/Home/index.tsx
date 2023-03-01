import React, {useEffect, useState} from "react";
import Crud from "../../components/Crud";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { api } from "../../lib/axios";

function Home() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("dados").then((response: any) => {
      setDados(response.data)
    })
  }, [])

  const deleteDado = (id: number) => {
    setDados((prevState) =>
      prevState.filter((_, prevStateIndex) => prevStateIndex !== id)
    );
  };

  return (
  
    <>
      <Header />
      <main>
        <Crud />
        <Table dados={dados} onDelete={deleteDado(id)}/>
      </main>
    </>
  );
}

export default Home;
