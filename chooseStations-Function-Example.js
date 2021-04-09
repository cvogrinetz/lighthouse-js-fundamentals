const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);




function chooseStations(stations) {
  const goodStations = []; // creats an empty array to push into

  for( const station of stations ) { // a for of statement to iterate through Stations array
    const capacity = station[1]; // assigns capacity the index chosen in station
    const type = station[2]  // assigns types the index chosen in station
    if (capacity >= 20 && (type === "school" || type === "community centre")) { // compares both the capacity and type of each kind of index to narrow down 
      goodStations.push(station[0]) // pushes the chosen index into the empty array. Only the ones that pass the IF statement will be pushed
    }
  }
  return goodStations; // this will return the collected array for use outside of the function
}