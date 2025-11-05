"use client";

import { useState } from "react";

interface MarketingCampaign {
  id: number;
  company: string;
  campaign: string;
  description: string;
  weirdness: string;
  result: string;
  year: string;
  emoji: string;
}

const campaigns: MarketingCampaign[] = [
  {
    id: 1,
    company: "Cards Against Humanity",
    campaign: "Black Friday: Sold Literal Poop",
    description: "On Black Friday, Cards Against Humanity sold boxes of actual bull feces for $6 each.",
    weirdness: "They literally sold crap to customers during the biggest shopping day of the year",
    result: "Sold 30,000 boxes and made $180,000. Their point? To satirize consumerism and prove people will buy anything.",
    year: "2014",
    emoji: "💩"
  },
  {
    id: 2,
    company: "KFC",
    campaign: "Chicken-Scented Sunscreen",
    description: "KFC released 'Extra Crispy Sunscreen' that made you smell like fried chicken in the sun.",
    weirdness: "Who wants to smell like fast food at the beach? Apparently everyone.",
    result: "Sold out in hours. Generated massive social media buzz and millions in free publicity.",
    year: "2016",
    emoji: "🍗"
  },
  {
    id: 3,
    company: "Burger King",
    campaign: "The Whopper Detour",
    description: "BK app would only let you order a 1¢ Whopper if you were within 600 feet of a McDonald's.",
    weirdness: "Forced customers to go to their competitor's location to unlock the deal",
    result: "App downloads increased by 1.5 million in 9 days. Became the #1 downloaded app in Apple's app store.",
    year: "2018",
    emoji: "🍔"
  },
  {
    id: 4,
    company: "Dollar Shave Club",
    campaign: "Our Blades Are F***ing Great",
    description: "A low-budget viral video with the founder riding through a warehouse on a forklift, delivering deadpan jokes.",
    weirdness: "Crude humor, absurdist sketches, and a $4,500 budget for a product launch",
    result: "12,000 orders in the first 48 hours. Eventually sold to Unilever for $1 billion.",
    year: "2012",
    emoji: "🪒"
  },
  {
    id: 5,
    company: "Old Spice",
    campaign: "The Man Your Man Could Smell Like",
    description: "Isaiah Mustafa delivered rapid-fire monologues while absurd scenarios unfolded in continuous shots.",
    weirdness: "A body wash ad targeting women about what they want their men to smell like, featuring a shirtless man on a horse",
    result: "1.4 billion impressions. Sales increased 125% in 6 months. Viral sensation.",
    year: "2010",
    emoji: "🚿"
  },
  {
    id: 6,
    company: "Taco Bell",
    campaign: "Steal a Base, Steal a Taco",
    description: "During the World Series, Taco Bell promised free tacos to everyone if any player stole a base.",
    weirdness: "Entire marketing campaign dependent on baseball statistics most people don't understand",
    result: "Gave away millions of tacos. Generated massive social media engagement every World Series since 2007.",
    year: "2007-Present",
    emoji: "🌮"
  },
  {
    id: 7,
    company: "Liquid Death",
    campaign: "Murder Your Thirst (Death to Plastic)",
    description: "Sold water in skull-covered tallboy cans with metal band aesthetics and taglines like 'Murder Your Thirst.'",
    weirdness: "Made water look like beer, marketed it like an extreme sports drink, called customers 'maniacs'",
    result: "Valued at $700 million. Became fastest-growing beverage brand by making water rebellious.",
    year: "2019-Present",
    emoji: "💀"
  },
  {
    id: 8,
    company: "Wendy's",
    campaign: "Twitter Roast Wars",
    description: "Wendy's social media team started brutally roasting customers, competitors, and anyone who challenged them.",
    weirdness: "A fast-food chain gained fame by being mean to people on the internet",
    result: "Gained 1 million followers in a year. Created a new template for brand social media engagement.",
    year: "2017",
    emoji: "🔥"
  },
  {
    id: 9,
    company: "IKEA",
    campaign: "Pee on This Ad",
    description: "Swedish IKEA ran a magazine ad that was also a pregnancy test. Peeing on it would reveal a discount on cribs.",
    weirdness: "A mainstream furniture retailer asked people to urinate on their magazine advertisement",
    result: "Won multiple advertising awards. Generated global media coverage worth millions.",
    year: "2018",
    emoji: "🪑"
  },
  {
    id: 10,
    company: "Mailchimp",
    campaign: "Did You Mean Mailchimp?",
    description: "Intentionally misspelled their name as MailShrimp, KaleLimp, JailBlimp, etc. across all marketing.",
    weirdness: "Spent millions deliberately getting their own brand name wrong everywhere",
    result: "300% increase in brand awareness. Made their name unforgettable by making it forgettable.",
    year: "2017",
    emoji: "🐒"
  },
  {
    id: 11,
    company: "Poopourri",
    campaign: "Girls Don't Poop",
    description: "Viral video featuring a posh British woman discussing bathroom odors in explicit detail while maintaining elegance.",
    weirdness: "Broke the bathroom taboo with a weirdly classy approach to toilet humor",
    result: "42 million YouTube views. Built a $300 million company from a product most thought unsellable.",
    year: "2013",
    emoji: "🚽"
  },
  {
    id: 12,
    company: "Charmin",
    campaign: "SitOrSquat App",
    description: "Toilet paper brand created an app to help people find clean public bathrooms.",
    weirdness: "Made bathroom humor their entire brand identity and built utility around it",
    result: "Millions of downloads. Became the go-to bathroom finder app, making Charmin synonymous with bathroom needs.",
    year: "2011",
    emoji: "🧻"
  },
  {
    id: 13,
    company: "Paddy Power",
    campaign: "Cutting Down the Rainforest",
    description: "Fake PR stunt claiming they destroyed rainforest to create a massive ad visible from space.",
    weirdness: "Pretended to commit environmental destruction for publicity (it was CGI)",
    result: "Massive outrage, huge media coverage, then revealed it was fake and donated to rainforest conservation.",
    year: "2010",
    emoji: "🌳"
  },
  {
    id: 14,
    company: "Corsair",
    campaign: "Dropped a Gaming PC from Space",
    description: "Literally sent a PC to the edge of space and dropped it to see if it would survive and still work.",
    weirdness: "Destroyed a $30,000 custom gaming rig for entertainment value",
    result: "Millions of views. Demonstrated product durability in the most absurd way possible.",
    year: "2018",
    emoji: "🚀"
  },
  {
    id: 15,
    company: "Pornhub",
    campaign: "Save the Bees Initiative",
    description: "Adult site launched 'Pornhub Cares' planting a tree for every 100 videos watched in a special category.",
    weirdness: "Adult entertainment company became environmental activists using their core service",
    result: "Planted thousands of trees. Rebranded as socially conscious, generating mainstream positive press.",
    year: "2016",
    emoji: "🐝"
  }
];

