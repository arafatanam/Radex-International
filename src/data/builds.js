const img = (n, alt) => ({ src: `/images/post_${n}.jpeg`, alt });

// Text inside *asterisks* renders in racing red.
export const builds = [
  {
    slug: 'nissan-r34-skyline',
    vehicle: 'Nissan R34 Skyline',
    cardTitle: 'GODZILLA IS *IN THE DETAILS*',
    cardNote: 'Four bumper lights from Belgium',
    cover: '/images/post_11.jpeg',
    title: 'GODZILLA *IS IN THE DETAILS.*',
    subtitle: 'Iconic performance deserves complete attention.',
    watermark: 'スカイライン',
    images: [
      img(11, 'Silver Nissan R34 Skyline in a dark garage'),
      img(12, 'Nissan R34 Skyline rear bumper lights, left and right'),
      img(13, 'Nissan R34 Skyline front bumper lights, left and right'),
      img(14, 'Four R34 bumper lights on original Nissan OEM boxes'),
    ],
    factsTitle: 'The complete set',
    facts: [
      '2 x front bumper lights, LH and RH',
      '2 x rear bumper lights, LH and RH',
      'Part number matched',
      'Correct fitment sourcing',
      'Sourced from Belgium through the Radex International network',
    ],
    story: [
      'For a machine as iconic as the Nissan Skyline R34, no part is too small to matter. This time, Radex International sourced these hard-to-find R34 bumper lights all the way from Belgium, bringing together the pieces needed to keep this JDM legend looking complete.',
      'Anyone can search for the obvious parts. The challenge begins when your build needs something specific, uncommon and difficult to source locally. That’s where our network comes in. Because with an R34, the details aren’t an afterthought.',
    ],
  },
  {
    slug: 'mercedes-w211-e240',
    vehicle: 'Mercedes-Benz W211 E240',
    cardTitle: 'KEEP LEGENDS *ON THE ROAD*',
    cardNote: 'Brand new OEM intake manifold',
    cover: '/images/post_21.jpeg',
    title: 'KEEP LEGENDS *ON THE ROAD*',
    subtitle: 'Mercedes-Benz W211 E240. A brand new OEM spec intake manifold.',
    images: [
      img(21, 'Black Mercedes-Benz W211 E240 outside a dealership'),
      img(22, 'Damaged intake manifold from the W211 E240'),
      img(23, 'Brand new OEM spec intake manifold in its box'),
    ],
    factsTitle: 'How we sourced it',
    facts: [
      'Extended international sourcing network',
      'Exact part number matching',
      'Hard-to-find and uncommon components',
    ],
    story: [
      'A damaged intake manifold left this Mercedes-Benz W211 E240 needing a replacement. Finding an intake manifold wasn’t the real challenge. Finding the correct one, brand new, with the exact part number match was.',
      'The options through conventional suppliers were mostly used or previously fitted units. The customer didn’t want to compromise. Through the Radex Parts Sourcing Network, we sourced a brand new OEM spec manifold, matched to the vehicle’s exact requirement.',
      'This is where Radex is different from a traditional parts supplier. Traditional suppliers sell what they have available. Radex searches for what your car actually needs.',
    ],
    outcome: [
      {
        label: 'The problem',
        tone: 'bad',
        text: 'Our client’s W211 E240 had a cracked intake manifold. Despite searching locally and internationally, only used units were available. No brand new OEM options.',
        bullets: [
          'No brand new units available',
          'Only used or second-hand parts',
          'Risk of hidden wear and shorter lifespan',
        ],
      },
      {
        label: 'The solution',
        tone: 'good',
        text: 'Through our parts sourcing network, Radex sourced a brand new OEM spec intake manifold with exact part number matching. Perfect fitment, reliability and peace of mind.',
        bullets: [
          'Brand new OEM spec part',
          'Exact part number matching',
          'Perfect fitment for W211 E240',
          'Restores performance and reliability',
        ],
      },
    ],
  },
  {
    slug: 'mercedes-w211-e63-amg',
    vehicle: 'Mercedes-Benz W211 E63 AMG',
    cardTitle: 'FROM *A STALLED BUILD* TO THE OPEN ROAD',
    cardNote: '18 OEM parts, one solution',
    cover: '/images/post_34.jpeg',
    title: 'FROM *A STALLED BUILD* TO THE OPEN ROAD.',
    subtitle: '18 OEM parts. 1 big solution. The right parts, the right partner.',
    images: [
      img(31, 'Problem, solution and result summary for the W211 E63 AMG build'),
      img(32, 'The 18 OEM parts with their part numbers'),
      img(33, 'The M156 6.3L V8 AMG engine'),
      img(34, 'White W211 E63 AMG in a garage with the hood open'),
    ],
    factsTitle: 'The build',
    facts: [
      'Mercedes-Benz W211 E63 AMG, M156 6.3L V8',
      'Fuel pump, seals, O-rings, hoses, connectors, sensors and hardware',
      '18 genuine OEM parts, matched by exact part number',
      'Build completed and back on the road',
    ],
    story: [
      'Sometimes, an entire build comes down to the smallest parts. This W211 E63 AMG, powered by the M156 6.3L V8, had reached exactly that point.',
      'The build was progressing, but the fuel delivery system became a roadblock. The customer needed a collection of specific components, including the fuel pump, seals, O-rings, hoses, connectors and other small parts, which weren’t easy to source brand new locally.',
      '18 parts. Some of them tiny. All of them important. Using OEM part number matching and our sourcing network, we identified the required components and sourced everything needed to complete the fuel delivery system.',
      'No guessing. No “close enough” replacements. No abandoning the build because one small component couldn’t be found.',
    ],
    outcome: [
      {
        label: 'The problem',
        tone: 'bad',
        text: 'The build stalled. Fuel delivery components were unavailable brand new locally.',
      },
      {
        label: 'The solution',
        tone: 'good',
        text: '18 OEM parts, identified and sourced by exact part number matching.',
      },
      {
        label: 'The result',
        tone: 'good',
        text: 'The M156 roars back to life. Build completed.',
      },
    ],
    showParts: true,
  },
  {
    slug: 'honda-civic-fe1',
    href: '/upgrades',
    vehicle: 'Honda Civic FE1',
    cardTitle: 'UPGRADE *DELIVERED*',
    cardNote: 'Intercooler and charge pipe kit',
    cover: '/images/post_41.jpeg',
    images: [],
  },
  {
    slug: 'porsche-991-targa-4s',
    vehicle: 'Porsche 991.2 Targa 4S',
    cardTitle: 'PRECISION *SOURCING*',
    cardNote: 'Borg Warner turbo seal kit',
    cover: '/images/post_51.jpeg',
    title: 'PRECISION *SOURCING*',
    subtitle: 'Porsche 991.2 Targa 4S. Borg Warner turbo seal kit.',
    images: [
      img(51, 'Deep metallic blue Porsche 991.2 Targa 4S in a dark alley'),
      img(52, 'Porsche 991.2 Targa 4S, second view'),
      img(53, 'Porsche 991.2 Targa 4S, third view'),
    ],
    factsTitle: 'Part sourced',
    facts: ['Borg Warner turbo seal kit', 'For a Porsche 991.2 Targa 4S'],
    story: [
      'High-end European cars leave no room for guesswork. Every seal, gasket and fitting has to match the original specification. That is how we source: by part number, from the right supplier, for the exact car.',
    ],
  },
  {
    slug: 'mercedes-w212-diffuser',
    vehicle: 'Mercedes-Benz W212',
    cardTitle: 'GLOBAL DELIVERY, *ENROUTE TO AUSTRALIA*',
    cardNote: 'Extended rear diffuser and window sills',
    cover: '/images/post_61.jpeg',
    title: 'GLOBAL DELIVERY. *ENROUTE TO AUSTRALIA.*',
    subtitle: 'Mercedes-Benz W212 extended rear diffuser.',
    images: [
      img(61, 'White Mercedes W212 with a black rear diffuser, and the diffuser product shot'),
      img(62, 'Mercedes W212 rear diffuser, second view'),
      img(63, 'Mercedes W212 rear diffuser, third view'),
    ],
    factsTitle: 'Shipped',
    facts: [
      'Extended rear diffuser',
      'Silver exhaust tips',
      'Window sills',
      'Destination: Australia',
    ],
    story: [
      'Demand has no borders. Neither do we. This W212 extended rear diffuser, with silver exhaust tips and window sills, left our network bound for Australia.',
    ],
  },
];

export const findBuild = (slug) => builds.find((b) => b.slug === slug);
export const buildPath = (b) => b.href || `/builds/${b.slug}`;

export const civic = {
  title: 'HONDA *CIVIC FE1*',
  subtitle: 'Intercooler and charge pipe upgrade kit',
  images: [
    img(41, 'Silver Honda Civic FE1 with the upgraded intercooler and piping laid out'),
    img(42, 'Intercooler kit parts with charge air temperature and boost efficiency graphs'),
  ],
  fitment: ['Honda Civic FE1', '2022 onwards', 'L15 1.5', 'All variants'],
  kit: [
    'Upgraded intercooler',
    'Silicone inlet hose',
    'Stainless-steel outlet',
    'Charge pipe components and associated hardware',
  ],
  benefits: [
    'Lower intake temperature',
    'More consistent performance',
    'Better throttle response',
    'Ideal for modified or tuned setups',
    'Reliable and durable construction',
  ],
};
