import { Hospital, Heart, Truck } from "lucide-react";

const steps = [
  {
    icon: Hospital,
    title: "Hospitals list medicines",
    description: "Hospitals and pharmacies list near-expiry or surplus medicines on our secure platform.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Heart,
    title: "NGOs request medicines",
    description: "Verified NGOs browse and request medicines needed for their communities.",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: Truck,
    title: "Safe delivery",
    description: "Our verified logistics partners ensure safe, temperature-controlled delivery.",
    color: "from-primary-dark to-secondary-dark",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process that turns waste into impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
