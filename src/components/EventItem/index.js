// Write your code here

import './index.css'

const EventItem = props => {
  const {event, setActiveEventId, isActive} = props
  const {id, name, imageUrl, location} = event

  const className = isActive ? 'active-image' : 'image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} className={className} alt={event} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
