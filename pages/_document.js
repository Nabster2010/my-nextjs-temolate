import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale || "ar" };
  }

  render() {
    const dir = this.props.locale === "ar" ? "rtl" : "ltr";
    const lang = this.props.locale === "ar" ? "ar" : "en";
    return (
      <Html dir={dir} lang={lang}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
