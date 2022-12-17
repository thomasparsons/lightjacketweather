import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Layout, Typography } from "antd";
import "antd/dist/antd.css";

const appName = "Light Jacket Weather";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export default ({ children, title }: Props) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`${appName}${title && ` | ${title}`}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={appName} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        {/* this sets the color of url bar */}
        <meta name="theme-color" content="#90cdf4" />
      </Head>

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
        {children ? (
          children
        ) : (
          <>
            <Image src="/logo.svg" width="100%" height="50vw" alt={appName} />
            <Typography.Title style={{ fontSize: "6rem", margin: "2rem 0 0" }}>
              &#128161; &#129509; &#127782;
            </Typography.Title>
          </>
        )}
      </Layout.Content>
    </>
  );
};
