import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "@/lib/i18n";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Home />
      </I18nProvider>
    </QueryClientProvider>
  );
}
