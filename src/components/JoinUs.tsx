import { Button } from "@/components/ui/button";
import { Building2, HeartHandshake, ArrowRight } from "lucide-react";

const JoinUs = () => {
  return (
    <section id="join-us" className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join India's leading platform for medicine redistribution with verified CSR impact tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hospital Card */}
          <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-white/80 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">For Hospitals & Pharmacies</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Upload surplus medicines, receive auto-generated CSR reports, and build your credibility score.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Auto-generated CSR & tax reports</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Credibility score tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground">Reduce disposal costs</span>
              </li>
            </ul>

            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl text-white group-hover:scale-105 transition-all rounded-xl text-lg py-6">
              Register as Hospital
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* NGO Card */}
          <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-white/80 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
              <HeartHandshake className="w-8 h-8 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">For NGOs & Charities</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Collect medicines directly from hospitals. Rate packaging quality and support verified impact.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <span className="text-muted-foreground">Direct collection from hospitals</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <span className="text-muted-foreground">Rate packaging quality</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <span className="text-muted-foreground">Verified NGO status</span>
              </li>
            </ul>

            <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-xl text-white group-hover:scale-105 transition-all rounded-xl text-lg py-6">
              Register as NGO
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
