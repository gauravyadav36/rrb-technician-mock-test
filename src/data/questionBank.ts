import type { Question, SubjectName } from '../types';

const buildOptions = (correct: string, wrong: string[]) => [
  { id: 'A', text: correct, isCorrect: true },
  { id: 'B', text: wrong[0], isCorrect: false },
  { id: 'C', text: wrong[1], isCorrect: false },
  { id: 'D', text: wrong[2], isCorrect: false },
];

const mathQuestions: Question[] = [
  { id: 'math_01', subject: 'Mathematics', topic: 'Algebra', difficulty: 'easy', question: 'If $x^2 - 5x + 6 = 0$, what are the values of $x$?', options: buildOptions('2 and 3', ['-2 and -3', '1 and 6', '-1 and -6']), explanation: 'Factorising gives $(x-2)(x-3)=0$, so $x=2$ or $x=3$.' },
  { id: 'math_02', subject: 'Mathematics', topic: 'BODMAS', difficulty: 'easy', question: 'Evaluate: $8 + 6 \div 2 \times 3$', options: buildOptions('17', ['13', '15', '11']), explanation: 'Using BODMAS: division then multiplication: $6\div2=3$, $3\times3=9$, then $8+9=17$.' },
  { id: 'math_03', subject: 'Mathematics', topic: 'Percentages', difficulty: 'medium', question: 'What is 25% of 480?', options: buildOptions('120', ['80', '100', '140']), explanation: '25% = 1/4. $480 \div 4 = 120$.' },
  { id: 'math_04', subject: 'Mathematics', topic: 'LCM/HCF', difficulty: 'medium', question: 'The LCM of 12 and 18 is:', options: buildOptions('36', ['6', '18', '24']), explanation: 'LCM of 12 and 18 is 36 because it is the smallest multiple common to both.' },
  { id: 'math_05', subject: 'Mathematics', topic: 'Ratio', difficulty: 'easy', question: 'If $a:b = 3:5$ and $b:c = 5:7$, then $a:c = ?$', options: buildOptions('3:7', ['5:7', '3:5', '7:3']), explanation: 'Since $b$ matches, the ratio becomes $a:c = 3:7$.' },
  { id: 'math_06', subject: 'Mathematics', topic: 'Simple Interest', difficulty: 'medium', question: 'A sum of ₹5000 earns simple interest at 6% per annum for 2 years. What is the interest?', options: buildOptions('₹600', ['₹300', ['₹500'], ['₹750']].flat()[0] as string, ['₹450']), explanation: 'Simple interest $= PRT/100 = 5000 \times 6 \times 2 /100 = 600$.' },
  { id: 'math_07', subject: 'Mathematics', topic: 'Mensuration', difficulty: 'medium', question: 'Area of a rectangle with length 12 cm and breadth 5 cm is:', options: buildOptions('60 sq cm', ['30 sq cm', '17 sq cm', '72 sq cm']), explanation: 'Area of rectangle = length × breadth = $12 \times 5 = 60$ sq cm.' },
  { id: 'math_08', subject: 'Mathematics', topic: 'Profit and Loss', difficulty: 'medium', question: 'A product is sold at ₹450 after a 10% discount on the marked price. What is the marked price?', options: buildOptions('₹500', ['₹400', '₹450', '₹495']), explanation: 'Selling price is 90% of marked price, so marked price = $450 / 0.9 = 500$.' },
  { id: 'math_09', subject: 'Mathematics', topic: 'Time and Distance', difficulty: 'easy', question: 'A train travels 120 km in 2 hours. Its speed is:', options: buildOptions('60 km/h', ['45 km/h', '50 km/h', '75 km/h']), explanation: 'Speed = distance ÷ time = $120/2 = 60$ km/h.' },
  { id: 'math_10', subject: 'Mathematics', topic: 'Age Calculations', difficulty: 'medium', question: 'A father is 3 times as old as his son. After 12 years, father will be twice as old as the son. What is the son’s present age?', options: buildOptions('12 years', ['10 years', '14 years', '8 years']), explanation: 'Let son = $x$, father = $3x$. Then $3x+12 = 2(x+12)$ gives $x=12$.' },
  { id: 'math_11', subject: 'Mathematics', topic: 'Trigonometry', difficulty: 'medium', question: 'If $\sin\theta = 1/2$, then $\theta$ in the first quadrant is:', options: buildOptions('30°', ['45°', '60°', '90°']), explanation: 'The standard value is $\sin 30° = 1/2$.' },
  { id: 'math_12', subject: 'Mathematics', topic: 'Geometry', difficulty: 'medium', question: 'The sum of interior angles of a pentagon is:', options: buildOptions('540°', ['360°', '720°', '450°']), explanation: 'Sum = $(n-2)\times180 = (5-2)\times180 = 540°$.' },
  { id: 'math_13', subject: 'Mathematics', topic: 'Statistics', difficulty: 'easy', question: 'The median of 4, 7, 8, 10, 11 is:', options: buildOptions('8', ['7', '10', '9']), explanation: 'The middle value in the ordered list is 8.' },
  { id: 'math_14', subject: 'Mathematics', topic: 'Time and Work', difficulty: 'hard', question: 'A can complete a task in 12 days and B in 18 days. Working together, they will finish it in:', options: buildOptions('7.2 days', ['8 days', '7 days', '6.5 days']), explanation: 'Work per day = 1/12 + 1/18 = 5/36; time = 36/5 = 7.2 days.' },
  { id: 'math_15', subject: 'Mathematics', topic: 'Pipes and Cisterns', difficulty: 'medium', question: 'A tap fills a tank in 8 hours and another tap empties it in 12 hours. If both work together, the tank will be filled in:', options: buildOptions('24 hours', ['10 hours', '15 hours', '20 hours']), explanation: 'Net rate = 1/8 - 1/12 = 1/24, hence time = 24 hours.' }
];

