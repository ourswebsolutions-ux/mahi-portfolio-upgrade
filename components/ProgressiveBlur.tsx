/**
 * Fixed bottom-of-viewport progressive blur: eight stacked backdrop-filter
 * layers, each masked to a band and doubling in strength (values taken from
 * the reference).
 */
const LAYERS = [0.0390625, 0.078125, 0.15625, 0.3125, 0.625, 1.25, 2.5, 5];

export default function ProgressiveBlur() {
  return (
    <div className="progressive-blur" aria-hidden>
      {LAYERS.map((blur, i) => {
        const a = i * 12.5;
        const stops =
          i < 6
            ? `transparent ${a}%, #000 ${a + 12.5}%, #000 ${a + 25}%, transparent ${a + 37.5}%`
            : i === 6
              ? `transparent ${a}%, #000 ${a + 12.5}%, #000 100%`
              : `transparent ${a}%, #000 100%`;
        const mask = `linear-gradient(to bottom, ${stops})`;
        return (
          <div
            key={blur}
            style={{
              zIndex: i + 1,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
