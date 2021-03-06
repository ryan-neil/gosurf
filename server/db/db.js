const db = [
  {
    name: 'Secret Spot',
    spot_id: 1,
    slug: 'secret-spot',
    station_id: 1617760,
    buoy_id: 51004,
    lat: 18.9662,
    lon: -155.6118,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Secret Spot',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'SE',
      wind: 'NW',
      surf_height: 'N/A',
      tide: 'Low to med',
    },
    guide: {
      facing: 'SE',
      skill: ['beginner', 'intermediate'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['funboard', 'longboard', 'fish'],
      images: [],
    },
  },
  {
    name: 'South Point',
    spot_id: 2,
    slug: 'south-point',
    station_id: 1617760,
    buoy_id: 51004,
    lat: 18.8943,
    lon: -155.6626,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Hawaiian Ocean View',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'N',
      surf_height: "4' to 8'",
      tide: 'Low to med',
    },
    guide: {
      facing: 'S',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef'],
      boards: ['funboard', 'longboard', 'fish'],
      images: [],
    },
  },
  {
    name: 'Bay Front',
    spot_id: 3,
    slug: 'bay-front',
    station_id: 1617760,
    buoy_id: 51206,
    lat: 19.7283,
    lon: -155.0848,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Hilo',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'NW',
      wind: 'SE',
      surf_height: "3' to 6'",
      tide: 'Low to med to high',
    },
    guide: {
      facing: 'NW',
      skill: ['beginner'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['funboard', 'longboard', 'fish', 'sup', 'hydrofoil'],
      images: [],
    },
  },
  {
    name: 'Banyans',
    spot_id: 4,
    slug: 'banyans',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.606,
    lon: -155.9778,
    facing: 'SW',
    seabed: ['reef'],
    boards: [],
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Holualoa',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S to NW',
      wind: 'E',
      surf_height: "6' to 8'+",
      tide: 'Med to high',
    },
    guide: {
      facing: 'SE',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['intimidating'],
      crowd: ['heavy'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'bodyboard'],
      images: [],
    },
  },
  {
    name: "Honl's",
    spot_id: 5,
    slug: 'honls',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.6279,
    lon: -155.9888,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahaluu-Keauhou',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'SW',
      wind: 'NE',
      surf_height: "3' to 6'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'SW',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'bodyboard'],
      images: [],
    },
  },
  {
    name: "Kahalu'u Bay",
    spot_id: 6,
    slug: 'kahalu-u-bay',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.5809,
    lon: -155.9691,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahaluu-Keauhou',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S to NW',
      wind: 'E',
      surf_height: "3' to 6'+",
      tide: 'Med',
    },
    guide: {
      facing: 'W',
      skill: ['beginner'],
      vibe: ['welcoming'],
      crowd: ['moderate', 'heavy'],
      seabed: ['reef'],
      boards: ['funboard', 'longboard', 'fish', 'sup', 'hydrofoil'],
      images: [],
    },
  },
  {
    name: "Lyman's",
    spot_id: 7,
    slug: 'lymans',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.6026,
    lon: -155.9765,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahaluu-Keauhou',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S to NW',
      wind: 'E',
      surf_height: "3' to 6'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'W',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Magic Sands Beach',
    spot_id: 8,
    slug: 'magic-sands-beach',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.5941,
    lon: -155.9723,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahaluu-Keauhou',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S to NW',
      wind: 'E',
      surf_height: "4' to 8'",
      tide: 'All tides',
    },
    guide: {
      facing: 'SW',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['sand', 'reef'],
      boards: ['bodyboard', 'skimming', 'bodysurfing'],
      images: [],
    },
  },
  {
    name: 'Kaiwi Point',
    spot_id: 9,
    slug: 'kaiwi-point',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.6623,
    lon: -156.0357,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kalaoa',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'NW',
      wind: 'SE',
      surf_height: "3' to 6'",
      tide: 'Med',
    },
    guide: {
      facing: 'NW',
      skill: ['intermediate', 'advanced'],
      vibe: ['intimidating'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish'],
      images: [],
    },
  },
  {
    name: 'Pinetrees',
    spot_id: 10,
    slug: 'pinetrees',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.6951,
    lon: -156.046,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kalaoa',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S to NW',
      wind: 'E',
      surf_height: "4' to 7'",
      tide: 'Med',
    },
    guide: {
      facing: 'W',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'sup', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Kolekole',
    spot_id: 11,
    slug: 'kolekole',
    station_id: 1617760,
    buoy_id: 51206,
    lat: 19.8831,
    lon: -155.1187,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Pepeekeo',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N to SE',
      wind: 'W',
      surf_height: "6' to 8'",
      tide: 'Med',
    },
    guide: {
      facing: 'NE',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef'],
      boards: ['shortboard', 'bodyboard', 'bodysurfing'],
      images: [],
    },
  },
  {
    name: 'Hapuna Bay',
    spot_id: 12,
    slug: 'hapuna-bay',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 19.9935,
    lon: -155.8267,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Waikoloa Village',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'W',
      wind: 'E',
      surf_height: "6' to 8'",
      tide: 'All tides',
    },
    guide: {
      facing: 'W',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef', 'sand'],
      boards: ['shortboard', 'bodyboard', 'skimming', 'bodysurfing'],
      images: [],
    },
  },
  {
    name: 'Kawaihae',
    spot_id: 13,
    slug: 'kawaihae',
    station_id: 1617433,
    buoy_id: 51002,
    lat: 20.0297,
    lon: -155.8317,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Waikoloa Village',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'W',
      wind: 'E',
      surf_height: "4' to 8'",
      tide: 'Med',
    },
    guide: {
      facing: 'W',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming', 'intimidating'],
      crowd: ['mellow', 'moderate', 'heavy'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'sup'],
      images: [],
    },
  },
  {
    name: "Honoli'i",
    spot_id: 14,
    slug: 'honoli-i',
    station_id: 1617760,
    buoy_id: 51206,
    lat: 19.7558,
    lon: -155.0908,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wainaku',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N to SE',
      wind: 'W',
      surf_height: "3' to 8'",
      tide: 'Low to med',
    },
    guide: {
      facing: 'E',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate', 'heavy'],
      seabed: ['rock', 'reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'sup', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Tombstones',
    spot_id: 15,
    slug: 'tombstones',
    station_id: 1617760,
    buoy_id: 51206,
    lat: 19.7616,
    lon: -155.0889,
    facing: 'E',
    seabed: ['rock', 'reef'],
    boards: [],
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wainaku',
      state: "Hawai'i",
      county: 'Big Island',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N to SE',
      wind: 'W',
      surf_height: "6' to 10'",
      tide: 'Low to med',
    },
    guide: {
      facing: 'E',
      skill: ['advanced'],
      vibe: ['intimidating'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef'],
      boards: ['shortboard', 'fish'],
      images: [],
    },
  },
  {
    name: 'Peahi (Jaws)',
    spot_id: 16,
    slug: 'peahi-jaws',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9426,
    lon: -156.3015,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Haiku-Pauwela',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'ESE',
      surf_height: '4X overhead+',
      tide: 'All tides',
    },
    guide: {
      facing: 'N',
      skill: ['advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['gun', 'tow'],
      images: [],
    },
  },
  {
    name: 'Hana Bay',
    spot_id: 17,
    slug: 'hana-bay',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.7602,
    lon: -155.9829,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Hana',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'E',
      wind: 'W',
      surf_height: "4' to 8'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'E',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef', 'sand'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Rainbows',
    spot_id: 18,
    slug: 'rainbows',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9463,
    lon: -156.6937,
    facing: 'NW',
    seabed: ['reef'],
    boards: [],
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kaanapali Landing',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'SE',
      surf_height: "3' to 8'",
      tide: 'Med',
    },
    guide: {
      facing: 'NW',
      skill: ['beginner', 'intermediate'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Kahului Harbor',
    spot_id: 19,
    slug: 'kahului-harbor',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9018,
    lon: -156.4674,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahului',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'S',
      surf_height: "4' to 6'",
      tide: 'Low',
    },
    guide: {
      facing: 'N',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef', 'sand'],
      boards: ['shortboard', 'bodyboard', 'bodysurfing'],
      images: [],
    },
  },
  {
    name: 'Kanaha',
    spot_id: 20,
    slug: 'Kanaha',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9038,
    lon: -156.4418,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Kahului',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'NW',
      wind: 'SE',
      surf_height: "3' to 6'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'NW',
      skill: ['beginner', 'intermediate'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'sup', 'kiteboard'],
      images: [],
    },
  },
  {
    name: "Ma'alaea Harbor",
    spot_id: 21,
    slug: 'Ma-alaea-harbor',
    station_id: 1615680,
    buoy_id: 51206,
    lat: 20.7901,
    lon: -156.5099,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'K??hei',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'NW',
      surf_height: "3' to 6'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'SE',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'sup', 'kiteboard'],
      images: [],
    },
  },
  {
    name: 'The Cove',
    spot_id: 22,
    slug: 'the-cove',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.7266,
    lon: -156.4516,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'K??hei',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'NE',
      surf_height: "3' to 6'",
      tide: 'Med',
    },
    guide: {
      facing: 'SW',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'sup', 'kiteboard'],
      images: [],
    },
  },
  {
    name: 'Lahaina Harbor - Breakwall',
    spot_id: 23,
    slug: 'lahaina-harbor-breakwall',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.872,
    lon: -156.6803,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Lahaina',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'NE',
      surf_height: "3' to 6'",
      tide: 'Med',
    },
    guide: {
      facing: 'SW',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['moderate'],
      crowd: ['heavy'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Olowalu',
    spot_id: 24,
    slug: 'olowalu',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.809,
    lon: -156.623,
    facing: 'SW',
    seabed: ['reef'],
    boards: [],
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Lahaina',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'NE',
      surf_height: "3' to 6'",
      tide: 'Med',
    },
    guide: {
      facing: 'SW',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'sup', 'kiteboard'],
      images: [],
    },
  },
  {
    name: 'Honokohau Bay',
    spot_id: 25,
    slug: 'honokohau-bay',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 21.0245,
    lon: -156.6097,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Napili-Honokowai',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'S',
      surf_height: "6' to 8'",
      tide: 'Med',
    },
    guide: {
      facing: 'N',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['moderate'],
      crowd: ['moderate'],
      seabed: ['rock', 'reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard', 'bodysurfing'],
      images: [],
    },
  },
  {
    name: 'Honolua Bay',
    spot_id: 26,
    slug: 'honolua-bay',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 21.016,
    lon: -156.6405,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Napili-Honokowai',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'E',
      wind: 'W',
      surf_height: "6' to 12'",
      tide: 'Med',
    },
    guide: {
      facing: 'E',
      skill: ['intermediate', 'advanced'],
      vibe: ['intimidating'],
      crowd: ['heavy'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: "Ho'okipa",
    spot_id: 27,
    slug: 'ho-okipa',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9347,
    lon: -156.3584,
    facing: 'N',
    seabed: '',
    boards: [],
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Paia',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'S',
      surf_height: "6' to 12'",
      tide: 'Med',
    },
    guide: {
      facing: 'N',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['moderate'],
      crowd: ['moderate'],
      seabed: ['reef'],
      boards: [
        'shortboard',
        'funboard',
        'longboard',
        'fish',
        'bodyboard',
        'skimming',
        'bodysurfing',
        'gun',
        'kiteboard',
      ],
      images: [],
    },
  },
  {
    name: 'Tavares Bay',
    spot_id: 28,
    slug: 'tavares-bay',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.9226,
    lon: -156.3748,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Paia',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'S',
      surf_height: "3' to 6'",
      tide: 'Med',
    },
    guide: {
      facing: 'NW',
      skill: ['beginner', 'intermediate'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Big Beach - Little Beach',
    spot_id: 29,
    slug: 'big-beach-little-beach',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.6287,
    lon: -156.4481,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wailea',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'SW',
      wind: 'NE',
      surf_height: "3' to 6'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'NE',
      skill: ['beginner', 'intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['rock', 'sand'],
      boards: ['shortboard', 'bodyboard', 'bodysurfing', 'skimming'],
      images: [],
    },
  },
  {
    name: 'Dumps',
    spot_id: 30,
    slug: 'dumps',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.6165,
    lon: -156.4383,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wailea',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'W',
      wind: 'E',
      surf_height: "6' to 12'",
      tide: 'Low to med',
    },
    guide: {
      facing: 'W',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'La Perouse Bay',
    spot_id: 31,
    slug: 'la-perouse-bay',
    station_id: 1615680,
    buoy_id: 51003,
    lat: 20.5901,
    lon: -156.4158,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wailea',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'NE',
      wind: 'SW',
      surf_height: "6' to 8'",
      tide: 'Med',
    },
    guide: {
      facing: 'NE',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef'],
      boards: ['shortboard', 'funboard', 'longboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Honomanu Bay',
    spot_id: 32,
    slug: 'honomanu-bay',
    station_id: 1615680,
    buoy_id: 51205,
    lat: 20.8671,
    lon: -156.1653,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Wailua',
      state: "Hawai'i",
      county: 'Maui',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'N',
      wind: 'S',
      surf_height: "6' to 8'",
      tide: 'Med to high',
    },
    guide: {
      facing: 'N',
      skill: ['intermediate', 'advanced'],
      vibe: ['moderate'],
      crowd: ['mellow'],
      seabed: ['rock', 'reef', 'sand'],
      boards: ['shortboard', 'funboard', 'fish', 'bodyboard'],
      images: [],
    },
  },
  {
    name: 'Sandy Beach',
    spot_id: 33,
    slug: 'sandy-beach',
    station_id: 1612340,
    buoy_id: 51202,
    lat: 21.2844,
    lon: -157.6728,
    timezone: 'Pacific/Honolulu',
    timezone_offset: -36000,
    location: {
      city: 'Honolulu',
      state: "Hawai'i",
      county: 'Oahu',
      country: 'United States',
    },
    ideal_conditions: {
      swell_direction: 'S',
      wind: 'NW',
      surf_height: "5' to 10'",
      tide: 'Medium',
    },
    guide: {
      facing: 'S',
      skill: ['intermediate', 'advanced'],
      vibe: ['welcoming'],
      crowd: ['moderate'],
      seabed: ['reef', 'sand'],
      boards: ['shortboard', 'bodyboard', 'skimming', 'bodysurfing'],
      images: [],
    },
  },
];

module.exports = db;
