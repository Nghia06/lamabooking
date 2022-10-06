import './Header.css'

export default function Header() {
    return (
        <div className ="container">
            <div className="list">
                <ul>
                    <li className='pop'>Stays</li>
                    <li>Flights</li>
                    <li>Car rentals</li>
                    <li>Attractions</li>
                    <li>Airport taxis</li>
                </ul>
                <h1>A lifetime of discount? It's Genius.</h1>
                <p>Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account</p>
          <button className='account'>Sign in / Register</button>
          <div className='Search'>
            <div className='Item'>
                <input placeholder='Where are you going?'></input> 
            </div>
            <div className='Item'>
                <input placeholder='10/02/2022 to 10/02/2022'></input> 
            </div>
            <div className='Item'>
                <input placeholder='1 adult 1 kid'></input> 
            </div>
          </div>

            </div>
        </div>
    )
}