export default function LenderStrip() {
  const lenders = [
    'Commonwealth Bank',
    'Westpac',
    'ANZ',
    'NAB',
    'Macquarie',
    'ING',
    'Bankwest',
    'Suncorp',
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="section-container">
        <p className="text-center text-gray-600 font-semibold mb-8">
          Trusted by Australia's Leading Lenders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {lenders.map((lender, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 text-gray-400 font-bold text-sm hover:text-accent transition-colors"
            >
              {lender}
            </div>
          ))}
        </div>
        <p className="text-center text-accent font-semibold mt-8">
          + 32 More Lenders
        </p>
      </div>
    </section>
  );
}
