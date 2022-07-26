import { useState } from "react";
import Container from "../../components/container/Container";
import Table from "../../components/table/Table";
import { userData } from "../../data/user";
const Main = () => {
  const [tableSelected, setTableSelected] = useState<number[]>([])
  const columns = [
    {
      key: "__check__",
      title: null,
    },
    {
      key: "phone",
      title: "phone",
    },
    {
      key: "chance",
      title: "chance",
    },
    {
      key: "maxScore",
      title: "maxScore",
    },
    {
      key: "createAt",
      title: "createAt",
    },
  ];

  // const { x, y } = useScrollPosition(100, 0.5);
  // console.log(y);
  return (
    <Container>
      <h1>main</h1>
      <Table columns={columns} data={userData} tableSelected={tableSelected} setTableSelected={setTableSelected} />
    </Container>
  );
};

export default Main;
