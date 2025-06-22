const tagTitles = [
  {
    traits: ["Leader", "Confident"],
    title: "The Commander 🛡️"
  },
  {
    traits: ["Creative", "Curious"],
    title: "The Visionary 🎨"
  },
  {
    traits: ["Empathetic", "Honest"],
    title: "The Healer ❤️"
  },
  {
    traits: ["Logical", "Realistic"],
    title: "The Strategist ♟️"
  },
  {
    traits: ["Independent", "Resilient"],
    title: "The Lone Wolf 🐺"
  },
  {
    traits: ["Calm", "Patient"],
    title: "The Monk 🧘"
  },
  {
    traits: ["Adventurous", "Optimistic"],
    title: "The Explorer 🌍"
  },
  {
    traits: ["Humble", "Cautious"],
    title: "The Guardian 🛡️"
  }
];

export default function getPersonalityTitle(topTraits) {
  for (let t of tagTitles) {
    if (t.traits.every(trait => topTraits.includes(trait))) {
      return t.title;
    }
  }
  return "A Unique Soul ✨"; // fallback default
}
