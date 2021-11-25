import '../styles/globals.css';

// トップレベルコンポーネント、変更時はサーバー再起動の必要あり
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
