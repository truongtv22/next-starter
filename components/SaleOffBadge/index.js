export default function SaleOffBadge({ className = '', desc = '-10% today' }) {
  return (
    <div
      className={`nc-SaleOffBadge flex items-center justify-center text-xs py-0.5 px-3 bg-red-700 text-red-50 rounded-full ${className}`}
      data-nc-id="SaleOffBadge"
    >
      {desc}
    </div>
  );
}
