import App from "./WeatherApp/App";
import { AppProvider } from "./WeatherApp/context/context";

export default function Index() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
