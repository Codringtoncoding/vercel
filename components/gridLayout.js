
import searchTranslations from "../public/text.json";

export default function GridLayout() {
  const text = searchTranslations;

  return (
    <div className="grid">
      <div className="card">
          <img src="/images/example-photo-portrait-2.jpg" />
      </div>

      <div className="card">
          <img src="/images/portrain-example.jpg" />
      </div>
    </div>
  );
}
