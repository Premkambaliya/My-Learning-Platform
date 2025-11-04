
import { CourseProvider } from "./Context/CoursesContext";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./components/Common/Navbar";
import RoutesConfig from "./Routes";
import Footer from "./components/Common/Footer";
import ErrorBoundary from "./components/Common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CourseProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pb-16">
              <RoutesConfig />
            </main>
            <Footer />
          </div>
        </CourseProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;