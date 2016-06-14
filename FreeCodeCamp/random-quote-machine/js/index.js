//list of quotes
var quotes = [{
quote: "Growth for the sake of growth is the ideology of a cancer cell." ,
source: "Edward Abbey"
}
,
{
quote: "They say the past is etched in stone, but it isn't. It's smoke trapped in a closed room…swirling, changing. Buffeted by the passing of years, and wishful thinking. But even though our perception of it changes, one thing remains constant: the past can never be completely erased. It lingers, like the scent of burning wood." ,
source: "Wesley, Netflix Daredevil"
}
,
{
quote: "A man without hope is a man without fear." , 
source: "Frank Miller, 616 Darevil"
}
,
{ 
quote: "He who has a why to live can bear almost any how." ,
source: "Friedrich Nietzsche"
} 
,
{
quote: "I assess the power of a will by how much resistance, pain, and torture it endures and knows how to turn to its advantage." ,
source: "Friedrich Nietzsche"
} 
,
{
quote: "Distrust everyone in whom the impulse to punish is powerful." ,
source: "Friedrich Nietzsche"
} 
,
{
quote: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age." ,
source: "H. P. Lovecraft"
} 
,
{ 
quote: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown." ,
source: "H.P. Lovecraft"
}
,
{
quote: "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently." ,
source: "Friedrich Nietzsche"
}
,
{
quote: "They tell us that suicide is the greatest piece of cowardice... that suicide is wrong; when it is quite obvious that there is nothing in the world to which every man has a more unassailable title than to his own life and person." , 
source: "Arthur Schopenhauer"
} 
,
{
quote: "If you want to know your true opinion of someone, watch the effect produced in you by the first sight of a letter from him.",
source: "Arthur Schopenhauer"
} 
,
{
quote: "New York is the only city in the world where you can get deliberately run down on the sidewalk by a pedestrian.", 
source: "Russell Baker"
} 
,
{
quote: "When you leave New York, you are astonished at how clean the rest of the world is.<br><br>Clean is not enough.", 
source: "Fran Lebowitz"
} 
,
{
quote: "The true New Yorker secretly believes that people living anywhere else have to be, in some sense, kidding.", 
source: "John Updike"
} 
,
{
quote: "People who have given us their complete confidence believe that they have a right to ours. The inference is false: a gift confers no rights.", 
source: "Friedrich Nietzsche"
} 
,
{
quote: "Using DOS is like juggling with straight razors. Using a Mac is like shaving with a bowling pin.", 
source: "Ted Nelson"
} 
,
{
quote: "It was a nice piece of work, Kingpin. You shouldn't have signed it." , 
source: "Matt Murdock, Daredevil (Earth-616)"
} 
,
{
quote: "As the telephone rang, he wondered again what kept him from suicide. Was it something as contemptible as sentimentality, or hope, or narcissism? No. It was really the desire to know what would happen next, despite the conviction that it was bound to be horrible: the narrative suspense of it all.", 
source: "Edward St Aubyn, Bad News"
}
,
{
quote: "The fact that a believer is happier than a skeptic is no more to the point than the fact that a drunken man is happier than a sober one. The happiness of credulity is a cheap and dangerous quality." 
, 
source: "George Bernard Shaw"
} 
,
{
quote: "Never argue with an idiot. They will drag you down to their level then beat you with experience.", 
source: "Anonymous"
} 
,
{
quote: "Where it is a duty to worship the sun it is pretty sure to be a crime to examine the laws of heat.", 
source: "John Morley"
} 
,
{
quote: "The hottest places in Hell are reserved for those who in time of great moral crises maintain their neutrality.", 
source: "Dante"
} 
,
{
quote: "The fact that an opinion has been widely held is no evidence whatever that it is not utterly absurd; indeed in view of the silliness of the majority of mankind, a widespread belief is more likely to be foolish than sensible.", 
source: "Bertrand Russell"
} 
,
{
quote: "Man is a credulous animal, and must believe something; in the absence of good grounds for belief, he will be satisfied with bad ones.", 
source: "Bertrand Russell"
}  
,
{
quote: "Those who can make you believe absurdities can make you commit atrocities.", 
source: "Voltaire"
} 
,
{
quote: "The essence of humanity's spiritual dilemma is that we evolved genetically to accept one truth and discovered another.", 
source: "E.O. Wilson"
}
,
{
quote: "I figured Daredevil must be Catholic because only a Catholic could be both an attorney and a vigilante.", 
source: "Frank Miller"
} 
,
{
quote: "Art without engineering is dreaming. Engineering without art is calculating.", 
source: "Anonymous"
}
,
{
quote: "It's only art unless you do some math. Then it's engineering.", 
source: "Unknown"
}
,
{
quote: "Scientists study the world as it is; engineers create the world that has never been.", 
source: "Unknown"
}
,
{
quote: "To the engineer falls the job of clothing the bare bones of science with life, comfort, and hope. No doubt as years go by people forget which engineer did it, even if they ever knew. . .but the engineer himself looks back at the unending stream of goodness which flows from his successes with satisfactions that few professions may know. And the verdict of his fellow professionals is all the accolades he wants.", 
source: "Herbert Hoover"
}
,
{
quote: "A doctor can kill patients one by one, an engineer can kill by the hundreds. Don't fuck up.", 
source: "Unknown"
}
,
{
quote: "At that time (1909) the chief engineer was almost always the chief test pilot as well. That had the fortunate result of eliminating poor engineering early in aviation.", 
source: "Igor Sikorsky"
}
,
{
quote: "One of the main skills of research scientists of any type is knowing how to work comfortably and productively in a state of confusion.", 
source: "Unknown"
}
,
{
quote: "...the over-whelming majority of English people have no experience of violence...if you have grown up in that sort of atmosphere it is not at all easy to imagine what a despotic régime is like. Nearly all the dominant writers of the thirties belonged to the soft-boiled emancipated middle class and were too young to have effective memories of the Great War. To people of that kind such things as purges, secret police, summary executions, imprisonment without trial etc., etc., are too remote to be terrifying. They can swallow totalitarianism because they have no experience of anything except liberalism.", 
source: "George Orwell"
}
,
{
quote: "...notice the phrase 'necessary murder'. It could only be written by a person to whom murder is at most a word. The Hitlers and Stalins find murder necessary, but they don't advertise their callousness, and they don't speak of it as murder; it is 'liquidation', 'elimination', or some other soothing phrase. Mr Auden's brand of amoralism is only possible, if you are the kind of person who is always somewhere else when the trigger is pulled. So much of left-wing thought is a kind of playing with fire by people who don't even know that fire is hot.", 
source: "George Orwell"
}
,
{
quote: "Good novels are not written by orthodoxy-sniffers, nor by people who are conscience-stricken about their own unorthodoxy. Good novels are written by people who are not frightened.", 
source: "George Orwell"
}
,
{
quote: "Great men are forged in fire. It is the privilege of lesser men to light the flame.", 
source: "The War Doctor, Doctor Who"
}
,
{
quote: "And then night came, and I had no choice: I needed to find a place to park my car. Now, this was before the days of all these websites, and forums, and parking apps, devoted solely to helping you find a place to park your car for less than the cost of major dental surgery. Back then, there was only one app, and it was called: Ask a New Yorker. What would happen is, you would Ask a New Yorker where to park. And they would spit on you.", 
source: "Doug DeMuro, The Secret To Cheap And Safe Parking For A Tourist In New York City"
}
,
{
quote: "This device is so cool that I can connect it to an Android device and the android inside the device thinks I'm connecting an xbox 360 controller, which is natively supported by the android living inside eating his kitkat and jellybeans!!!", 
source: "Amazon Review"
}
,
{
quote: "The price of agency is responsibility.", 
source: "Unknown"
}
,
{
quote: "High trees catch a lot of wind.", 
source: "Unknown"
}
,
{
quote: "Suicide is the most sincere form of self-criticism.", 
source: "Unknown"
}
,
{
quote: "Study hard what interests you the most in the most undisciplined and original manner possible.", 
source: "Richard Feynman"
}
,
{
quote: "It is what you read when you don't have to that determines what you will be when you can't help it.", 
source: "Oscar Wilde"
}
,
{
quote: "Everything in the world is about sex except sex. Sex is about power.", 
source: "Oscar Wilde"
}
,
{
quote: "Men occasionally stumble over truth, but most of them pick themselves up and hurry off as if nothing had happened.", 
source: "Winston Churchill"
}
,
{
quote: "If universities and liberal arts colleges would demand as many courses in science as MIT and Caltech require in the humanities, we could lead our students up a gentle slope to a considerable level of learning.", 
source: "F.H. Westheimer"
}
,
{
quote: "Criticism is something you can avoid easily by saying nothing, doing nothing, and being nothing.", 
source: "Aristotle"
}
,
{
quote: "The half of knowledge is knowing where to find knowledge.", 
source: "Unknown"
}
,
{
quote: "Quality is never an accident. It is always the result of high intention, sincere effort and skillful execution. It represents the wise choice of many alternatives.", 
source: "Unknown"
}
,
{
quote: "To know what is right and not do it is the worst cowardice.", 
source: "Confucius"
}
,
{
quote: "Scientific research consists in seeing what everyone else has seen, but thinking what no one else has thought.", 
source: "A. Szent-Gyorgyi "
}
,
{
quote: "It is difficult to get a man to understand something when his job depends on not understanding it.", 
source: "Upton Sinclair"
}
,
{
quote: "It is better to keep your mouth closed and be thought a fool then to open you mouth and remove all doubt.", 
source: "Mark Twain "
}
,
{
quote: "Good timber does not grow with ease; the stronger the wind, the stronger the trees.", 
source: "J. Willard Marriott"
}
,
{
quote: "I have never let my schooling interfere with my education.", 
source: "Mark Twain"
}
,
{
quote: "The easy path leads to the hard life. The hard path leads to the easy life.", 
source: "Rainer Maria Rilke"
}
,
{
quote: "Victory at all costs, victory in spite of all terror, victory however long and hard the road may be; for without victory there is no survival.", 
source: "Winston Churchill"
}
,
{
quote: "If you're going through hell, keep going.", 
source: "Winston Churchill"
}
,
{
quote: "Vision is the art of seeing things invisible.", 
source: "Jonathan Swift"
}
,
{
quote: "Education is what survives when what has been learnt has been forgotten.", 
source: "B.F. Skinner"
}
,
{
quote: "Only those who have the patience to do simple things perfectly will acquire the skill to do difficult things easily.", 
source: "Johann von Schiller"
}
,
{
quote: "The larger the island of knowledge, the longer the shoreline of wonder.", 
source: "Ralph W. Sockman"
}
,
{
quote: "It is almost as presumptuous to think you can do nothing as to think you can do everything.", 
source: "Phillips Brooks"
}
,
{
quote: "Better problem solvers don't necessarily have better hardware, they have better software.", 
source: "Unknown"
}
,
{
quote: "Doubt is the darkroom where negatives are developed.", 
source: "Unknown"
}
,
{
quote: "One reason people get lost in thought is because it's unfamiliar territory.", 
source: "Unknown"
}
,
{
quote: "In a time of deceit telling the truth is a revolutionary act.", 
source: "George Orwell"
}
,
{
quote: "The truth does not change according to our ability to stomach it.", 
source: "Flannery O'Connor"
}
,
{
quote: "Facts do not cease to exist because they are ignored.", 
source: "Aldous Huxley"
}
,
{
quote: "A true friend is someone who thinks that you are a good egg even though he knows that you are slightly cracked.", 
source: "Bernard Meltzer"
}
,
{
quote: "The more books you read, the less topics you have in common with most of the people, that's the price you pay for reading.", 
source: "Martina Tutková"
}
,
{
quote: "In spite of language, in spite of intelligence and intuition and sympathy, one can never really communicate anything to anybody. The essential substance of every thought and feeling remains incommunicable, locked up in the impenetrable strong-room of the individual soul and body. Our life is a sentence of perpetual solitary confinement.", 
source: "Aldous Huxley"
}
,
{
quote: "Half of the time I don't know what they're talking about; their jokes seem to relate to a past that everyone but me has shared. I'm a foreigner in the world and I don't understand the language.", 
source: "Jean Webster"
}
,
{
quote: "People love others not for who they are, but for how they make us feel.", 
source: "Irwin Federman"
}
,
{
quote: "No person is your friend who demands your silence, or denies your right to grow.", 
source: "Alice Walker"
}
,
{
quote: "We often contradict an opinion for no other reason than that we do not like the tone in which it is expressed. Arrogance on the part of the meritorious is even more offensive to us than the arrogance of those without merit, for merit itself is offensive.", 
source: "Friedrich Nietzsche"
}
,
{
quote: "Kouji no longer has any common ground with those who are blessed with such ignorance and innocence. . .just as pure oxygen is harmful to the body, the naked truth has the power to destroy men’s minds. Oxygen only becomes air when combined with five times as much nitrogen. Truth is the same. Only by diluting it with lies and taking it in small doses can humans maintain a healthy soul. ", 
source: "Urobochi Gen, Saya no Uta"
}
,
{
quote: "The US budget is like a 1st grader playing Oregon Trail. Spend all the money on ammunition so you can shoot at stuff, then wonder why your wagon is falling apart and everyone is dying of dysentery.", 
source: "Unknown"
}
,
{
quote: "As my social studies teacher used to say, the most sensitive part of a human's anatomy is his or her wallet.", 
source: "Unknown"
}
,
{
quote: "Ah, college. That time when you think you can change the world, and everyone else is glad you really can't.", 
source: "Unknown"
}
,
{
quote: "Scorpions are actually so cool... they are like tiny land lobsters with weapons.", 
source: "/u/afrankiewicz12, Reddit Comment"
}
,
{
quote: "Objectification is a funny thing. When a woman is objectified, she's usually seen an object of sex or beauty. When a man is objectified, he's usually seen as an object of war or of work. Just as many women would love to be \"objectified\" as useful or effective, many men would love to be \"objectified\" as enjoyable or attractive. <br><br>As humans, people of any gender tend to enjoy novel experiences. Like it or not, there is more than one kind of objectification and men are probably objectified about as much as women are.", 
source: "/u/nonsensepoem, Reddit Comment"
}
,
{
quote: "When women are objectified, it is as toys; when men are are objectified, it is as tools. A tool doesn't feel, a tool serves its function without comment or complaint, a tool will break before it will bend. And a broken tool is garbage to be cast aside. Nobody has time for a tool that can't perform.", 
source: "/u/nonsensepoem, Reddit Comment"
}
,
{
quote: "The optimist says the glass is half full. The pessimist says the glass is half empty. The engineer says the glass is twice as big as it needs to be.", 
source: "Unknown"
}
,
{
quote: "Must be a forth programmer. Those people are the unabombers of programming. Weird, isolated, and unhappy with everything.", 
source: "/u/heretohelp, Hacker News Comment"
}
,
{
quote: "Digital material is best stored by being used and copied constantly. Don't stick it in a vault, keep it alive like a plant.", 
source: "/u/jb, Metafilter Comment"
}
,
{
quote: "Engineers aren't boring people, we just get excited over boring things.", 
source: "Unknown"
}
,
{
quote: "Almost every Iron Man plot falls into one of five categories: stolen tech, hacked tech, business woes, health issues, or booze.", 
source: "/u/subtextsays, Tumblr Post"
}
,
{
quote: "The weakness of men is the facade of strength. The strength of women is the facade of weakness.", 
source: "Warren Farrell"
}
,

{
quote: "You can use an eraser on the drafting table or a sledgehammer on the construction site.", 
source: "Frank Lloyd Wright"
}
,
{
quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", 
source: "Bill Gates"
}
,
{
quote: "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.", 
source: "Leon Bambrick"
}
,
{
quote: "If Java had true garbage collection, most programs would delete themselves upon execution.", 
source: "Robert Sewell"
}
,
{
quote: "On two occasions I have been asked, \"Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\" In one case a member of the Upper, and in the other a member of the Lower House put this question. I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.", 
source: "Charles Babbage"
}
,
{
quote: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.", 
source: "C.A.R. Hoare"
}
,
{
quote: "There, it should work now.", 
source: "All programmers"
}
,
{
quote: "A good algorithm is like a sharp knife - it does exactly what it is supposed to do with a minimum amount of applied effort. Using the wrong algorithm to solve a problem is trying to cut a steak with a screwdriver: you may eventually get a digestible result, but you will expend considerable more effort than necessary, and the result is unlikely to be aesthetically pleasing.", 
source: "CLRS, Introduction to Algorithms"
}
,
{
quote: "But programmers' innate optimism is often obscured by their forthrightness about difficulties and problems. Reporters know that when you can't get a straight answer from a salesperson or a marketer about a product, an engineer will (when not locked away or ordered silent) speak the hard truth. . .if programmers are optimists by nature, they also have a keen eye for the downside. A hyperactive imagination for disaster scenarios is a professional asset; they have to think through everything that can go wrong in order to practice their craft.", 
source: "Scott Rosenberg, Dreaming in Code"
}
,
{
quote: "The art of simplicity is a puzzle of complexity.", 
source: "Doug Horton"
}
,
{
quote: "I had to succeed. Failure meant I would have to be homeless again.", 
source: "Elie Tahari"
}
,
{
quote: "Solitude vivifies; isolation kills.", 
source: "Joseph Roux"
}
,
{
quote: "Man's constitution is so peculiar that his health is purely a negative matter. No sooner is the rage of hunger appeased than it becomes difficult to comprehend the meaning of starvation. It is only when you suffer that you really understand.", 
source: "Jules Verne"
}
,
{
quote: "Before all masters, necessity is the one most listened to, and who teaches the best.", 
source: "Jules Verne"
}
,
{
quote: "When I was young I thought that money was the most important thing in life; now that I am old I know that it is.", 
source: "Oscar Wilde"
}
,
{
quote: "A man's face is his autobiography. A woman's face is her work of fiction.", 
source: "Oscar Wilde"
}
,
{
quote: "A thing is not necessarily true because a man dies for it.", 
source: "Oscar Wilde"
}
,
{
quote: "You will always be fond of me. I represent to you all the sins you have never had the courage to commit.", 
source: "Oscar Wilde"
}
,
{
quote: "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.", 
source: "Oscar Wilde"
}
,
{
quote: "There is always something ridiculous about the emotions of people whom one has ceased to love.", 
source: "Oscar Wilde"
}
,
{
quote: "London is too full of fogs and serious people. Whether the fogs produce the serious people, or whether the serious people produce the fogs, I don't know.", 
source: "Oscar Wilde"
}
,
{
quote: "Not to transmit an experience is to betray it.", 
source: "Elie Wiesel"
}
,
{
quote: "Whoever wishes to keep a secret must hide the fact that he possesses one.", 
source: "Johann Wolfgang von Goethe"
}
,
{
quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", 
source: "Martin Luther King Jr."
}
,
{
quote: "The doctor sees all the weakness of mankind; the lawyer all the wickedness, the theologian all the stupidity.", 
source: "Arthur Schopenhauer"
}
,
{
quote: "Threats to freedom of speech, writing and action, though often trivial in isolation, are cumulative in their effect and, unless checked, lead to a general disrespect for the rights of the citizen.", 
source: "George Orwell"
}
,
{
quote: "If liberty means anything at all it means the right to tell people what they do not want to hear. The common people still vaguely subscribe to that doctrine and act on it. In our country — and it is not the same in all countries — it is the liberals who fear liberty and the intellectuals who want to do dirt on the intellect.", 
source: "George Orwell"
}
,
{
quote: "For a successful technology, reality must take precedence over public relations, for nature cannot be fooled.", 
source: "Richard Feynman"
}
,
{
quote: "...the facilities at City College were barely second rate. There were no research laboratories; the library was inadequate. The faculty contained few noted scholars. What made the place special was the student body that had fought so hard to get there. . .from these ranks, of the 1930s and 1940s, emerged a wealth of intellectual talent, including more Nobel Prize winners and PhD recipients than any other public college...", 
source: "Wikipedia, Jonas Salk"
}
,
{
quote: "He’s obsessed with the Wronskian. He’d marry it if he could.", 
source: "Overheard at CCNY, NAC Library"
}
,
{
quote: "I don't see how it’s doing society any good to have its members walking around with vague memories of algebraic formulas and geometric diagrams, and clear memories of hating them.", 
source: "Paul Lockhart, A Mathematician's Lament"
}
,
{
quote: "Education is the art of conveying a sense of truth by telling a series of decreasing lies.", 
source: "Steven Wittens"
}
,
{
quote: "I knew that meant you and I would probably never speak again. Or be friends again. Or partners again. I told myself I was okay with it because I knew I was right and I knew it was saving lives. It was the right thing to do! I knew the world favors the underdog and that I would be the bad guy. I knew this. And--and even though I said I was willing to go all the way with it...I wasn't. I know this because the worst has happened. The thing I can't live with has happened. And for all our back and forth--and all the things we've said and done to each other...for all the hard questions I've had to ask, and terrible lies I've had to tell... there's one thing that I'll never be able to tell anyone now. Not my friends or my co-workers or my President... the one thing!! The one thing I should have told you. But now I can't... <br><br>It wasn't worth it. ", 
source: "Anthony Stark, Civil War: The Confession (Earth-616)"
}
,
{
quote: "Until my backup battery charges, I've got nothing. I'm the Very Vincible Iron Man. ", 
source: "Anthony Stark, Iron Man"
}
,
{
quote: "So much to do, so little RAM.", 
source: "Anthony Stark, Iron Man"
}
,
{
quote: "I take back 50% of all the bad things I ever said about you. ", 
source: "Anthony Stark, Iron Man"
}
,
{
quote: "I've always had money, but I never saw the need to make a bathroom like this. It’s like making a shrine to your pooping.", 
source: "Anthony Stark, International Iron Man #3 (Earth-616)"
}
,
{
quote: "I really wanted to talk to her. I just couldn't find an algorithm that fit.", 
source: "Peter Watts, Blindsight"
}
,
{
quote: "Stars, everywhere. So many stars that I could not for the life me understand how the sky could contain them all yet be so black.", 
source: "Peter Watts, Blindsight"
}
,
{
quote: "The only reason we were here was because nobody had yet optimized software for First Contact.", 
source: "Peter Watts, Blindsight"
}
,
{
quote: "As far as anyone could tell, Portia had learned to partition its cognitive processes: almost as if it were emulating a larger brain piece by piece, saving the results of one module to feed into the next. Slices of intellect, built and demolished one after another. No one would ever know for sure—a rogue synthophage had taken out the world’s Salticids before anyone had gotten around to taking a closer look—but the Icarus slime mold seemed to have taken the same basic idea and run with it.", 
source: "Peter Watts, Echopraxia"
}
,
{
quote: "Humans didn’t really fight over skin tone or ideology; those were just handy cues for kin-selection purposes. Ultimately it always came down to bloodlines and limited resources.", 
source: "Peter Watts, Blindsight"
}
,
{
quote: "He who seeks for methods without having a definite problem in mind seeks in the most part in vain.", 
source: "David Hilbert"
}
,
{
quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", 
source: "Mark Twain"
}
,
{
quote: "Hardware: the parts of a computer system that can be kicked.", 
source: "Jeff Pesis"
}
,
{
quote: "Truth in politics is optional. Truth in engineering is mandatory.", 
source: "Igor Sikorsky"
}
];

