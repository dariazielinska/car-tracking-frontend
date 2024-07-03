import React, { useState } from 'react';
import TripList from './components/TripList';
import Map from './components/Map';
import './App.css';

const App = () => {
    const [trips, setTrips] = useState([
        { id: 1, date: '2023-01-01', distance: 120, route: [[51.505, -0.09], [51.51, -0.1], [51.49, -0.1]] },
        { id: 2, date: '2023-01-02', distance: 80, route: [[51.505, -0.09], [51.51, -0.1], [51.49, -0.1], [51.52, -0.12]] },
        { id: 3, date: '2023-01-03', distance: 150, route: [[51.505, -0.09], [51.51, -0.1], [51.49, -0.1], [51.5, -0.08], [51.52, -0.1]] }
    ]);

    const [selectedTrip, setSelectedTrip] = useState(null);

    const handleSelectTrip = (trip) => {
        setSelectedTrip(trip);
    };

    return (
        <div className="App">
            <TripList trips={trips} onSelectTrip={handleSelectTrip} />
            {selectedTrip && (
                <Map routeData={selectedTrip.route} />
            )}
        </div>
    );
};

export default App;
