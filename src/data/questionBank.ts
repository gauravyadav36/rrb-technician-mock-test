import type { Question, SubjectName } from '../types';

const buildOptions = (correct: string, wrong: string[]) => [
  { id: 'A', text: correct, isCorrect: true },
  { id: 'B', text: wrong[0], isCorrect: false },
  { id: 'C', text: wrong[1], isCorrect: false },
  { id: 'D', text: wrong[2], isCorrect: false },
];

const mathQuestionBlueprints = [
  { topic: 'Algebra', question: 'If $x^2 - 5x + 6 = 0$, what are the values of $x$?', correct: '2 and 3', wrong: ['-2 and -3', '1 and 6', '-1 and -6'], explanation: 'Factorising: $(x-2)(x-3)=0$, so $x=2$ or $x=3$.' },
  { topic: 'BODMAS', question: 'Evaluate: $8 + 6 \\div 2 \\times 3$', correct: '17', wrong: ['13', '15', '11'], explanation: 'Using BODMAS: $6\\div2=3$, $3\\times3=9$, then $8+9=17$.' },
  { topic: 'Percentages', question: 'What is 25% of 480?', correct: '120', wrong: ['80', '100', '140'], explanation: '25% = 1/4. $480 \\div 4 = 120$.' },
  { topic: 'LCM/HCF', question: 'The LCM of 12 and 18 is:', correct: '36', wrong: ['6', '18', '24'], explanation: 'LCM of 12 and 18 is 36 because it is the smallest common multiple.' },
  { topic: 'Ratio', question: 'If $a:b = 3:5$ and $b:c = 5:7$, then $a:c = ?$', correct: '3:7', wrong: ['5:7', '3:5', '7:3'], explanation: 'Since $b$ matches, ratio becomes $a:c = 3:7$.' },
  { topic: 'Simple Interest', question: 'A sum of ₹5000 earns simple interest at 6% per annum for 2 years. What is the interest?', correct: '₹600', wrong: ['₹300', '₹500', '₹750'], explanation: 'Simple interest $= PRT/100 = 5000 \\times 6 \\times 2 /100 = 600$.' },
  { topic: 'Mensuration', question: 'Area of a rectangle with length 12 cm and breadth 5 cm is:', correct: '60 sq cm', wrong: ['30 sq cm', '17 sq cm', '72 sq cm'], explanation: 'Area = length × breadth = $12 \\times 5 = 60$ sq cm.' },
  { topic: 'Profit and Loss', question: 'A product is sold at ₹450 after a 10% discount on the marked price. What is the marked price?', correct: '₹500', wrong: ['₹400', '₹450', '₹495'], explanation: 'Selling price is 90% of marked price, so $450 / 0.9 = 500$.' },
  { topic: 'Time and Distance', question: 'A train travels 120 km in 2 hours. Its speed is:', correct: '60 km/h', wrong: ['45 km/h', '50 km/h', '75 km/h'], explanation: 'Speed = distance ÷ time = $120/2 = 60$ km/h.' },
  { topic: 'Age Calculations', question: 'A father is 3 times as old as his son. After 12 years, father will be twice as old as the son. What is the son’s present age?', correct: '12 years', wrong: ['10 years', '14 years', '8 years'], explanation: 'Let son = $x$, father = $3x$. Then $3x+12 = 2(x+12)$ gives $x=12$.' },
  { topic: 'Trigonometry', question: 'If $\\sin\\theta = 1/2$, then $\\theta$ in the first quadrant is:', correct: '30°', wrong: ['45°', '60°', '90°'], explanation: 'The standard value is $\\sin 30° = 1/2$.' },
  { topic: 'Geometry', question: 'The sum of interior angles of a pentagon is:', correct: '540°', wrong: ['360°', '720°', '450°'], explanation: 'Sum = $(n-2)\\times180 = (5-2)\\times180 = 540°$.' },
  { topic: 'Statistics', question: 'The median of 4, 7, 8, 10, 11 is:', correct: '8', wrong: ['7', '10', '9'], explanation: 'The middle value in the ordered list is 8.' },
  { topic: 'Time and Work', question: 'A can complete a task in 12 days and B in 18 days. Working together, they will finish it in:', correct: '7.2 days', wrong: ['8 days', '7 days', '6.5 days'], explanation: 'Work per day = 1/12 + 1/18 = 5/36; time = 36/5 = 7.2 days.' },
  { topic: 'Pipes and Cisterns', question: 'A tap fills a tank in 8 hours and another tap empties it in 12 hours. If both work together, the tank will be filled in:', correct: '24 hours', wrong: ['10 hours', '15 hours', '20 hours'], explanation: 'Net rate = 1/8 - 1/12 = 1/24, hence time = 24 hours.' }
];