function makeUniqueRandom() {
  // refill the array if needed
  if (!uniqueRandoms.length) {
    for (var i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var uniqueIndex = uniqueRandoms[index];
  // now remove that value from the array
  uniqueRandoms.splice(index, 1);
  return uniqueIndex;
}

function loadQuote() {
  // get random unused index
  var quoteIndex = makeUniqueRandom();
  console.log(quoteIndex + " quote index")
  n++;
  console.log(n + " rounds")
    // add quote and source to html 
  console.log(quotes[quoteIndex].quote)
  $(".quote").html(quotes[quoteIndex].quote);
  $(".source").html(quotes[quoteIndex].source);
  // update tweet button
  var tweetURL = "https://twitter.com/intent/tweet?text=" + (quotes[quoteIndex].quote).replace(/<(?:.|\n)*?>/gm, '') +
    "&hashtags=" + (quotes[quoteIndex].source).replace(/ /g, "");

  $(".tweetURL").attr("href", tweetURL);
  console.log("tweetURL")

}

function zoominQuote() {
  // zoom out old quote
  $(".quote-box").addClass("animated zoomIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
    $(this).removeClass("animated zoomIn");
  });
  loadQuote();
}
var n = 0;
var uniqueRandoms = [];
var numRandoms = quotes.length;
console.log(numRandoms + " num randoms")

//on page load
loadQuote();
// on button click 
$('.next-quote').click(function() {
  zoominQuote();
});
// use arrow keys to navigate
document.addEventListener("keydown", function(event) {
  // spacebar, left arrow, or right arrow
  if (_.contains([32, 37, 39], event.which)) {
    zoominQuote();
  }
});
$(document.body).tooltip({
  selector: "[title]"
});

//resize text to fit div!
$('body').flowtype({
 minimum   : 300,
 maximum   : 1000,
 minFont   : 12,
 maxFont   : 26,
 fontRatio : 30
});
