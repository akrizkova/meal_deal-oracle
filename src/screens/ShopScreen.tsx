import { shops } from '../data';
import { useApp } from '../context/AppContext';
import type { ShopId } from '../types';

const shopEmoji: Record<ShopId, string> = {
  tesco: '🔵',
  sainsburys: '🟠',
  morrisons: '🟡',
};

export function ShopScreen() {
  const { dispatch } = useApp();

  return (
    <div className="flex flex-col min-h-svh pb-20">
      <div className="flex flex-col items-center px-5 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Meal Deal Picker</h1>
        <p className="text-gray-500 text-sm">Choose your shop to get started</p>
      </div>

      <div className="flex flex-col gap-4 px-5">
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => dispatch({ type: 'SELECT_SHOP', payload: shop.id })}
            className={`flex items-center gap-4 p-5 rounded-2xl border-2 ${shop.borderColour} bg-white shadow-sm active:scale-95 transition-transform`}
          >
            <span className="text-4xl">{shopEmoji[shop.id]}</span>
            <span className={`text-xl font-bold ${shop.textColour}`}>{shop.displayName}</span>
            <span className="ml-auto text-gray-400 text-lg">›</span>
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-auto mb-4 px-5">
        Prices and availability may vary. Items shown are representative of typical meal deal ranges.
      </p>
    </div>
  );
}