const reasoningQuestionBlueprints = [
  { topic: 'Analogy', question: 'Book : Library :: Seed : ?', correct: 'Garden', wrong: ['Tree', 'Soil', 'Fruit'], explanation: 'A book belongs in a library, just as a seed belongs in a garden.' },
  { topic: 'Series', question: '3, 6, 12, 24, ?', correct: '48', wrong: ['36', '40', '30'], explanation: 'Each term doubles, so the next is 48.' },
  { topic: 'Coding-Decoding', question: 'If in a code, MATH is written as NBUI, then LOGIC is written as:', correct: 'MPHDJ', wrong: ['KOFHD', 'MNHKD', 'LPHJD'], explanation: 'Each letter is shifted by +1 in alphabetic order.' },
  { topic: 'Directions', question: 'A person walks 10 m north, then 6 m east, then 10 m south. How far is he from the starting point?', correct: '6 m', wrong: ['4 m', '10 m', '16 m'], explanation: 'North and south cancel; only 6 m east remains.' },
  { topic: 'Classification', question: 'Which one does not belong? 2, 3, 5, 7, 9', correct: '9', wrong: ['2', '3', '7'], explanation: 'All others are prime numbers; 9 is composite.' },
  { topic: 'Syllogism', question: 'All engineers are intelligent. Some intelligent people are teachers. Which conclusion is valid?', correct: 'Some teachers are engineers', wrong: ['All teachers are engineers', 'All engineers are teachers', 'No engineer is a teacher'], explanation: 'The given premises support only that some teachers may be engineers.' },
  { topic: 'Blood Relation', question: 'A is the brother of B. C is the sister of A. D is the father of C. How is B related to D?', correct: 'Son', wrong: ['Daughter', 'Grandson', 'Brother'], explanation: 'B is a son of D.' },
  { topic: 'Alphabet Series', question: 'A, C, F, J, ?', correct: 'O', wrong: ['M', 'N', 'P'], explanation: 'The gaps are +2, +3, +4, +5; next is +5 after J = O.' },
  { topic: 'Number Series', question: '8, 13, 21, 34, ?', correct: '55', wrong: ['42', '47', '50'], explanation: 'This is a Fibonacci-like sequence: +5,+8,+13, then +21 => 55.' },
  { topic: 'Logical Order', question: 'Arrange in meaningful order: Seed, Plant, Fruit, Flower', correct: 'Seed, Plant, Flower, Fruit', wrong: ['Plant, Seed, Fruit, Flower', 'Fruit, Flower, Plant, Seed', 'Seed, Flower, Plant, Fruit'], explanation: 'The natural sequence is seed → plant → flower → fruit.' }
];

const scienceQuestionBlueprints = [
  { topic: 'Units & Measurements', question: 'SI unit of force is:', correct: 'Newton', wrong: ['Joule', 'Watt', 'Pascal'], explanation: 'Force is measured in newtons.' },
  { topic: 'Work, Power & Energy', question: 'The unit of power is:', correct: 'Watt', wrong: ['Joule', 'Newton', 'Volt'], explanation: 'Power is measured in watts.' },
  { topic: 'Heat & Temperature', question: 'The temperature at which water freezes at standard atmospheric pressure is:', correct: '0°C', wrong: ['32°F', '100°C', '273 K'], explanation: 'Water freezes at 0°C or 273 K.' },
  { topic: 'Basic Electricity', question: 'Ohm’s law relates:', correct: 'Voltage, current and resistance', wrong: ['Mass, density and force', 'Work, energy and power', 'Heat, time and pressure'], explanation: 'Ohm’s law states $V = IR$.' },
  { topic: 'Mass, Weight & Density', question: 'Mass of a substance per unit volume is called:', correct: 'Density', wrong: ['Weight', 'Force', 'Pressure'], explanation: 'Density = mass ÷ volume.' },
  { topic: 'Environment Education', question: 'Which gas is mainly responsible for global warming?', correct: 'Carbon dioxide', wrong: ['Oxygen', 'Nitrogen', 'Argon'], explanation: 'CO₂ traps heat and contributes to global warming.' },
  { topic: 'Simple Machines', question: 'A lever works on the principle of:', correct: 'Moments', wrong: ['Density', 'Velocity', 'Pressure'], explanation: 'A lever balances moments created by effort and load.' },
  { topic: 'Occupational Safety', question: 'Which of the following is a basic protective equipment in workshops?', correct: 'Safety goggles', wrong: ['Cotton scarf', 'Sandals', 'Loose clothing'], explanation: 'Safety goggles protect the eyes from dust and sparks.' },
  { topic: 'IT Literacy', question: 'CPU stands for:', correct: 'Central Processing Unit', wrong: ['Central Program Unit', 'Control Program Utility', 'Computer Processing Unit'], explanation: 'CPU is the main processing component of a computer.' },
  { topic: 'Speed & Velocity', question: 'Velocity is a quantity that includes:', correct: 'Magnitude and direction', wrong: ['Only magnitude', 'Only direction', 'Only mass'], explanation: 'Velocity is speed in a specified direction.' }
];

