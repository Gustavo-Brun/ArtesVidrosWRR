type SpacerProps = {
    style: number | string,
  };

export function Spacer({style}:SpacerProps) {
  return (
    <div className={`${style}`}>.</div>
  )
}
