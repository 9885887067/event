// Write your code here

const registratationStatus = {
  yetToRegistered: 'YET_TO_REGISTERED',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistratationStatus} = props

  const renderNoActiveView = () => (
    <p className="noactive">
      Click on an event ,to view its registration details
    </p>
  )

  const renderYetToRegisteredView = () => (
    <div className="yet-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="regi-image"
        alt=" yet to register"
      />
      <p className="desc">
        Alive performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p> You have already registered for the event</p>
    </>
  )

  const renderRegistrationsClosedView = () => (
    <div className="closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned.We wiil reopen the registrations soon!</p>
    </div>
  )

  const renderRegistratationStatus = () => {
    switch (activeEventRegistratationStatus) {
      case registratationStatus.yetToRegistered:
        return renderYetToRegisteredView()
      case registratationStatus.registered:
        return renderRegisteredView()
      case registratationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registratation-container">
      {renderRegistratationStatus()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
