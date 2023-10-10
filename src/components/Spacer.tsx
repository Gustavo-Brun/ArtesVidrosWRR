type SpacerProps = {
    h: number | string,
    w: number | string,
    bg: number | string,
  };

export default function Spacer({h, w, bg}:SpacerProps) {
  return (
    <div className={`h-${h} w-${w} bg-${bg}`} ></div>
  )
}
