function generateQuote() {
  var quotes = {
    "― Oscar Wilde": `"Be yourself; everyone else is already taken."`,
    "― Oscar Wilde, The Happy Prince and Other Stories": `"I am so clever that sometimes I don't understand a single word of what I am saying."`,
    "― Narcotics Anonymous": `"Insanity is doing the same thing, over and over again, but expecting different results."`,
    "― Andre Gide, Autumn Leaves": `"It is better to be hated for what you are than to be loved for what you are not."`,
    "― Ralph Waldo Emerson": `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    "― Mahatma Gandhi": `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    "― Martin Luther King Jr., A Testament of Hope: The Essential Writings": `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    "― Oscar Wilde": `"Always forgive your enemies; nothing annoys them so much."`,
    "― Oscar Wilde": `"To live is the rarest thing in the world. Most people exist, that is all."`,
    "― Elbert Hubbard": `"A friend is someone who knows all about you and still loves you."`,
    "― Maya Angelou": `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    "― C.S. Lewis, The Four Loves": `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."`,
    "― Mark Twain": `"If you tell the truth, you don't have to remember anything."`,
    "― Albert Camus": `"Don’t walk in front of me… I may not follow
  Don’t walk behind me… I may not lead
  Walk beside me… just be my friend"`,
    "― Robert Frost": `"In three words I can sum up everything I've learned about life: it goes on."`,
    "― Mae West": `"You only live once, but if you do it right, once is enough."`,
    "― Mahatma Gandhi": `"Be the change that you wish to see in the world."`,
    "― Dr. Seuss": `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    "― Oscar Wilde": `"Be yourself; everyone else is already taken."`,
  };

  var allAuthors = Object.keys(quotes);
  var author = allAuthors[Math.floor(Math.random() * allAuthors.length)];
  var quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
