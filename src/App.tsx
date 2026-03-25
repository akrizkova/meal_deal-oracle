import { AppProvider, useApp } from './context/AppContext';
import { ShopScreen } from './screens/ShopScreen';
import { PreferencesScreen } from './screens/PreferencesScreen';
import { CombinationScreen } from './screens/CombinationScreen';
import { SavedScreen } from './screens/SavedScreen';
import { NavBar } from './components/NavBar';

function AppContent() {
  const { state } = useApp();

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-svh relative">
      {state.screen === 'shop' && <ShopScreen />}
      {state.screen === 'preferences' && <PreferencesScreen />}
      {state.screen === 'combination' && <CombinationScreen />}
      {state.screen === 'saved' && <SavedScreen />}
      <NavBar />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
