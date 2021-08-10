import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          

          <meta name="keywords" content="tushar" />
          <meta name="description" content="tushar shisath" />
          <meta name="author" content="tushar shirsath" />

          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/custom.css" />

          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/bootstrap-select.js"></script>
          <script src="/js/inewsticker.js"></script>
          <script src="/js/bootsnav.js."></script>
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/baguetteBox.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
