export const REVIEWS = [
  {
    id: 'r1',
    guestName: 'Ananya Sharma',
    homestay: 'Riverside Bamboo Cottage',
    date: '2026-06-12',
    rating: 5,
    sentiment: 'positive',
    confidence: 0.96,
    excerpt:
      'The bamboo cottage was magical — woke up to birdsong and the river right outside. Host Meera made us feel like family.',
    fullText:
      "The bamboo cottage was magical — woke up to birdsong and the river right outside. Host Meera made us feel like family. Breakfast was fresh every morning, with produce from her own garden. The room was spotless, the bed incredibly comfortable, and the bathroom had hot water exactly when we needed it. We'd come back in a heartbeat and have already recommended it to three friends.",
    tags: {
      cleanliness: 0.95,
      checkIn: 0.88,
      amenities: 0.9,
      hospitality: 0.98,
      valueForMoney: 0.85,
    },
  },
  {
    id: 'r2',
    guestName: 'Rohan Verma',
    homestay: 'Hilltop Mist Homestay',
    date: '2026-06-10',
    rating: 2,
    sentiment: 'negative',
    confidence: 0.91,
    excerpt:
      "Wi-Fi barely worked the entire stay and check-in took almost an hour because no one was there to greet us.",
    fullText:
      "Wi-Fi barely worked the entire stay and check-in took almost an hour because no one was there to greet us. We had to call twice before someone picked up. The room itself was nice and the view was stunning, but the lack of communication really soured the experience. For the price, I expected a smoother arrival process at minimum.",
    tags: {
      cleanliness: 0.7,
      checkIn: 0.15,
      amenities: 0.2,
      hospitality: 0.3,
      valueForMoney: 0.4,
    },
  },
  {
    id: 'r3',
    guestName: 'Priya Nair',
    homestay: 'Coconut Grove Stay',
    date: '2026-06-09',
    rating: 4,
    sentiment: 'positive',
    confidence: 0.84,
    excerpt:
      'Lovely quiet stay surrounded by coconut trees. Only downside was the spotty hot water in the evenings.',
    fullText:
      "Lovely quiet stay surrounded by coconut trees. Only downside was the spotty hot water in the evenings, which made night showers a bit of a gamble. Everything else was wonderful — the hosts were warm, the food was outstanding, and the property itself was beautifully maintained. Would happily return, especially if the water heater gets looked at.",
    tags: {
      cleanliness: 0.85,
      checkIn: 0.8,
      amenities: 0.55,
      hospitality: 0.92,
      valueForMoney: 0.78,
    },
  },
  {
    id: 'r4',
    guestName: 'Karthik Iyer',
    homestay: 'Riverside Bamboo Cottage',
    date: '2026-06-07',
    rating: 1,
    sentiment: 'negative',
    confidence: 0.89,
    excerpt:
      'Room was not cleaned before we arrived and there was a strong musty smell throughout our stay.',
    fullText:
      "Room was not cleaned before we arrived and there was a strong musty smell throughout our stay. We mentioned it to the host but nothing changed by the second day. Bedsheets looked like they hadn't been changed either. Really disappointing given how good the photos looked online. We won't be booking again unless this is addressed.",
    tags: {
      cleanliness: 0.1,
      checkIn: 0.45,
      amenities: 0.5,
      hospitality: 0.35,
      valueForMoney: 0.2,
    },
  },
  {
    id: 'r5',
    guestName: 'Fatima Khan',
    homestay: 'Valley View Farmstay',
    date: '2026-06-05',
    rating: 5,
    sentiment: 'positive',
    confidence: 0.97,
    excerpt:
      'Best farmstay experience of our lives. Kids loved feeding the goats and the home-cooked meals were unforgettable.',
    fullText:
      "Best farmstay experience of our lives. Kids loved feeding the goats and the home-cooked meals were unforgettable. Every detail felt thoughtful, from the welcome drink to the bonfire on our last night. The hosts went out of their way to make our anniversary special too. Cannot recommend this place enough for families.",
    tags: {
      cleanliness: 0.93,
      checkIn: 0.95,
      amenities: 0.88,
      hospitality: 0.99,
      valueForMoney: 0.91,
    },
  },
  {
    id: 'r6',
    guestName: 'Devansh Patel',
    homestay: 'Hilltop Mist Homestay',
    date: '2026-06-03',
    rating: 3,
    sentiment: 'neutral',
    confidence: 0.62,
    excerpt:
      'Decent stay overall. Nothing stood out as exceptional but nothing was particularly wrong either.',
    fullText:
      "Decent stay overall. Nothing stood out as exceptional but nothing was particularly wrong either. The location is convenient and the room was clean enough. Breakfast options were a bit repetitive across our three days. It's a solid, no-frills option if you just need a comfortable place to sleep.",
    tags: {
      cleanliness: 0.65,
      checkIn: 0.6,
      amenities: 0.55,
      hospitality: 0.58,
      valueForMoney: 0.6,
    },
  },
  {
    id: 'r7',
    guestName: 'Sneha Reddy',
    homestay: 'Coconut Grove Stay',
    date: '2026-06-01',
    rating: 5,
    sentiment: 'positive',
    confidence: 0.94,
    excerpt:
      'Stunning sunsets from the balcony and incredibly attentive hosts. Already planning our next visit.',
    fullText:
      "Stunning sunsets from the balcony and incredibly attentive hosts. Already planning our next visit. They remembered our dietary preferences from a single mention and adjusted every meal accordingly. The property felt like a hidden gem away from the touristy chaos nearby.",
    tags: {
      cleanliness: 0.9,
      checkIn: 0.85,
      amenities: 0.82,
      hospitality: 0.96,
      valueForMoney: 0.88,
    },
  },
  {
    id: 'r8',
    guestName: 'Arjun Mehta',
    homestay: 'Valley View Farmstay',
    date: '2026-05-28',
    rating: 2,
    sentiment: 'negative',
    confidence: 0.78,
    excerpt:
      'Mosquitoes were unbearable at night and there was no repellent or nets provided despite asking twice.',
    fullText:
      "Mosquitoes were unbearable at night and there was no repellent or nets provided despite asking twice. The farm activities during the day were genuinely fun, but we barely slept either night. A simple mosquito net would have completely changed our experience. Hoping the host addresses this for future guests.",
    tags: {
      cleanliness: 0.55,
      checkIn: 0.7,
      amenities: 0.25,
      hospitality: 0.45,
      valueForMoney: 0.5,
    },
  },
]

export const DASHBOARD_METRICS = {
  totalReviews: 248,
  positivePercent: 71,
  neutralPercent: 14,
  negativePercent: 15,
  avgRating: 4.2,
  avgConfidence: 0.89,
  weeklyTrend: [
    { week: 'W1', positive: 58, neutral: 12, negative: 10 },
    { week: 'W2', positive: 62, neutral: 14, negative: 9 },
    { week: 'W3', positive: 55, neutral: 18, negative: 14 },
    { week: 'W4', positive: 71, neutral: 14, negative: 15 },
  ],
  topAlerts: [
    { id: 'a1', homestay: 'Hilltop Mist Homestay', issue: 'Wi-Fi reliability', mentions: 9 },
    { id: 'a2', homestay: 'Valley View Farmstay', issue: 'Mosquito protection', mentions: 5 },
    { id: 'a3', homestay: 'Riverside Bamboo Cottage', issue: 'Pre-arrival cleaning', mentions: 4 },
  ],
}

export const HOMESTAYS = [
  'Riverside Bamboo Cottage',
  'Hilltop Mist Homestay',
  'Coconut Grove Stay',
  'Valley View Farmstay',
]

export function getReviewById(id) {
  return REVIEWS.find((r) => r.id === id)
}
