import Image from 'next/image';

// Real LRO imagery; source and reproduction guidelines are documented in ASSETS.md.
export function Astronomy({ small = false }: { small?: boolean }) {
  return <Image
    src="/images/moon.webp"
    alt=""
    aria-hidden="true"
    width={640}
    height={640}
    className={small ? 'small-moon' : 'astronomy'}
    priority={!small}
    loading="eager"
    unoptimized
  />;
}

export function ProjectArt({ kind }: { kind: string }) {
  return <svg viewBox="0 0 240 130" fill="none" aria-hidden="true" className="project-art"><g stroke="#b9b09a" strokeWidth=".8">
    {kind === 'books' && [0, 1, 2, 3, 4].map(i => <g key={i} transform={`translate(${i % 2 ? 12 : 0} ${-i * 17}) rotate(${i % 2 ? -5 : 4} 120 105)`}><path d="M64 96L149 86L178 96L93 107Z" fill={['#8eaa9c', '#cc8a74', '#c8bd9f', '#527d79', '#b9b3a0'][i]} /><path d="M64 96V107L93 118L178 107V96L93 107Z" fill="#cec5aa" /><path d="M93 107V118M99 111L174 102M99 114L174 105" stroke="#354443" /></g>)}
    {kind === 'orbit' && <g transform="translate(120 65)"><circle r="49" />{[-65, -35, 0, 35, 65].map(a => <ellipse key={a} rx="23" ry="49" transform={`rotate(${a})`} />)}{[-30, -15, 0, 15, 30].map(y => <ellipse key={y} cy={y} rx={Math.sqrt(2401 - y * y)} ry="9" />)}</g>}
    {kind === 'signal' && <g>{Array.from({ length: 9 }, (_, i) => <path key={i} d={`M35 ${106 - i * 7}Q70 ${109 - i * 7} 85 ${83 - i * 8}T120 ${49 - i * 4}T160 ${75 - i * 3}T205 ${95 - i * 5}`} stroke={i % 2 ? '#bb806e' : '#94b3a4'} />)}<circle cx="120" cy="37" r="4" fill="#e7d9b6" /></g>}
    {kind === 'moon' && <><path d="M143 17A49 49 0 1 0 162 99A45 45 0 0 1 143 17Z" fill="#c6bda0" /><path d="M139 23A45 45 0 0 0 154 99" stroke="#6b7970" strokeWidth="3" /><path d="M178 23V39M170 31H186M64 77V89M58 83H70" /></>}
    <path d="M23 20V36M15 28H31M209 94V106M203 100H215" opacity=".65" />
  </g></svg>;
}
