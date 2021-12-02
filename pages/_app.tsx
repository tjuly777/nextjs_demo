import '../styles/globals.scss';
import { AppProps } from 'next/app';

// トップレベルコンポーネント、変更時はサーバー再起動の必要あり
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
