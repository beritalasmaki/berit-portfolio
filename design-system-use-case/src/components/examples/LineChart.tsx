type Series = { label: string; values: number[]; dashed?: boolean };

type LineChartProps = {
  title: string;
  /** A sentence that says what the chart shows, for people who cannot see it. */
  summary: string;
  series: Series[];
  xLabels: string[];
  yTicks: number[];
  /** Weekly values as a table for assistive technology. */
  tableRows: { label: string; values: number[] }[];
  format?: (value: number) => string;
};

const W = 640, H = 240, L = 48, R = 12, T = 12, B = 28;

/** Documentation only: a simple line chart with gridlines, axis labels, a legend and a text alternative. */
export function LineChart({ title, summary, series, xLabels, yTicks, tableRows, format = (value) => String(value) }: LineChartProps) {
  const max = Math.max(...yTicks), count = series[0].values.length;
  const x = (index: number) => L + (index / (count - 1)) * (W - L - R);
  const y = (value: number) => T + (1 - value / max) * (H - T - B);
  const colour = (index: number) => (index === 0 ? "var(--color-action-accent-dark)" : "var(--color-border-strong)");
  return (
    <figure className="m-0">
      <figcaption className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <span><span className="block text-lg font-bold">{title}</span><span className="body-copy text-sm">{summary}</span></span>
        <ul className="m-0 flex list-none gap-4 p-0 text-xs font-semibold">
          {series.map((item, index) => <li key={item.label} className="flex items-center gap-2"><svg aria-hidden="true" width="20" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke={colour(index)} strokeWidth="3" strokeDasharray={item.dashed ? "4 3" : undefined} strokeLinecap="round" /></svg>{item.label}</li>)}
        </ul>
      </figcaption>
      <svg aria-hidden="true" viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
        {yTicks.map((tick) => (
          <g key={tick}>
            <line x1={L} x2={W - R} y1={y(tick)} y2={y(tick)} stroke="var(--color-border-default)" strokeWidth="1" />
            <text x={L - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill="var(--color-content-muted)">{format(tick)}</text>
          </g>
        ))}
        {xLabels.map((label, index) => <text key={label} x={L + (index / (xLabels.length - 1)) * (W - L - R)} y={H - 8} textAnchor={index === 0 ? "start" : index === xLabels.length - 1 ? "end" : "middle"} fontSize="11" fill="var(--color-content-muted)">{label}</text>)}
        {[...series].reverse().map((item, reversed) => {
          const index = series.length - 1 - reversed;
          const points = item.values.map((value, i) => `${x(i)},${y(value)}`).join(" ");
          return <polyline key={item.label} points={points} fill="none" stroke={colour(index)} strokeWidth={index === 0 ? 3 : 2} strokeDasharray={item.dashed ? "6 5" : undefined} strokeLinejoin="round" strokeLinecap="round" />;
        })}
        <circle cx={x(count - 1)} cy={y(series[0].values[count - 1])} r="5" fill="var(--color-surface-canvas)" stroke="var(--color-action-accent-dark)" strokeWidth="3" />
      </svg>
      <table className="sr-only">
        <caption>{title}, by week</caption>
        <thead><tr><th scope="col">Week</th>{series.map((item) => <th key={item.label} scope="col">{item.label}</th>)}</tr></thead>
        <tbody>{tableRows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{format(value)}</td>)}</tr>)}</tbody>
      </table>
    </figure>
  );
}
