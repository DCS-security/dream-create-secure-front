import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
      category: "Cloud & AI Security"
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png",
      category: "Cloud Infrastructure"
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/200px-Google_Cloud_logo.svg.png",
      category: "AI/ML Platform"
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/200px-NVIDIA_logo.svg.png",
      category: "AI Computing"
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png",
      category: "Network Security"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
      category: "Enterprise AI Solutions"
    },
    {
      name: "Palo Alto Networks",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Palo_Alto_Networks_logo.svg/200px-Palo_Alto_Networks_logo.svg.png",
      category: "Cybersecurity"
    },
    {
      name: "CrowdStrike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CrowdStrike_logo.svg/200px-CrowdStrike_logo.svg.png",
      category: "Endpoint Security"
    }
  ];

  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-500/5 to-cyber-400/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Strategic Technology Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry-leading cybersecurity, AI, and cloud platforms to deliver enterprise-grade solutions with unmatched reliability.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div key={partner.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4">
                  <div className="mx-2 group flex flex-col items-center space-y-4 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-cyber-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-500/20 h-full">
                    <div className="w-24 h-24 flex items-center justify-center bg-white/95 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} cybersecurity and AI partnership`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground group-hover:text-cyber-400 transition-colors text-lg">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">
                        {partner.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-cyber-400/30 hover:bg-cyber-400/10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-cyber-400/30 hover:bg-cyber-400/10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Partnership Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-cyber-500/10 border border-cyber-500/30 rounded-full px-8 py-4 backdrop-blur-sm">
            <div className="w-3 h-3 bg-cyber-400 rounded-full animate-pulse"></div>
            <span className="text-cyber-400 font-semibold text-lg">
              Certified AI cybersecurity and cloud technology partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;