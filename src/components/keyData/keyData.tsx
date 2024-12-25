import './KeyData.scss'

type KeyDataProps = {
  icon: string
  color: string
  value: number
  unit: string
  description: string
}

function KeyDataCard({ icon, color, value, unit, description }: KeyDataProps) {
  return (
    <div id="key-data-card">
      <div className={`icon ${color}`}>
        <img src={icon} alt={`${description} icon`} />
      </div>
      <div className="content">
        <div className="value">{new Intl.NumberFormat("en-IN").format(value)}{unit}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default KeyDataCard
