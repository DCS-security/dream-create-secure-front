import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      content: "DCS transformed our cybersecurity infrastructure with their AI-powered solutions. The threat detection accuracy improved by 95%, and their team's expertise is unmatched.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "DataFlow Inc",
      content: "The custom software solution DCS developed for us exceeded all expectations. Their AI/ML integration boosted our operational efficiency by 60%. Exceptional work!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Security Director",
      company: "GlobalFinance",
      content: "Working with DCS has been a game-changer for our organization. Their proactive approach to cybersecurity and innovative solutions have kept us ahead of threats.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-500/5 via-transparent to-cyber-400/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-cyber-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-cyber-500/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cyber-400 text-cyber-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-400 to-cyber-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;