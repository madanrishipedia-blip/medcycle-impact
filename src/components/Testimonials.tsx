import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MedCycle helped us redistribute over 10,000 medicines that would have been wasted. Now they're saving lives in rural communities.",
    author: "Dr. Priya Sharma",
    role: "Chief Medical Officer",
    organization: "Apollo Hospitals, Mumbai",
    gradient: "from-primary to-primary-light",
  },
  {
    quote: "The platform is incredibly easy to use. We've been able to serve 5,000 more patients thanks to the medicines we received through MedCycle.",
    author: "Rajesh Kumar",
    role: "Director",
    organization: "Seva Foundation NGO",
    gradient: "from-secondary to-secondary-light",
  },
  {
    quote: "A brilliant initiative that aligns with our CSR goals while making real impact. The verification process gives us complete peace of mind.",
    author: "Anita Desai",
    role: "Head of Operations",
    organization: "MedPlus Pharmacy Chain",
    gradient: "from-primary-dark to-secondary",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Voices of Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories from our partners making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-2xl relative">
                {/* Quote icon */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic leading-relaxed mb-6 mt-4">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className={`text-sm font-medium mt-1 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
