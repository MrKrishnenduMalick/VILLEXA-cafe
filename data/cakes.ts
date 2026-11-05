export interface CustomCakeTier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: number;
  leadTime: string;
  servings: string;
  image: string;
  flavours: string[];
}

export const CUSTOM_CAKES: CustomCakeTier[] = [
  {
    id: 'haute-couture-wedding',
    name: 'Haute Couture Wedding Monument',
    tagline: '3 to 5 Tier Bespoke Architectural Masterpiece',
    description: 'Designed exclusively with the couple during an intimate private tasting. Finished with sugar-sculpted botanicals, edible 24k gold leaf filigree, and cascading wafer-paper petals.',
    startingPrice: 12500,
    leadTime: '14 days notice required',
    servings: '50 – 200 Guests',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop',
    flavours: ['Madagascar Vanilla & Raspberry Compote', 'Belgian Dark Truffle & Salted Caramel', 'Sicilian Pistachio & Rose Water'],
  },
  {
    id: 'baroque-gold-celebration',
    name: 'The Baroque Gold Drip Cake',
    tagline: 'Double-Height Celebration Centerpiece',
    description: 'Velvet smooth dark chocolate ganache draped in 24k gold leaf drip, adorned with hand-painted jewel bonbons, French macarons, and fresh blackberries.',
    startingPrice: 4200,
    leadTime: '48 hours notice',
    servings: '12 – 24 Guests',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop',
    flavours: ['Triple Chocolate Valrhona', 'Salted Butter Caramel Crunch', 'Espresso Gianduja'],
  },
  {
    id: 'botanical-meadow-entremet',
    name: 'Botanical Meadow Floral Cake',
    tagline: 'Organic Pressed Edible Blossoms',
    description: 'Ethereal naked sponge frosted in whipped Tahitian vanilla mascarpone, pressed with pesticide-free organic violas, cornflowers, and seasonal fruit pearls.',
    startingPrice: 3600,
    leadTime: '48 hours notice',
    servings: '10 – 18 Guests',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
    flavours: ['Lemon Verbena & Wild Strawberry', 'Matcha White Chocolate', 'Earl Grey Lavender Honey'],
  },
  {
    id: 'the-cherry-celebration-slab',
    name: 'The Grand Cherry Sphere Cake',
    tagline: 'Our Signature Entremet in Large Celebration Size',
    description: 'The monumental party edition of our bestselling "The Cherry" dessert. A mirror-glazed dome of Guanaja chocolate mousse with cherry compote on hazelnut feuilletine.',
    startingPrice: 4800,
    leadTime: '72 hours notice',
    servings: '16 – 22 Guests',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    flavours: ['Signature Dark Chocolate & Morello Cherry'],
  },
];
