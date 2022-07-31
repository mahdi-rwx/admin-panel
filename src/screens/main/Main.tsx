import { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import Container from "../../components/container/Container";
import Dialog from "../../components/Dialog/Dialog";
import Table from "../../components/table/Table";
import useDataGetter from "../../hooks/useDataGetter";
import useToggle from "../../hooks/useToggle";
import { rest } from "../../services/api";
import { ToJalali } from "../../utils/changeDate";
import ActionTable from "./components/ActionTable";
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
      key: "run",
      title: "run",
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
  const actionsTable = [
    {
      key: "action1",
      title: "actions",
      content: (id: Number) => {
        return <ActionTable id={id} />;
      },
    },
  ];

  // const { x, y } = useScrollPosition(100, 0.5);
  // console.log(y);

  const { data, loading, error }: any = useDataGetter(
    rest.user.getUser,
    "get",
    true
  );
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
  // const { close, state, toggle } = useToggle(true);
  return (
    <Container>
      <h1>main</h1>
      <Table
        columns={columns}
        data={parseData || []}
        tableSelected={tableSelected}
        setTableSelected={setTableSelected}
        checkbox={true}
        loading={loading}
        actions={actionsTable}
        error={error}
      />
      {/* <Dialog open={state} IsClose={close}>
        <Dialog.Header>hello header</Dialog.Header>
      </Dialog> */}
    </Container>
  );
};

export default Main;