export default function Home() {
  const [selectedCampaign, setSelectedCampaign] = useState<MarketingCampaign | null>(null);
  const [sortBy, setSortBy] = useState<"year" | "weirdness">("year");

  const sortedCampaigns = [...campaigns].sort((a, b) => {
    if (sortBy === "year") {
      return parseInt(b.year) - parseInt(a.year);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            🤯 The Weirdest Marketing Ever
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            These companies broke all the rules and made millions doing it
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 inline-flex gap-2">
            <button
              onClick={() => setSortBy("year")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                sortBy === "year"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white/20"
              }`}
            >
              By Year
            </button>
            <button
              onClick={() => setSortBy("weirdness")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                sortBy === "weirdness"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white/20"
              }`}
            >
              By Weirdness
            </button>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              onClick={() => setSelectedCampaign(campaign)}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer transform transition-all hover:scale-105 hover:bg-white/20 border-2 border-white/20"
            >
              <div className="text-5xl mb-3">{campaign.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{campaign.company}</h3>
              <p className="text-pink-100 text-sm font-semibold mb-2">{campaign.campaign}</p>
              <p className="text-white/80 text-sm line-clamp-3">{campaign.description}</p>
              <div className="mt-4 text-xs text-pink-200 font-bold">{campaign.year}</div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCampaign && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCampaign(null)}
          >
            <div
              className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-6xl">{selectedCampaign.emoji}</div>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="text-white hover:text-pink-200 text-3xl font-bold"
                >
                  ×
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-2">{selectedCampaign.company}</h2>
              <h3 className="text-xl text-pink-100 font-semibold mb-4">{selectedCampaign.campaign}</h3>

              <div className="space-y-4 text-white">
                <div>
                  <h4 className="font-bold text-pink-200 mb-1">What They Did:</h4>
                  <p className="text-white/90">{selectedCampaign.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-pink-200 mb-1">Why It&apos;s Weird:</h4>
                  <p className="text-white/90">{selectedCampaign.weirdness}</p>
                </div>

                <div>
                  <h4 className="font-bold text-pink-200 mb-1">The Result:</h4>
                  <p className="text-white/90">{selectedCampaign.result}</p>
                </div>

                <div className="pt-4 border-t border-white/30">
                  <span className="text-pink-200 font-bold">Year: </span>
                  <span className="text-white">{selectedCampaign.year}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-white/70 text-sm mt-16">
          <p>Proof that being weird in marketing can pay off big time</p>
        </div>
      </div>
    </div>
  );
}
