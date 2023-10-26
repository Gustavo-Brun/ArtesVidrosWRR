type SpacerProps = {
    h: number | string,
  };

export function Spacer({h}:SpacerProps) {
  return (
    <div className={`h-${h} invisible`}>.</div>
  )
}
