export const EVENTS = [
    {
      title: "Share a dish that represents home",
      description:
        "Food is a bridge. Show a meal or ingredient that connects you to your roots. If you prefer, share a story about who makes it or when it’s eaten.",
    },
    {
      title: "Show a greeting in your culture",
      description:
        "A word, gesture, or custom used to say hello. Teach us how it’s used and with whom.",
    },
    {
      title: "A view from your everyday",
      description:
        "A window, street, or spot that feels familiar. What makes it ‘home’ to you?",
    },
    {
      title: "Something you wear with meaning",
      description:
        "Clothing, jewellery, or symbols with cultural significance. Tell us when it’s worn and why.",
    },
    {
      title: "A place where your community gathers",
      description:
        "A market, café, hall, temple, pitch — places where culture lives together.",
    },
    {
      title: "A sound or instrument you love",
      description:
        "From folk instruments to chants — what does it sound like and when is it heard?",
    },
    {
      title: "A tradition that makes you smile",
      description:
        "A ritual, holiday, or custom — big or small — that brings joy.",
    },
  ];
  
  export function getTodayEvent() {
    const idx = new Date().getDay() % EVENTS.length;
    return EVENTS[idx]; // { title, description }
  }
  