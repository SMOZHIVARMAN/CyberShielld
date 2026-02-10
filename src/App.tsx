import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Owasp from "./pages/Owasp";
import Hacker from "./pages/Hacker";
import Defender from "./pages/Defender";
import Phishing from "./pages/Phishing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SecurityLab from "./pages/SecurityLab"; // Import the new SecurityLab component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/owasp" element={<Owasp />} />
          <Route path="/hacker" element={<Hacker />} />
          <Route path="/defender" element={<Defender />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/about" element={<About />} />
          <Route path="/security-lab" element={<SecurityLab />} /> {/* New route for Security Lab */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
