import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Table from "../../components/table/Table";
import useDataGetter from "../../hooks/useDataGetter";
import { rest } from "../../services/api";
import { ToJalali } from "../../utils/changeDate";
const Main = () => {
  const [tableSelected, setTableSelected] = useState<number[]>([]);
  const columns = [
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
      title: "max score",
    },
    {
      key: "totalScore",
      title: "total scores",
    },
    {
      key: "createAt",
      title: "createAt",
    },
  ];

  // const { x, y } = useScrollPosition(100, 0.5);
  // console.log(y);

  const { data }: any = useDataGetter(rest.user.getUser, "get", true);
  const [parseData, setParseData] = useState();
  useEffect(() => {
    if (data && data.length > 0) {
      const newData = data.map((i: any) => {
        return {
          ...i,
          createAt: ToJalali(i.createAt),
        };
      });

      setParseData(newData);
    }
  }, [data]);

  return (
    <Container>
      <h1>main</h1>
      <Table
        columns={columns}
        data={parseData || []}
        tableSelected={tableSelected}
        setTableSelected={setTableSelected}
        checkbox={true}
      />
    </Container>
  );
};

export default Main;
