type Props = {
  title: string;
  subtitle: string;
  value: number;
  delta: number;
  specialSymbol?: string;
};

function MetricCard({ title, subtitle, value, delta, specialSymbol }: Props) {
  return (
    <>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{value}</div>
      <div>{delta}</div>
      {specialSymbol && <div>{specialSymbol}</div>}
    </>
  );
}

export default MetricCard;
