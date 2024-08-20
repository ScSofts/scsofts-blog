export function ChalkEffectFilter() {
  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <filter
        id="chalk"
        height="2"
        width="1.6"
        colorInterpolationFilters="sRGB"
        x="-0.3"
        y="-0.5"
      >
        <feTurbulence
          baseFrequency="0.72065"
          seed="115"
          result="result1"
          numOctaves="1"
          type="turbulence"
        />
        <feDisplacementMap
          scale="5.5"
          yChannelSelector="G"
          in2="result1"
          xChannelSelector="R"
          in="SourceGraphic"
        />
        <feOffset result="result2" dx="0" dy="0" />
        <feGaussianBlur stdDeviation="0.7050" />
      </filter>
    </svg>
  );
}

export const chalk_filter =
  " [filter:url(#chalk)] [-webkit-filter:url(#chalk)] ";

export const ApplyChalkEffect = (props: { children: React.ReactNode, className?: string }) => {
  return <span className={chalk_filter + ( props.className ?? " " )}>{props.children}</span>;
};