const awarenessQuestionBlueprints = [
  { topic: 'Current Affairs', question: 'Which city hosted the 2024 Summer Olympics?', correct: 'Paris', wrong: ['Rome', 'Tokyo', 'Madrid'], explanation: 'The 2024 Summer Olympics were held in Paris.' },
  { topic: 'Politics', question: 'The head of the Union Government in India is:', correct: 'Prime Minister', wrong: ['President', 'Governor', 'Chief Justice'], explanation: 'The Prime Minister leads the Union Government.' },
  { topic: 'Economics', question: 'The Reserve Bank of India is the central bank of:', correct: 'India', wrong: ['USA', 'UK', 'Japan'], explanation: 'RBI is India’s central bank.' },
  { topic: 'Sports', question: 'The national sport of India is:', correct: 'No official national sport', wrong: ['Cricket', 'Kabaddi', 'Hockey'], explanation: 'India does not have an officially designated national sport.' },
  { topic: 'Science & Technology', question: 'The process of converting sunlight into electricity is done by:', correct: 'Solar cells', wrong: ['Batteries', 'Turbines', 'Generators'], explanation: 'Solar cells convert solar energy directly into electrical energy.' },
  { topic: 'Culture', question: 'Who is known as the “Father of the Nation” in India?', correct: 'Mahatma Gandhi', wrong: ['Jawaharlal Nehru', 'Rani Abbakka Chowta', 'Subhas Chandra Bose'], explanation: 'Mahatma Gandhi is known as the Father of the Nation.' },
  { topic: 'Personalities', question: 'Who wrote the Indian national anthem “Jana Gana Mana”?', correct: 'Rabindranath Tagore', wrong: ['Bankim Chandra Chatterjee', 'Sardar Patel', 'Lal Bahadur Shastri'], explanation: 'Rabindranath Tagore wrote the national anthem.' },
  { topic: 'Current Affairs', question: 'Which organization is the world’s largest democracy?', correct: 'India', wrong: ['USA', 'China', 'Brazil'], explanation: 'India is the world’s largest democracy by population and electoral structure.' },
  { topic: 'Economics', question: 'GDP stands for:', correct: 'Gross Domestic Product', wrong: ['Gross Domestic Price', 'General Development Program', 'Gross Demand Production'], explanation: 'GDP measures total output in a country.' },
  { topic: 'Politics', question: 'Who is the constitutional head of the state in India?', correct: 'President', wrong: ['Prime Minister', 'Speaker', 'Chief Minister'], explanation: 'The President is the constitutional head of the state.' }
];

const toQuestions = (
  subject: SubjectName,
  blueprints: Array<{ topic: string; question: string; correct: string; wrong: string[]; explanation: string }>,
  count: number,
): Question[] =>
  Array.from({ length: count }, (_, index) => {
    const source = blueprints[index % blueprints.length];
    return {
      id: `${subject.toLowerCase().replace(/[^a-z]+/g, '_')}_${String(index + 1).padStart(3, '0')}`,
      subject,
      topic: source.topic,
      difficulty: index % 3 === 0 ? 'hard' : index % 2 === 0 ? 'medium' : 'easy',
      question: source.question,
      options: buildOptions(source.correct, source.wrong),
      explanation: source.explanation,
    };
  });

