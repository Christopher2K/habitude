import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { Home } from "@app/screens";

export default function App() {
  return (
    <ApplicationProvider theme={eva.light} {...eva}>
      <Home />
    </ApplicationProvider>
  );
}
