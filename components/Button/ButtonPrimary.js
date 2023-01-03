import Button from './Button';

export default function ButtonPrimary({ className = '', ...args }) {
  return (
    <Button
      className={`disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    />
  );
}
