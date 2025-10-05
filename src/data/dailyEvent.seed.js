export const EVENTS = [
    {
      title: "Diwali",
      description:
        "Celebrated primarily in Hinduism, Jainism and Sikhism, Diwali is a festival celebrated in India, and among Indian communities around the world. It is ‘the festival of lights’ and symbolises the victory of light over darkness and good over evil. Diwali occurs over 5 days, each day having its own significance and rituals. It is a time for unity, joy and cultural celebration. Common traditions include lighting Diyas, Rangoli, Puja rituals, feasting and exchanging gifts, and fireworks. ",
    },
    {
      title: "Mid-Autumn Festival",
      description:
        "Also known as the Moon Festival or Mooncake Festival, this is a festival celebrated in Chinese culture on the 15th day of the 8th month of the Chinese lunisolar calendar. This festival marks the end of the autumn harvest, families gather and celebrate the full moon which symbolises completeness and reunion. It has been happening for over 3,000 years. Common traditions found in the Mid-Autumn Festival include: mooncakes, family gatherings,lanterns and moon gazing.",
    },
    {
      title: "Dia de los Muertos(Day of the Dead)",
      description:
        "Day of the Dead celebrates the lives of deceased loved ones by honoring their memory and spirit. It’s a festival where families believe the souls of the dead temporarily return to Earth, leading to joyful celebrations with food, drink, music, and the creation of altars called ofrendas wo welcome them.",
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
  
 