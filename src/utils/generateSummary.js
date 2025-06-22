// 📁 src/utils/generateSummary.js

const summaries = [
  {
    traits: ["Empathetic", "Honest", "Calm"],
    text: `You're someone others trust — not just because you tell the truth, but because you *feel* deeply what others are going through. You’re calm in chaos, thoughtful in silence, and loyal without needing attention. In difficult moments, you often carry others’ pain while hiding your own, which can leave you drained. This kindness, though rare, makes you a rock in both relationships and professional life. Just remember: helping others doesn’t mean forgetting yourself. 🌱 "The strongest hearts are the softest ones."`
  },
  {
    traits: ["Leader", "Confident", "Strategic"],
    text: `You have the rare ability to take control without crushing others. People often follow you not out of fear, but respect. You plan with intent, act with purpose, and rarely back down when you believe in something. However, sometimes your intensity can leave others behind. Great leaders inspire — not just instruct. Let others grow with you, not under you. 👑 "True leadership listens as much as it speaks."`
  },
  {
    traits: ["Creative", "Curious", "Adventurous"],
    text: `You're a mind in motion — always exploring, always questioning. You rarely settle, and routine is your biggest enemy. While this makes you brilliant at generating ideas and seeing beyond the obvious, it can also leave you scattered. Focus is your next superpower. 🎨 "The explorer who learns to anchor becomes unstoppable."`
  },
  {
    traits: ["Logical", "Realistic", "Patient"],
    text: `You are the voice of reason in a noisy world. You don't get swept away — you step back, observe, calculate. While this makes you trustworthy and steady, emotions may sometimes feel like distractions to you. But emotion is data too. The best minds balance facts and feelings. 🧠 "Wisdom lives where logic and compassion meet."`
  },
  {
    traits: ["Charismatic", "Empathetic", "Optimistic"],
    text: `You lift rooms just by entering. You don’t just talk — you connect. Your optimism gives others hope, and your empathy gives them warmth. However, don’t pour so much out that there’s nothing left for you. Protect your energy. ✨ "Shine, but don’t burn."`
  },
  {
    traits: ["Cautious", "Humble", "Realistic"],
    text: `You’re grounded — thoughtful before acting, humble in success, and aware of your limits. This protects you from rash decisions, but sometimes also holds you back from risk and growth. Believe that you’re more capable than you think. 🛡️ "Caution builds safety, courage builds change."`
  },
  {
    traits: ["Independent", "Confident", "Resilient"],
    text: `You walk alone, not because you have to — but because you *can*. Life has taught you self-reliance, and you've become unshakable through trials. Just remember: asking for help is not weakness. Even warriors need rest. 🏹 "Resilience is power. Vulnerability is strength."`
  }
];

export default function generateSummary(topTraits) {
  // Try to find best match (order-independent)
  for (let s of summaries) {
    const match = s.traits.every((t) => topTraits.includes(t));
    if (match) return s.text;
  }

  // Fallback generic paragraph
  return `You're a complex person with a unique blend of qualities. Some parts of you lead, others support, and many grow quietly within. Use your strengths wisely, acknowledge your weaknesses humbly, and walk your path with reflection and courage. 🌟 "Character isn't given. It's built."`;
}
