import React from "react";
import "antd/dist/antd.css";
import { Layout, Typography } from "antd";

export default () => {
  return (
    <Layout.Content
      style={{
        backgroundColor: "#F6EEB5",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        textAlign: "center",
        width: "100vw",
      }}
    >
      <Typography.Title style={{ fontSize: "6rem", margin: "0" }}>
        &#128161; &#129509; &#127782;
      </Typography.Title>
    </Layout.Content>
  );
};
