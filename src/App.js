// Context Provider Import
import { AppThemeProvider } from './components/context/AppThemeContext';

// Component Import
import ThemeWrapper from './components/context/ThemeWrapper';

const App = () => {
  return (
    <AppThemeProvider>
      <ThemeWrapper />
    </AppThemeProvider>
  );
};

export default App;