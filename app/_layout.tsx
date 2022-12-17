import { Children } from "expo-router";
import { NativeBaseProvider } from "native-base";

const Layout = () => {
  return (
    <NativeBaseProvider>
      <Children />
    </NativeBaseProvider>
  );
};

export default Layout;