export const QUESTION_BANK: Record<string, Question[]> = {
  'Mathematics': toQuestions('Mathematics', mathQuestionBlueprints, 150),
  'General Intelligence & Reasoning': toQuestions('General Intelligence & Reasoning', reasoningQuestionBlueprints, 150),
  'General Science': toQuestions('General Science', scienceQuestionBlueprints, 150),
  'General Awareness': toQuestions('General Awareness', awarenessQuestionBlueprints, 150),
};

export const SUBJECT_COUNT: Record<string, number> = Object.fromEntries(
  Object.entries(QUESTION_BANK).map(([subject, questions]) => [subject, questions.length]),
);

export const SAMPLE_NOTES = [
  {
    subject: 'Mathematics',
    title: 'Mathematics Quick Notes',
    topics: [
      {
        title: 'Number System',
        label: 'number-system',
        content: [
          'Natural numbers start from 1, Whole numbers include 0, Integers include negative values, and Rational numbers are in p/q form.',
          'The decimal system uses base 10 and place values like units, tens, hundreds, and so on.',
          'LCM is useful for combining cycles, while HCF is useful for equal grouping and distribution.'
        ],
        formulas: ['LCM(a,b) = \\frac{a\\times b}{HCF(a,b)}']
      },
      {
        title: 'Algebra Fundamentals',
        label: 'algebra',
        content: [
          'A polynomial is an expression with one or more terms, while a linear equation has a single variable raised to power 1.',
          'Quadratic equations may be solved by factorisation, completing the square, or the quadratic formula.',
          'The quadratic formula is $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.'
        ],
        formulas: ['x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}']
      }
    ]
  },
  {
    subject: 'General Intelligence & Reasoning',
    title: 'Reasoning Strategy Notes',
    topics: [
      {
        title: 'Analogy',
        label: 'analogy',
        content: [
          'Analogies compare a relationship between a pair of things to another pair.',
          'Look at the relation carefully before identifying the correct option.',
          'Examples: Book:Library::Seed:Garden.'
        ],
        formulas: []
      },
      {
        title: 'Series Completion',
        label: 'series',
        content: [
          'Arithmetic progression adds a constant difference, while geometric progression multiplies by a constant ratio.',
          'Pattern recognition often involves alternating operations or increasing step sizes.',
          'A sequence like 2, 4, 8, 16 is a geometric progression.'
        ],
        formulas: ['a_n = a + (n-1)d']
      }
    ]
  },
  {
    subject: 'General Science',
    title: 'General Science Notes',
    topics: [
      {
        title: 'Work, Power and Energy',
        label: 'work-power',
        content: [
          'Work is force applied over a distance.',
          'Power is the rate of doing work, and energy is the capacity to do work.',
          'Potential energy is stored energy, while kinetic energy is energy of motion.'
        ],
        formulas: ['W = F \\times d', 'P = \\frac{W}{t}', 'K.E. = \\frac{1}{2}mv^2']
      },
      {
        title: 'Electricity Basics',
        label: 'electricity',
        content: [
          'Charge, current, voltage, resistance, and power are fundamental elements of electrical circuits.',
          'Current is measured in amperes, resistance in ohms, and voltage in volts.',
          'Ohm’s law states that voltage is equal to current times resistance.'
        ],
        formulas: ['V = IR', 'P = VI']
      }
    ]
  },
  {
    subject: 'General Awareness',
    title: 'General Awareness Quick Guide',
    topics: [
      {
        title: 'Indian Polity',
        label: 'polity',
        content: [
          'India is a federal parliamentary democracy with a written constitution.',
          'The President is the constitutional head, while the Prime Minister leads the government.',
          'The Parliament consists of the Lok Sabha, Rajya Sabha, and the President.'
        ],
        formulas: []
      },
      {
        title: 'Economy',
        label: 'economy',
        content: [
          'GDP measures the total value of final goods and services produced in a country.',
          'Inflation refers to a sustained increase in prices over time.',
          'The Reserve Bank of India regulates monetary policy and banking operations.'
        ],
        formulas: ['GDP = C + I + G + (X - M)']
      }
    ]
  }
];

export const FORMULA_SHEET = [
  'Simple Interest: $SI = \\frac{P \\times R \\times T}{100}$',
  'Compound Interest: $A = P\\left(1 + \\frac{R}{100}\\right)^T$',
  'Speed: $Speed = \\frac{Distance}{Time}$',
  'Quadratic Formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
  'Area of Rectangle: $A = l \\times b$',
  'Area of Circle: $A = \\pi r^2$',
  'Ohm’s Law: $V = IR$',
  'Power: $P = VI = I^2R = \\frac{V^2}{R}$'
];
