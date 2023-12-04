import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";


const theme = createTheme({});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page)=>page)
  return(
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
}
