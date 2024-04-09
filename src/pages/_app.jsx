import Layout from "@/Layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import { createEmotionCache } from "@/config/create-emotion-cache";
import "../../styles/globals.css";
import { useRouter } from "next/router";
import Loading from "@/components/components/Loading";

export default function App(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        {router.pathname ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Loading />
        )}
      </CacheProvider>
    </Provider>
  );
}