const reasoningQuestions: Question[] = [
  { id: 'reason_01', subject: 'General Intelligence & Reasoning', topic: 'Analogy', difficulty: 'easy', question: 'Book : Library :: Seed : ?', options: buildOptions('Garden', ['Tree', 'Soil', 'Fruit']), explanation: 'A book belongs in a library, just as a seed belongs in a garden.' },
  { id: 'reason_02', subject: 'General Intelligence & Reasoning', topic: 'Series', difficulty: 'easy', question: '3, 6, 12, 24, ?', options: buildOptions('48', ['36', '40', '30']), explanation: 'Each term doubles, so next is 48.' },
  { id: 'reason_03', subject: 'General Intelligence & Reasoning', topic: 'Coding-Decoding', difficulty: 'medium', question: 'If in a code, MATH is written as NBUI, then LOGIC is written as:', options: buildOptions('MPHDJ', ['KOFHD', 'MNHKD', 'LPHJD']), explanation: 'Each letter is shifted by +1 in alphabetic order.' },
  { id: 'reason_04', subject: 'General Intelligence & Reasoning', topic: 'Directions', difficulty: 'medium', question: 'A person walks 10 m north, then 6 m east, then 10 m south. How far is he from the starting point?', options: buildOptions('6 m', ['4 m', '10 m', '16 m']), explanation: 'North and south cancel; only 6 m east remains.' },
  { id: 'reason_05', subject: 'General Intelligence & Reasoning', topic: 'Classification', difficulty: 'easy', question: 'Which one does not belong? 2, 3, 5, 7, 9', options: buildOptions('9', ['2', '3', '7']), explanation: 'All others are prime numbers; 9 is composite.' },
  { id: 'reason_06', subject: 'General Intelligence & Reasoning', topic: 'Syllogism', difficulty: 'medium', question: 'All engineers are intelligent. Some intelligent people are teachers. Which conclusion is valid?', options: buildOptions('Some teachers are engineers', ['All teachers are engineers', 'All engineers are teachers', 'No engineer is a teacher']), explanation: 'Only the conclusion that some teachers are engineers is possible from the given statements; the others are unsupported.' },
  { id: 'reason_07', subject: 'General Intelligence & Reasoning', topic: 'Blood Relation', difficulty: 'medium', question: 'A is the brother of B. C is the sister of A. D is the father of C. How is B related to D?', options: buildOptions('Son', ['Daughter', 'Grandson', 'Brother']), explanation: 'B is a son of D.' },
  { id: 'reason_08', subject: 'General Intelligence & Reasoning', topic: 'Alphabet Series', difficulty: 'easy', question: 'A, C, F, J, ?', options: buildOptions('O', ['M', 'N', 'P']), explanation: 'The gaps are +2, +3, +4, +5; next is +5 after J = O.' },
  { id: 'reason_09', subject: 'General Intelligence & Reasoning', topic: 'Number Series', difficulty: 'medium', question: '8, 13, 21, 34, ?', options: buildOptions('55', ['42', '47', '50']), explanation: 'This is a Fibonacci-like sequence: +5,+8,+13, then +21 => 55.' },
  { id: 'reason_10', subject: 'General Intelligence & Reasoning', topic: 'Logical Order', difficulty: 'easy', question: 'Arrange in meaningful order: Seed, Plant, Fruit, Flower', options: buildOptions('Seed, Plant, Flower, Fruit', ['Plant, Seed, Fruit, Flower', 'Fruit, Flower, Plant, Seed', 'Seed, Flower, Plant, Fruit']), explanation: 'The natural sequence is seed → plant → flower → fruit.' }
];

