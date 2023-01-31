import "./App.css";
import { Button, Card, FlexLayout, Grid, List, Modal, PageHeader, TextStyles } from "@cedcommerce/ounce-ui";
import Login from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const columnData = [
    {
      align: "center",
      dataIndex: "id",
      key: "id",
      title: "ID",
    },
    {
      align: "center",
      dataIndex: "body",
      key: "body",
      title: "Body",
    },
    {
      align: "center",
      dataIndex: "reactions",
      key: "reactions",
      title: "Reactions",
    },
    {
      align: "center",
      dataIndex: "tags",
      key: "tags",
      title: "Tags",
    },
    {
      align: "center",
      dataIndex: "title",
      key: "title",
      title: "Title",
    },
    {
      align: "center",
      dataIndex: "userId",
      key: "userId",
      title: "User ID",
      width: 100,
    },
    {
      align: "center",
      key: "operation",
      title: "Action",
      render: (e) => (
        <Button
          type="TextButton"
          content="View"
          onClick={() => {
            setIsModalOpen(true)
            setModalData(e);
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.posts));
  }, []);

  return (
    <div className="App">
      <Login />
      <Card>
        <PageHeader title="DummyJSON Posts" />
        <Grid columns={columnData} dataSource={data} />
      </Card>
      <Modal
        close={() => {
          setIsModalOpen(false);
        }}
        heading="Row Details"
        modalSize="medium"
        overlayClose
        open={isModalOpen}
      ><List type='disc'>{Object.entries(modalData).map(ele=><FlexLayout><TextStyles content={ele[0]} fontweight="extraBold"/>:<TextStyles content={ele[1]}/></FlexLayout>)}</List></Modal>
    </div>
  );
}

export default App;
