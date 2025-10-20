import React from "react";
import Layout from "@theme/Layout";

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.5rem" }}>صفحه‌ای که دنبالشی پیدا نشد.</p>
        <a
          href="/"
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--ifm-color-primary)",
            color: "var(--ifm-background-color)",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
    </Layout>
  );
}