const scienceQuestions: Question[] = [
  { id: 'science_01', subject: 'General Science', topic: 'Units & Measurements', difficulty: 'easy', question: 'SI unit of force is:', options: buildOptions('Newton', ['Joule', 'Watt', 'Pascal']), explanation: 'Force is measured in newtons, symbol N.' },
  { id: 'science_02', subject: 'General Science', topic: 'Work, Power & Energy', difficulty: 'easy', question: 'The unit of power is:', options: buildOptions('Watt', ['Joule', 'Newton', 'Volt']), explanation: 'Power is measured in watts.' },
  { id: 'science_03', subject: 'General Science', topic: 'Heat & Temperature', difficulty: 'easy', question: 'The temperature at which water freezes at standard atmospheric pressure is:', options: buildOptions('0°C', ['32°F', '100°C', '273 K']), explanation: 'Water freezes at 0°C or 273 K.' },
  { id: 'science_04', subject: 'General Science', topic: 'Basic Electricity', difficulty: 'medium', question: 'Ohm’s law relates:', options: buildOptions('Voltage, current and resistance', ['Mass, density and force', 'Work, energy and power', 'Heat, time and pressure']), explanation: 'Ohm’s law states $V = IR$.' },
  { id: 'science_05', subject: 'General Science', topic: 'Mass, Weight & Density', difficulty: 'easy', question: 'Mass of a substance per unit volume is called:', options: buildOptions('Density', ['Weight', 'Force', 'Pressure']), explanation: 'Density = mass ÷ volume.' },
  { id: 'science_06', subject: 'General Science', topic: 'Environment Education', difficulty: 'easy', question: 'Which gas is mainly responsible for global warming?', options: buildOptions('Carbon dioxide', ['Oxygen', 'Nitrogen', 'Argon']), explanation: 'CO₂ traps heat and contributes to global warming.' },
  { id: 'science_07', subject: 'General Science', topic: 'Simple Machines', difficulty: 'medium', question: 'A lever works on the principle of:', options: buildOptions('Moments', ['Density', 'Velocity', 'Pressure']), explanation: 'A lever balances moments created by effort and load.' },
  { id: 'science_08', subject: 'General Science', topic: 'Occupational Safety', difficulty: 'easy', question: 'Which of the following is a basic protective equipment in workshops?', options: buildOptions('Safety goggles', ['Cotton scarf', 'Sandals', 'Loose clothing']), explanation: 'Safety goggles protect the eyes from dust, sparks and chemicals.' },
  { id: 'science_09', subject: 'General Science', topic: 'IT Literacy', difficulty: 'easy', question: 'CPU stands for:', options: buildOptions('Central Processing Unit', ['Central Program Unit', 'Control Program Utility', 'Computer Processing Unit']), explanation: 'CPU is the main processing component of a computer.' },
  { id: 'science_10', subject: 'General Science', topic: 'Speed & Velocity', difficulty: 'easy', question: 'Velocity is a quantity that includes:', options: buildOptions('Magnitude and direction', ['Only magnitude', 'Only direction', 'Only mass']), explanation: 'Velocity is speed in a specified direction.' }
];

