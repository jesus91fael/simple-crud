import React from "react";
import Crud from "../../components/Crud";
import Header from "../../components/Header";
import Table from "../../components/Table";

function Home() {

  return (
    <>
      <Header />
      <main>
        <Crud />
        <Table />
      </main>
    </>
  );
}

export default Home;
