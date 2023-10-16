type SpacerProps = {
    h: number | string,
  };

export default function Spacer({h}:SpacerProps) {
  return (
    <div className={`h-${h} invisible`}>.</div>
  )
}
