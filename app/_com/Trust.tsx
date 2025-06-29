import { Check, Headphones, Shield, Truck } from "lucide-react";
import React from "react";

export default function Trust() {
  return (
    <div className="container mx-auto xl:max-w-[1400px]">
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Dalab?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&quot;re committed to providing you with the best shopping
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Free Shipping",
                description:
                  "Free shipping on orders over $50. Fast and reliable delivery worldwide.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Payment",
                description:
                  "Your payment information is encrypted and secure with our SSL protection.",
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: "24/7 Support",
                description:
                  "Our customer service team is here to help you anytime, anywhere.",
              },
              {
                icon: <Check className="h-8 w-8" />,
                title: "Quality Guarantee",
                description:
                  "30-day return policy. If you're not satisfied, we'll make it right.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
