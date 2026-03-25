interface Props {
  label: string;
  active: boolean;
  onToggle: () => void;
}

export function PreferenceChip({ label, active, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
        active
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-600 border-gray-300'
      }`}
    >
      {label}
    </button>
  );
}
