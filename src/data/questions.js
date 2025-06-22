const questions = [
  {
    id: 1,
    question: "A teammate makes a mistake that impacts your work. What do you do?",
    options: [
      { text: "Step in to fix it without blame", trait: "Empathetic" },
      { text: "Address it in a team meeting", trait: "Leader" },
      { text: "Analyze the mistake for future prevention", trait: "Logical" },
      { text: "Stay calm and adapt", trait: "Calm" }
    ]
  },
  {
    id: 2,
    question: "You're given a creative task with no instructions. What's your first step?",
    options: [
      { text: "Start brainstorming ideas", trait: "Creative" },
      { text: "Ask others for input", trait: "Collaborative" },
      { text: "Research how it's done", trait: "Curious" },
      { text: "Create a structured plan", trait: "Logical" }
    ]
  },
  {
    id: 3,
    question: "You find a wallet full of cash on the street. What do you do?",
    options: [
      { text: "Turn it in to the police", trait: "Honest" },
      { text: "Check for ID to return it directly", trait: "Empathetic" },
      { text: "Leave it there; someone may come back", trait: "Cautious" },
      { text: "Keep it and donate to someone in need", trait: "Altruistic" }
    ]
  },
  {
    id: 4,
    question: "You have 3 deadlines and limited time. How do you proceed?",
    options: [
      { text: "Prioritize and plan tasks", trait: "Strategic" },
      { text: "Start with what’s easiest", trait: "Realistic" },
      { text: "Stay cool and work consistently", trait: "Calm" },
      { text: "Ask for help to split the load", trait: "Collaborative" }
    ]
  },
  {
    id: 5,
    question: "You are in charge of a failing group project. What do you do?",
    options: [
      { text: "Take control and delegate", trait: "Leader" },
      { text: "Motivate the team emotionally", trait: "Charismatic" },
      { text: "Identify root causes and fix them", trait: "Logical" },
      { text: "Quietly do most of the work", trait: "Humble" }
    ]
  },
  {
    id: 6,
    question: "You receive harsh criticism on your idea. What’s your response?",
    options: [
      { text: "Use it to improve yourself", trait: "Resilient" },
      { text: "Explain your point calmly", trait: "Confident" },
      { text: "Thank them and reflect later", trait: "Patient" },
      { text: "Ask for a solution instead", trait: "Practical" }
    ]
  },
  {
    id: 7,
    question: "You win a team award. How do you respond?",
    options: [
      { text: "Credit the team and share spotlight", trait: "Humble" },
      { text: "Celebrate it with energy", trait: "Charismatic" },
      { text: "Evaluate what made it work", trait: "Logical" },
      { text: "Move on and focus on next goal", trait: "Resilient" }
    ]
  },
  {
    id: 8,
    question: "You’ve failed an important exam. What now?",
    options: [
      { text: "Make a comeback plan", trait: "Resilient" },
      { text: "Talk to a mentor", trait: "Empathetic" },
      { text: "Evaluate your mistakes logically", trait: "Logical" },
      { text: "Relax and try again later", trait: "Calm" }
    ]
  },
  {
    id: 9,
    question: "A friend is facing a problem you can’t solve. What do you do?",
    options: [
      { text: "Just be there for them emotionally", trait: "Empathetic" },
      { text: "Help connect them to someone who can", trait: "Helpful" },
      { text: "Offer logical suggestions", trait: "Logical" },
      { text: "Give them space and time", trait: "Patient" }
    ]
  },
  {
    id: 10,
    question: "You're lost in a new city. What's your next move?",
    options: [
      { text: "Explore and enjoy the experience", trait: "Adventurous" },
      { text: "Ask a local for help", trait: "Collaborative" },
      { text: "Use maps and logic to find a route", trait: "Strategic" },
      { text: "Stay calm and wait in a safe spot", trait: "Cautious" }
    ]
  },
  {
    id: 11,
    question: "You're given full freedom in a project. How do you work?",
    options: [
      { text: "Take bold creative decisions", trait: "Independent" },
      { text: "Collaborate for better ideas", trait: "Collaborative" },
      { text: "Break it down into logical steps", trait: "Logical" },
      { text: "Follow instincts and flow", trait: "Creative" }
    ]
  },
  {
    id: 12,
    question: "You're offered a high-paying job that conflicts with your values. What do you do?",
    options: [
      { text: "Decline it and stay true", trait: "Honest" },
      { text: "Negotiate better terms", trait: "Strategic" },
      { text: "Take it temporarily", trait: "Realistic" },
      { text: "Reflect deeply before acting", trait: "Calm" }
    ]
  },
  {
    id: 13,
    question: "You are placed in an unknown team with strangers. What do you do?",
    options: [
      { text: "Introduce yourself confidently", trait: "Charismatic" },
      { text: "Observe before speaking", trait: "Cautious" },
      { text: "Start bonding through shared tasks", trait: "Collaborative" },
      { text: "Take charge immediately", trait: "Leader" }
    ]
  },
  {
    id: 14,
    question: "Your idea gets rejected. What's your next move?",
    options: [
      { text: "Work on improving it", trait: "Resilient" },
      { text: "Pitch a better one", trait: "Confident" },
      { text: "Understand why it failed", trait: "Logical" },
      { text: "Let it go peacefully", trait: "Calm" }
    ]
  },
  {
    id: 15,
    question: "You overhear someone being bullied. What do you do?",
    options: [
      { text: "Step in directly", trait: "Leader" },
      { text: "Support the victim later", trait: "Empathetic" },
      { text: "Report it anonymously", trait: "Strategic" },
      { text: "Try to de-escalate calmly", trait: "Calm" }
    ]
  },
  {
    id: 16,
    question: "You're starting something new and unknown. What's your attitude?",
    options: [
      { text: "Excited to dive in", trait: "Adventurous" },
      { text: "Plan everything beforehand", trait: "Strategic" },
      { text: "Take it slow and safe", trait: "Cautious" },
      { text: "Ask people who’ve done it", trait: "Collaborative" }
    ]
  },
  {
    id: 17,
    question: "You’re working on a boring task. How do you manage it?",
    options: [
      { text: "Gamify it and have fun", trait: "Creative" },
      { text: "Just focus and finish it", trait: "Disciplined" },
      { text: "Break it into short sprints", trait: "Strategic" },
      { text: "Listen to music and relax", trait: "Calm" }
    ]
  },
  {
    id: 18,
    question: "Someone wrongly accuses you. How do you respond?",
    options: [
      { text: "Defend calmly with facts", trait: "Confident" },
      { text: "Stay silent and let truth come out", trait: "Patient" },
      { text: "Clear it respectfully", trait: "Humble" },
      { text: "Take bold action", trait: "Leader" }
    ]
  },
  {
    id: 19,
    question: "You see a homeless person asking for help. What's your reaction?",
    options: [
      { text: "Offer food or help", trait: "Altruistic" },
      { text: "Donate to an NGO", trait: "Strategic" },
      { text: "Feel sad but move on", trait: "Realistic" },
      { text: "Talk and connect with them", trait: "Empathetic" }
    ]
  },
  {
    id: 20,
    question: "You need to learn a tough new skill quickly. How do you start?",
    options: [
      { text: "Watch videos or tutorials", trait: "Curious" },
      { text: "Try and learn through mistakes", trait: "Resilient" },
      { text: "Break it into a step-wise plan", trait: "Logical" },
      { text: "Ask an expert to guide you", trait: "Collaborative" }
    ]
  }
];

export default questions;
