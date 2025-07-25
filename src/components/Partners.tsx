const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
      category: "Cloud & Security"
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
      category: "Enterprise Solutions"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyber-500/10 to-cyber-400/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-400 to-cyber-500 bg-clip-text text-transparent">
            Trusted Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and maintain the highest standards of excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group flex flex-col items-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-cyber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground group-hover:text-cyber-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-cyber-500/10 border border-cyber-500/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-cyber-400 rounded-full animate-pulse"></div>
            <span className="text-cyber-400 font-medium">
              Certified partners across cloud, security, and AI platforms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;