import { TrendingDown, Award, Building2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce medicine wastage & disposal cost",
    description: "Convert expired inventory into social impact while saving on disposal and storage costs.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Award,
    title: "Get verified CSR & tax benefit reports",
    description: "Auto-generated compliance reports for your CSR initiatives and tax documentation.",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: Building2,
    title: "Build hospital reputation with community impact",
    description: "Showcase your CSR credibility score and packaging quality ratings publicly.",
    color: "from-primary-dark to-secondary",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Hospitals Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform compliance into competitive advantage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
