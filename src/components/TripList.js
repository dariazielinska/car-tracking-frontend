import React from 'react';

const TripList = ({ trips, onSelectTrip }) => (
    <div className="trip-list">
        <h2>Lista przejazdów samochodu</h2>
        <ul>
            {trips.map((trip) => (
                <li key={trip.id} onClick={() => onSelectTrip(trip)}>
                    <strong>Data:</strong> {trip.date} | <strong>Odległość:</strong> {trip.distance} km
                </li>
            ))}
        </ul>
    </div>
);

export default TripList;