const awarenessQuestions: Question[] = [
  { id: 'aware_01', subject: 'General Awareness', topic: 'Current Affairs', difficulty: 'easy', question: 'Which city hosted the 2024 Summer Olympics?', options: buildOptions('Paris', ['Rome', ['Tokyo'], ['London']].flat()[0] as string, 'Berlin', 'Madrid'), explanation: 'The 2024 Summer Olympics were held in Paris.' },
  { id: 'aware_02', subject: 'General Awareness', topic: 'Politics', difficulty: 'medium', question: 'The head of the Union Government in India is:', options: buildOptions('Prime Minister', ['President', 'Governor', 'Chief Justice']), explanation: 'The Prime Minister is the head of the Union Government.' },
  { id: 'aware_03', subject: 'General Awareness', topic: 'Economics', difficulty: 'easy', question: 'The Reserve Bank of India is the central bank of:', options: buildOptions('India', ['USA', 'UK', 'Japan']), explanation: 'RBI is India’s central bank.' },
  { id: 'aware_04', subject: 'General Awareness', topic: 'Sports', difficulty: 'easy', question: 'The national sport of India is:', options: buildOptions('No official national sport', ['Cricket', 'Kabaddi', 'Hockey']), explanation: 'India does not have an officially designated national sport.' },
  { id: 'aware_05', subject: 'General Awareness', topic: 'Science & Technology', difficulty: 'medium', question: 'The process of converting sunlight into electricity is done by:', options: buildOptions('Solar cells', ['Batteries', ['Turbines'], ['Motors']].flat()[0] as string, 'Generators'), explanation: 'Solar cells convert solar energy directly into electrical energy.' },
  { id: 'aware_06', subject: 'General Awareness', topic: 'Culture', difficulty: 'easy', question: 'Who is known as the “Father of the Nation” in India?', options: buildOptions('Mahatma Gandhi', ['Jawaharlal Nehru', 'Rani Abbakka Chowta', 'Subhas Chandra Bose']), explanation: 'Mahatma Gandhi is known as the Father of the Nation.' },
  { id: 'aware_07', subject: 'General Awareness', topic: 'Personalities', difficulty: 'easy', question: 'Who wrote the Indian national anthem “Jana Gana Mana”?', options: buildOptions('Rabindranath Tagore', ['Bankim Chandra Chatterjee', 'Sardar Patel', 'Lal Bahadur Shastri']), explanation: 'Rabindranath Tagore wrote the national anthem.' },
  { id: 'aware_08', subject: 'General Awareness', topic: 'Current Affairs', difficulty: 'medium', question: 'Which organization is the world’s largest democracy?', options: buildOptions('India', ['USA', 'China', 'Brazil']), explanation: 'India is the world’s largest democracy by population and electoral structure.' },
  { id: 'aware_09', subject: 'General Awareness', topic: 'Economics', difficulty: 'easy', question: 'GDP stands for:', options: buildOptions('Gross Domestic Product', ['Gross Domestic Price', 'General Development Program', 'Gross Demand Production']), explanation: 'GDP is the measure of total value of goods and services produced within a country.' },
  { id: 'aware_10', subject: 'General Awareness', topic: 'Politics', difficulty: 'easy', question: 'Who is the constitutional head of the state in India?', options: buildOptions('President', ['Prime Minister', 'Speaker', 'Chief Minister']), explanation: 'The President is the constitutional head of the state.' }
];

export const QUESTION_BANK: Record<string, Question[]> = {
  'Mathematics': [...mathQuestions],
  'General Intelligence & Reasoning': [...reasoningQuestions],
  'General Science': [...scienceQuestions],
  'General Awareness': [...awarenessQuestions],
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
          'The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.'
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
  'Simple Interest: $SI = \\frac{P \times R \times T}{100}$',
  'Compound Interest: $A = P\\left(1 + \\frac{R}{100}\\right)^T$',
  'Speed: $Speed = \\frac{Distance}{Time}$',
  'Quadratic Formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
  'Area of Rectangle: $A = l \times b$',
  'Area of Circle: $A = \pi r^2$',
  'Ohm’s Law: $V = IR$',
  'Power: $P = VI = I^2R = \\frac{V^2}{R}$'
];
