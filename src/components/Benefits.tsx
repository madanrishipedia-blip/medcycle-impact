import { Leaf, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Reduce Medical Waste",
    description: "Prevent thousands of medicines from ending up in landfills and contributing to environmental pollution.",
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: Award,
    title: "Earn CSR & Tax Benefits",
    description: "Qualify for Corporate Social Responsibility credits and tax deductions while making a difference.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Users,
    title: "Help Communities in Need",
    description: "Provide essential healthcare to underserved communities across India who need it most.",
    gradient: "from-secondary-dark to-primary-dark",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Join MedCycle?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating impact that matters for everyone involved
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
