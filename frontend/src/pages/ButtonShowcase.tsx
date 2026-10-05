import React, { useState } from 'react';
import { Button } from '../components/common';
import { ButtonVariant } from '@/components/enums/ButtonVariant';
import { ButtonSize } from '@/components/enums/ButtonSize';

export const ButtonShowcase: React.FC = () => {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('md');
  const [disabled, setDisabled] = useState(false);

  const variants: ButtonVariant[] = ['primary', 'secondary', 'danger'];
  const sizes: ButtonSize[] = ['sm', 'md', 'lg'];
  const states = [
    { label: 'Default', disabled: false },
    { label: 'Disabled', disabled: true },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Button Component</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        A versatile action button with multiple variants, sizes, and states.
      </p>

      {/* Playground */}
      <section className="mb-16 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Interactive Playground</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Variant</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as ButtonVariant)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800"
            >
              {variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as ButtonSize)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800"
            >
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">State</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="mr-2"
              />
              Disabled
            </label>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Preview:</p>
          <Button variant={variant} size={size} disabled={disabled}>
            {disabled ? 'Disabled' : 'Click me'}
          </Button>
        </div>

        <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded font-mono text-sm overflow-auto">
          <pre className="text-slate-900 dark:text-slate-100">
            {`<Button
  variant="${variant}"
  size="${size}"
  disabled={${disabled}}
>
  Click me
</Button>`}
          </pre>
        </div>
      </section>

      {/* All Variants Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">All Variants (36 Total)</h2>

        <div className="space-y-12">
          {variants.map((v) => (
            <div key={v}>
              <h3 className="text-xl font-semibold mb-4 capitalize">{v} Variant</h3>
              <div className="space-y-6">
                {sizes.map((s) => (
                  <div key={s}>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 capitalize">
                      Size: {s}
                    </p>
                    <div className="flex flex-wrap gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                      {states.map((state) => (
                        <div key={state.label} className="flex flex-col items-center gap-2">
                          <Button variant={v} size={s} disabled={state.disabled}>
                            {state.label}
                          </Button>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {state.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Props Documentation */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="text-left py-2 px-4 font-semibold">Prop</th>
                <th className="text-left py-2 px-4 font-semibold">Type</th>
                <th className="text-left py-2 px-4 font-semibold">Default</th>
                <th className="text-left py-2 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-mono text-blue-600">variant</td>
                <td className="py-2 px-4 font-mono text-slate-600">
                  'primary' | 'secondary' | 'danger'
                </td>
                <td className="py-2 px-4 font-mono">'primary'</td>
                <td className="py-2 px-4">Button style variant</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-mono text-blue-600">size</td>
                <td className="py-2 px-4 font-mono text-slate-600">'sm' | 'md' | 'lg'</td>
                <td className="py-2 px-4 font-mono">'md'</td>
                <td className="py-2 px-4">Button size</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-mono text-blue-600">disabled</td>
                <td className="py-2 px-4 font-mono text-slate-600">boolean</td>
                <td className="py-2 px-4 font-mono">false</td>
                <td className="py-2 px-4">Disable the button</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono text-blue-600">children</td>
                <td className="py-2 px-4 font-mono text-slate-600">ReactNode</td>
                <td className="py-2 px-4 font-mono">-</td>
                <td className="py-2 px-4">Button content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
