// get all spots from database
export const getSpots = async () => {
  const res = await fetch('/api/spots');
  if (!res.ok) throw new Error(`Error fetching Spots data: ${res.status}`);
  return res.json();
};

export const getSpot = (data, slug) => {
  let spot;
  try {
    for (let i = 0; i <= data.length; i++) {
      if (data[i].slug === slug) {
        spot = data[i];
        break;
      }
    }
    return spot;
  } catch (err) {
    console.error(err);
  }
};

// get banner data with the station ID
export const getBannerData = async (stationId) => {
  const res = await fetch(`/api/weather?stationId=${stationId}`);
  if (!res.ok) throw new Error(`Error fetching Weather data: ${res.status}`);
  return res.json();
};

// get wave data with the latitude and longitude
export const getWaveData = async (lat, lon) => {
  const res = await fetch(`/api/wave?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error(`Error fetching Wave data: ${res.status}`);
  return res.json();
};

// get tides data with the station ID
export const getTidesData = async (stationId) => {
  const res = await fetch(`/api/tides?stationId=${stationId}`);
  if (!res.ok) throw new Error(`Error fetching Tides data: ${res.status}`);
  return res.json();
};

// get wind data with the station ID
export const getWindData = async (stationId) => {
  const res = await fetch(`/api/wind?stationId=${stationId}`);
  if (!res.ok) throw new Error(`Error fetching Wind data: ${res.status}`);
  return res.json();
};

// get swell data with the latitude and longitude
export const getSwellData = async (lat, lon) => {
  const res = await fetch(`/api/swell?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error(`Error fetching Swell data: ${res.status}`);
  return res.json();
};
