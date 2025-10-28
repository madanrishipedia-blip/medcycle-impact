import { TrendingUp, Package, Star, FileCheck } from "lucide-react";

const metrics = [
  {
    icon: Package,
    label: "Donations Made",
    value: "2,847",
    subtext: "kg of medicines",
    color: "from-primary to-primary-light",
  },
  {
    icon: TrendingUp,
    label: "Tax Saved",
    value: "₹4.2L",
    subtext: "this fiscal year",
    color: "from-secondary to-secondary-light",
  },
  {
    icon: Star,
    label: "CSR Score",
    value: "94/100",
    subtext: "excellent rating",
    color: "from-primary-dark to-secondary",
  },
  {
    icon: FileCheck,
    label: "NGO Ratings",
    value: "4.8/5.0",
    subtext: "packaging quality",
    color: "from-secondary-dark to-primary",
  },
];

const CSRDashboard = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">CSR Dashboard Preview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your impact, compliance, and reputation in real-time
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <metric.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2 gradient-text">
                    {metric.value}
                  </div>
                  
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Your hospital is in the <span className="font-semibold text-primary">top 10%</span> of contributors nationwide
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    CSR Compliant
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                    Verified Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRDashboard;
