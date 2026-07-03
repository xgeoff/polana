import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

import menuImg from "@assets/ChatGPT_Image_Jul_3,_2026,_01_42_01_PM_1783111688320.png";
import signImg from "@assets/ChatGPT_Image_Jul_3,_2026,_01_42_11_PM_1783111688320.png";
import interiorImg from "@assets/xgeoff_Nordic_bistro_meets_krakow_cafe_modern_Polish_restauran_1783111688320.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-[#FAF8F5] p-6 flex justify-between items-center font-sans tracking-widest text-xs uppercase">
        <div>POLANA</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#menu" className="hover:opacity-70 transition-opacity">Menu</a>
          <a href="#visit" className="hover:opacity-70 transition-opacity">Visit</a>
        </div>
        <div><a href="#visit" className="border-b border-current pb-1 hover:opacity-70 transition-opacity">Book Table</a></div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-16">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={interiorImg} 
            alt="Polana interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-[#FAF8F5] max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif mb-6 tracking-tight"
          >
            Polana
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans uppercase tracking-[0.3em] text-sm md:text-base opacity-90"
          >
            Contemporary Central European Cuisine
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-32 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            A clearing in the forest.
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 font-sans font-light leading-relaxed">
            <p>
              Polana (poh-LAH-nah) means "a clearing in the forest" in Polish. Our menu is a celebration of the rich flavours, ingredients and stories of Central Europe — reimagined with modern technique and a focus on seasonal, local ingredients.
            </p>
            <p className="font-serif italic text-2xl text-foreground">
              "Inspired by tradition. Made for today."
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img src={signImg} alt="Polana exterior signage" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Seasonality Section */}
      <section className="bg-primary text-primary-foreground py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#FAF8F5]">Honouring the agricultural calendar.</h2>
            <p className="text-lg opacity-90 font-light font-sans max-w-md">
              Our menu rotates with the seasons, rooted deeply in the agricultural tradition of Central Europe. 
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div className="border-t border-secondary/50 pt-6">
              <h3 className="font-sans uppercase tracking-widest text-sm text-secondary mb-4">Spring</h3>
              <p className="font-serif text-xl">Asparagus, fresh herbs, spring onions, radish</p>
            </div>
            <div className="border-t border-secondary/50 pt-6">
              <h3 className="font-sans uppercase tracking-widest text-sm text-secondary mb-4">Summer</h3>
              <p className="font-serif text-xl">Wild berries, cucumber, dill, fresh greens</p>
            </div>
            <div className="border-t border-secondary/50 pt-6">
              <h3 className="font-sans uppercase tracking-widest text-sm text-secondary mb-4">Autumn</h3>
              <p className="font-serif text-xl">Wild mushrooms, pumpkin, hazelnuts, buckwheat</p>
            </div>
            <div className="border-t border-secondary/50 pt-6">
              <h3 className="font-sans uppercase tracking-widest text-sm text-secondary mb-4">Winter</h3>
              <p className="font-serif text-xl">Root vegetables, cabbage, beetroot, dried fruits, warming broths</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Imagery */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={`${import.meta.env.BASE_URL}images/pickles.png`} alt="Pickled vegetables" className="w-full aspect-[4/3] object-cover" />
          <img src={`${import.meta.env.BASE_URL}images/pierogi.png`} alt="Hand-folded pierogi" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 md:px-16 bg-[#F3F0EA]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              <h2 className="text-5xl font-serif text-primary mb-8">The Menu</h2>
              <div className="relative aspect-[3/4] w-full max-w-sm rotate-[-2deg] shadow-2xl">
                <img src={menuImg} alt="Polana Menu" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-16">
            <div>
              <div className="flex justify-between items-baseline mb-4 border-b border-secondary/30 pb-4">
                <h3 className="font-sans uppercase tracking-widest text-secondary font-medium">Chleb</h3>
                <span className="font-sans">4</span>
              </div>
              <p className="font-serif text-xl text-foreground/80">House-baked rye & wheat bread, cultured butter, apple butter</p>
            </div>

            <div>
              <h3 className="font-sans uppercase tracking-widest text-secondary font-medium mb-8 border-b border-secondary/30 pb-4">Na Zaczątek (To Begin)</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Smoked Trout Tartare</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">14</div>
                </div>
                <p className="font-sans font-light text-foreground/70">crème fraîche, dill oil, pickled shallot, rye crisp</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Pierogi Chips</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">12</div>
                </div>
                <p className="font-sans font-light text-foreground/70">crispy potato & cheese pierogi, onion soubise, chives</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Roasted Beet Salad</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">13</div>
                </div>
                <p className="font-sans font-light text-foreground/70">goat cheese, candied walnuts, horseradish vinaigrette, apple</p>
              </div>
            </div>

            <div>
              <h3 className="font-sans uppercase tracking-widest text-secondary font-medium mb-8 border-b border-secondary/30 pb-4">Zupy i Sałatki (Soups & Salads)</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Żurek</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">8</div>
                </div>
                <p className="font-sans font-light text-foreground/70">traditional rye soup, smoked sausage, egg, marjoram</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Summer Cucumber Salad</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">9</div>
                </div>
                <p className="font-sans font-light text-foreground/70">dill, crème fraîche, radish, sunflower seeds</p>
                
                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Kale & Apple Salad</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">10</div>
                </div>
                <p className="font-sans font-light text-foreground/70">kale, shaved apple, pecorino, lemon poppy seed dressing</p>
              </div>
            </div>

            <div>
              <h3 className="font-sans uppercase tracking-widest text-secondary font-medium mb-8 border-b border-secondary/30 pb-4">Dania Główne (Mains)</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Gołąbki 2.0</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">24</div>
                </div>
                <p className="font-sans font-light text-foreground/70">Polish sausage & rice stuffed cabbage, roasted tomato sauce, dill crème fraîche</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Pan-Seared Pork Chop</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">28</div>
                </div>
                <p className="font-sans font-light text-foreground/70">kasha, braised red cabbage, apple mostarda, sauce mielony</p>
                
                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Duck Pierogi</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">22</div>
                </div>
                <p className="font-sans font-light text-foreground/70">confit duck, cherry jus, crispy shallots, black pepper</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Pike Perch</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">27</div>
                </div>
                <p className="font-sans font-light text-foreground/70">celery root purée, brown butter, caper & dill relish</p>

                <div className="flex justify-between items-baseline gap-4">
                  <div className="font-serif text-2xl">Mushroom Paprikash</div>
                  <div className="flex-grow border-b border-dotted border-secondary/50"></div>
                  <div className="font-sans">19</div>
                </div>
                <p className="font-sans font-light text-foreground/70">wild mushrooms, sweet paprika cream, spaetzle, micro herbs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-sans uppercase tracking-widest text-secondary font-medium mb-8 border-b border-secondary/30 pb-4">Dodatki (Sides)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline gap-4">
                    <div className="font-serif text-xl">Sautéed Greens</div>
                    <div className="font-sans">6</div>
                  </div>
                  <div className="flex justify-between items-baseline gap-4">
                    <div className="font-serif text-xl">Kasza (toasted buckwheat)</div>
                    <div className="font-sans">6</div>
                  </div>
                  <div className="flex justify-between items-baseline gap-4">
                    <div className="font-serif text-xl">Braised Red Cabbage</div>
                    <div className="font-sans">6</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-sans uppercase tracking-widest text-secondary font-medium mb-8 border-b border-secondary/30 pb-4">Na Słodko (Dessert)</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="font-serif text-xl">Poppy Seed Cheesecake</div>
                      <div className="font-sans">9</div>
                    </div>
                    <p className="font-sans font-light text-sm text-foreground/70">lemon, blueberry compote</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="font-serif text-xl">Apple & Walnut Strudel</div>
                      <div className="font-sans">9</div>
                    </div>
                    <p className="font-sans font-light text-sm text-foreground/70">crème anglaise</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="font-serif text-xl">Chocolate Babka</div>
                      <div className="font-sans">9</div>
                    </div>
                    <p className="font-sans font-light text-sm text-foreground/70">hazelnut praline, whipped cream</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Soup Image */}
      <section className="w-full h-[60vh]">
        <img src={`${import.meta.env.BASE_URL}images/zurek.png`} alt="Zurek Soup" className="w-full h-full object-cover" />
      </section>

      {/* Footer / Practical Details */}
      <footer id="visit" className="bg-foreground text-background py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif mb-6 text-background">Polana</h2>
            <p className="font-sans font-light opacity-70 max-w-xs">
              Contemporary Central European Cuisine
            </p>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-widest text-sm text-secondary mb-6">Location</h4>
            <p className="font-sans font-light opacity-90 leading-relaxed">
              14 Merchant Row<br/>
              London EC2A 4RN
            </p>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-widest text-sm text-secondary mb-6">Hours</h4>
            <p className="font-sans font-light opacity-90 leading-relaxed">
              Tue–Sat: 12:00–15:00 / 18:00–22:30<br/>
              Sunday: 12:00–16:00<br/>
              Monday: Closed
            </p>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-widest text-sm text-secondary mb-6">Reservations</h4>
            <a href="mailto:reservations@polanabistro.com" className="font-sans font-light opacity-90 hover:opacity-100 hover:text-secondary transition-colors block mb-2">
              reservations@polanabistro.com
            </a>
            <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-foreground rounded-none px-8">
              Book via OpenTable
            </Button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans uppercase tracking-widest text-xs opacity-50">Proudly sourced. Thoughtfully made.</p>
          <p className="font-serif italic text-2xl text-secondary">Dziękujemy — Thank you</p>
          <p className="font-sans uppercase tracking-widest text-xs opacity-50">polanabistro.com</p>
        </div>
      </footer>

    </div>
  );
}
