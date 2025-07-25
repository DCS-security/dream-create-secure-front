import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      content: "DCS transformed our cybersecurity infrastructure with their AI-powered threat detection solutions. Machine learning algorithms improved our security posture by 95%, delivering enterprise-grade protection.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "DataFlow Inc",
      content: "The custom AI software development solution DCS created exceeded expectations. Their artificial intelligence and machine learning integration boosted operational efficiency by 60%.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Security Director",
      company: "GlobalFinance",
      content: "DCS's cybersecurity consulting and AI-driven threat intelligence has been transformative. Their proactive approach to cyber defense keeps us ahead of emerging threats.",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      position: "IT Director",
      company: "SecureBank",
      content: "Their AI cybersecurity platform provides real-time threat detection and automated incident response. The machine learning models have revolutionized our security operations.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Zhang",
      position: "VP Engineering",
      company: "CloudTech",
      content: "DCS delivered enterprise software development with integrated AI capabilities. Their expertise in artificial intelligence and secure coding practices is exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-500/10 via-transparent to-cyber-400/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI cybersecurity solutions and custom software development have transformed businesses across industries.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="mx-2 h-full group border-border/50 bg-card/80 backdrop-blur-sm hover:border-cyber-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-500/20">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="h-8 w-8 text-cyber-500/40" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-cyber-400 text-cyber-400" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-400 to-cyber-500 flex items-center justify-center text-white font-semibold shadow-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.position} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-cyber-400/30 hover:bg-cyber-400/10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-cyber-400/30 hover:bg-cyber-400/10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;