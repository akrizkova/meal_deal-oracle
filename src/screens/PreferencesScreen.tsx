import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PreferenceCategoryGroup } from '../components/PreferenceCategoryGroup';
import { shopById } from '../data';
import type { MainCategory, SnackCategory, DrinkCategory, DietaryType } from '../types';

const DIETARY_OPTIONS: { value: DietaryType; label: string }[] = [
  { value: 'none',         label: 'No preference' },
  { value: 'vegetarian',  label: 'Vegetarian' },
  { value: 'vegan',       label: 'Vegan' },
  { value: 'pescetarian', label: 'Pescetarian' },
];

type ExtraKey = 'glutenFree' | 'dairyFree' | 'lactoseFree' | 'halal' | 'nutFree' | 'highProtein' | 'lowCalorie';

const EXTRA_FILTERS: { key: ExtraKey; label: string }[] = [
  { key: 'glutenFree',   label: 'Gluten-free' },
  { key: 'dairyFree',    label: 'Dairy-free' },
  { key: 'lactoseFree',  label: 'Lactose-free' },
  { key: 'halal',        label: 'Halal' },
  { key: 'nutFree',      label: 'Nut-free' },
  { key: 'highProtein',  label: 'High protein' },
  { key: 'lowCalorie',   label: 'Low calorie' },
];

export function PreferencesScreen() {
  const { state, dispatch } = useApp();
  const shop = shopById[state.selectedShop!];

  // Only show categories that actually exist at this shop
  const shopMains  = [...new Set(shop.items.filter(i => i.slot === 'main').map(i => i.category))]  as MainCategory[];
  const shopSnacks = [...new Set(shop.items.filter(i => i.slot === 'snack').map(i => i.category))] as SnackCategory[];
  const shopDrinks = [...new Set(shop.items.filter(i => i.slot === 'drink').map(i => i.category))] as DrinkCategory[];

  // Initialise selection from saved prefs, intersecting with what this shop actually stocks
  const initMains  = state.preferences.mains.filter(c  => shopMains.includes(c));
  const initSnacks = state.preferences.snacks.filter(c => shopSnacks.includes(c));
  const initDrinks = state.preferences.drinks.filter(c => shopDrinks.includes(c));

  const [mains, setMains]     = useState<MainCategory[]>(initMains.length  > 0 ? initMains  : shopMains);
  const [snacks, setSnacks]   = useState<SnackCategory[]>(initSnacks.length > 0 ? initSnacks : shopSnacks);
  const [drinks, setDrinks]   = useState<DrinkCategory[]>(initDrinks.length > 0 ? initDrinks : shopDrinks);
  const [dietary, setDietary] = useState<DietaryType>(state.preferences.dietary);
  const [extras, setExtras]   = useState<Record<ExtraKey, boolean>>({
    glutenFree:  state.preferences.glutenFree,
    dairyFree:   state.preferences.dairyFree,
    lactoseFree: state.preferences.lactoseFree,
    halal:       state.preferences.halal,
    nutFree:     state.preferences.nutFree,
    highProtein: state.preferences.highProtein,
    lowCalorie:  state.preferences.lowCalorie,
  });

  function toggleExtra(key: ExtraKey) {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const canGenerate = mains.length > 0 && snacks.length > 0 && drinks.length > 0;

  function handleGenerate() {
    if (!canGenerate) return;
    dispatch({
      type: 'SET_PREFERENCES',
      payload: { mains, snacks, drinks, dietary, ...extras },
    });
  }

  return (
    <div className="flex flex-col min-h-svh pb-20">
      {/* Header */}
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

      <div className="flex-1 px-5 pt-6 max-w-4xl w-full mx-auto space-y-6">

        {/* ── Section 1: Diet type ───────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Diet type <span className="normal-case font-normal">— pick one</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {DIETARY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDietary(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  dietary === opt.value
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-500 border-gray-200'
                }`}
              >
                {dietary === opt.value && <span className="mr-1 text-xs">✓</span>}
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Section 2: Intolerances & extras ──────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Intolerances &amp; preferences <span className="normal-case font-normal">— pick any</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {EXTRA_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => toggleExtra(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  extras[f.key]
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-gray-500 border-gray-200'
                }`}
              >
                {extras[f.key] && <span className="mr-1 text-xs">✓</span>}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Section 3: Categories ──────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Item categories <span className="normal-case font-normal">— only selected types will appear</span>
          </p>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <PreferenceCategoryGroup
              label="Main"
              emoji="🥙"
              options={shopMains}
              selected={mains}
              onChange={(v) => setMains(v as MainCategory[])}
            />
            <PreferenceCategoryGroup
              label="Snack"
              emoji="🍫"
              options={shopSnacks}
              selected={snacks}
              onChange={(v) => setSnacks(v as SnackCategory[])}
            />
            <PreferenceCategoryGroup
              label="Drink"
              emoji="🥤"
              options={shopDrinks}
              selected={drinks}
              onChange={(v) => setDrinks(v as DrinkCategory[])}
            />
          </div>
        </div>

      </div>

      <div className="px-5 pt-4 max-w-4xl w-full mx-auto">
        {!canGenerate && (
          <p className="text-sm text-red-500 mb-2 text-center">
            Please select at least one option for each category.
          </p>
        )}
        {canGenerate && state.noComboError && (
          <div className="mb-3 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 text-center">
            No items match your current filters at {shop.displayName}. Try removing some restrictions or selecting more categories.
          </div>
        )}
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className={`w-full py-4 rounded-2xl text-white font-bold text-base transition-opacity ${
            canGenerate ? `${shop.colour} active:opacity-80` : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Build my meal deal →
        </button>
      </div>
    </div>
  );
}
