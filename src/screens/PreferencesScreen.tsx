import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PreferenceCategoryGroup } from '../components/PreferenceCategoryGroup';
import { shopById } from '../data';
import {
  ALL_MAIN_CATEGORIES,
  ALL_SNACK_CATEGORIES,
  ALL_DRINK_CATEGORIES,
} from '../types';
import type { MainCategory, SnackCategory, DrinkCategory } from '../types';

export function PreferencesScreen() {
  const { state, dispatch } = useApp();
  const shop = shopById[state.selectedShop!];

  const [mains, setMains] = useState<MainCategory[]>([...ALL_MAIN_CATEGORIES]);
  const [snacks, setSnacks] = useState<SnackCategory[]>([...ALL_SNACK_CATEGORIES]);
  const [drinks, setDrinks] = useState<DrinkCategory[]>([...ALL_DRINK_CATEGORIES]);

  function handleGenerate() {
    dispatch({
      type: 'SET_PREFERENCES',
      payload: { mains, snacks, drinks },
    });
  }

  return (
    <div className="flex flex-col min-h-svh pb-20">
      <div className={`${shop.colour} px-5 pt-10 pb-6`}>
        <button
          onClick={() => dispatch({ type: 'NAVIGATE', payload: 'shop' })}
          className="text-white/80 text-sm mb-3 flex items-center gap-1"
        >
          ‹ Back
        </button>
        <h2 className="text-2xl font-bold text-white">{shop.displayName}</h2>
        <p className="text-white/80 text-sm mt-1">Pick your preferences</p>
      </div>

      <div className="flex-1 px-5 pt-6">
        <PreferenceCategoryGroup
          label="Main"
          emoji="🥙"
          options={[...ALL_MAIN_CATEGORIES]}
          selected={mains}
          onChange={(v) => setMains(v as MainCategory[])}
        />
        <PreferenceCategoryGroup
          label="Snack"
          emoji="🍫"
          options={[...ALL_SNACK_CATEGORIES]}
          selected={snacks}
          onChange={(v) => setSnacks(v as SnackCategory[])}
        />
        <PreferenceCategoryGroup
          label="Drink"
          emoji="🥤"
          options={[...ALL_DRINK_CATEGORIES]}
          selected={drinks}
          onChange={(v) => setDrinks(v as DrinkCategory[])}
        />
      </div>

      <div className="px-5 pt-2">
        <button
          onClick={handleGenerate}
          className={`w-full py-4 rounded-2xl text-white font-bold text-base ${shop.colour} active:opacity-80 transition-opacity`}
        >
          Build my meal deal →
        </button>
      </div>
    </div>
  );
}
