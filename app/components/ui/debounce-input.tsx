import * as React from 'react';
import { Input, InputProps } from './input';

type DebounceInputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<InputProps, 'onChange'>;

const DebounceInput: React.FC<DebounceInputProps> = ({
  value: initialValue,
  debounce = 300,
  onChange,
  ...props
}) => {
  const [value, setValue] = React.useState<string | number>(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export { DebounceInput };
