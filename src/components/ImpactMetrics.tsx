import { useEffect, useState } from "react";
import { Package, Heart, Leaf } from "lucide-react";

const metrics = [
  {
    icon: Package,
    label: "Medicines Donated",
    value: 125000,
    suffix: "+",
    color: "from-primary to-primary-light",
  },
  {
    icon: Heart,
    label: "Lives Impacted",
    value: 50000,
    suffix: "+",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: Leaf,
    label: "Waste Prevented (kg)",
    value: 75000,
    suffix: "+",
    color: "from-primary-dark to-secondary",
  },
];

const ImpactMetrics = () => {
  const [counters, setCounters] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          metrics.forEach((metric, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = metric.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= metric.value) {
                current = metric.value;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('impact-metrics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact-metrics" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Impact So Far</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we're making healthcare more sustainable and accessible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                <metric.icon className="w-10 h-10 text-white" />
              </div>

              {/* Counter */}
              <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}>
                {counters[index].toLocaleString()}{metric.suffix}
              </div>

              {/* Label */}
              <div className="text-lg text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
