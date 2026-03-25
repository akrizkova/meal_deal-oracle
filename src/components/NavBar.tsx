import { useApp } from '../context/AppContext';
import type { Screen } from '../context/AppContext';

export function NavBar() {
  const { state, dispatch } = useApp();
  const savedCount = state.savedCombinations.length;

  function nav(screen: Screen) {
    dispatch({ type: 'NAVIGATE', payload: screen });
  }

  const canGoToCombination =
    state.screen !== 'shop' && state.screen !== 'preferences' && state.currentCombination;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-10">
      <button
        onClick={() => {
          if (state.screen === 'saved') {
            if (canGoToCombination) nav('combination');
            else nav('shop');
          } else {
            nav('shop');
          }
        }}
        className={`flex-1 flex flex-col items-center py-3 gap-0.5 text-xs font-medium transition-colors ${
          state.screen !== 'saved' ? 'text-gray-900' : 'text-gray-400'
        }`}
      >
        <span className="text-xl">🥪</span>
        <span>Picker</span>
      </button>
      <button
        onClick={() => nav('saved')}
        className={`flex-1 flex flex-col items-center py-3 gap-0.5 text-xs font-medium transition-colors relative ${
          state.screen === 'saved' ? 'text-gray-900' : 'text-gray-400'
        }`}
      >
        <span className="text-xl relative">
          ❤️
          {savedCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold leading-none">
              {savedCount > 9 ? '9+' : savedCount}
            </span>
          )}
        </span>
        <span>Saved</span>
      </button>
    </nav>
  );
}
