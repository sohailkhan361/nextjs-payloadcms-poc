export default function FeatureBlock({ data }: any) {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">{data.heading}</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {data.items?.map((item: any) => (
          <div key={item.id} className="p-4 border rounded">
            <h3 className="font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-gray-600">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
