export const EVENTS = [
    "Share a dish that represents home",
    "Show a greeting in your culture",
    "A view from your everyday",
    "Something you wear with meaning",
    "A place where your community gathers",
    "A sound or instrument you love",
    "A tradition that makes you smile",
  ];
  
  export function getTodayPrompt() {
    const idx = new Date().getDay() % EVENTS.length; // 0-6
    return EVENTS[idx];
  }
  