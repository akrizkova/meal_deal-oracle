import type { Combination } from '../types';
import { shopById } from '../data';

interface Props {
  combo: Combination;
  onDelete: (id: string) => void;
}

export function SavedCombinationCard({ combo, onDelete }: Props) {
  const shop = shopById[combo.shopId];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className={`${shop.colour} px-4 py-2 flex items-center justify-between`}>
        <span className="text-white font-semibold text-sm">{shop.displayName}</span>
        {combo.savedAt && (
          <span className="text-white/70 text-xs">
            {new Date(combo.savedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
            })}
          </span>
        )}
      </div>

      <div className="px-4 py-3 flex flex-col gap-2">
        {(['main', 'snack', 'drink'] as const).map((slot) => (
          <div key={slot} className="flex items-start gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-wide min-w-10 pt-0.5">
              {slot}
            </span>
            <span className="text-sm text-gray-800 font-medium leading-snug">
              {combo[slot].name}
            </span>
          </div>
        ))}
      </div>

      <div className="px-4 pb-3 flex justify-end">
        <button
          onClick={() => onDelete(combo.id)}
          className="text-xs text-red-400 active:text-red-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
