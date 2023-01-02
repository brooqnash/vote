import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { DogContextProvider } from "../context/DogContext";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DogContextProvider>
        <Component {...pageProps} />
      </DogContextProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
