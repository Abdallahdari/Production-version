import React from "react";
import BlogsGrid from "@/app/_com/BlogsGrid";
import Link from "next/link";
import { Award, Badge, Globe, Heart, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
            <div className="container mx-auto xl:max-w-[1400px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge fontVariant="secondary" className="w-fit">
                      Our Story
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                      About
                      <span className="text-primary block">StyleHub</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg">
                      We're passionate about bringing you the finest fashion and
                      lifestyle products from around the world. Our journey
                      began with a simple mission: to make premium style
                      accessible to everyone.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8">
                      Shop Our Collection
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8"
                    >
                      Meet Our Team
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <Image
                      src="/placeholder.svg?height=600&width=500"
                      alt="StyleHub Team"
                      width={500}
                      height={600}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto xl:max-w-[1400px]">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      Our Mission
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      To democratize fashion by curating high-quality, stylish
                      products that empower individuals to express their unique
                      personality while maintaining affordability and
                      sustainability.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become the world's most trusted fashion destination,
                      where style meets substance, and every customer feels
                      confident and beautiful in their choices.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        2018
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Founded
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        50K+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Happy Customers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">25+</div>
                      <div className="text-sm text-muted-foreground">
                        Countries
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        1000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Products
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Our Mission"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 lg:py-24 bg-slate-50">
            <div className="container mx-auto xl:max-w-[1400px]">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These core principles guide everything we do and shape our
                  commitment to you
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Heart className="h-8 w-8" />,
                    title: "Customer First",
                    description:
                      "Every decision we make starts with our customers' needs and satisfaction in mind.",
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    title: "Quality Excellence",
                    description:
                      "We never compromise on quality, ensuring every product meets our high standards.",
                  },
                  {
                    icon: <Globe className="h-8 w-8" />,
                    title: "Sustainability",
                    description:
                      "We're committed to ethical practices and reducing our environmental impact.",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Inclusivity",
                    description:
                      "Fashion is for everyone. We celebrate diversity and promote inclusive style.",
                  },
                ].map((value, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 border-0 shadow-lg"
                  >
                    <CardContent className="space-y-4 p-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story Timeline */}
          <section className="py-16 lg:py-24">
            <div className="container  mx-auto xl:max-w-[1400px]">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From a small startup to a global fashion destination
                </p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    year: "2018",
                    title: "The Beginning",
                    description:
                      "StyleHub was founded with a vision to make premium fashion accessible to everyone. Started with just 50 products and a small team of 3.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    year: "2019",
                    title: "First Milestone",
                    description:
                      "Reached 1,000 customers and expanded our product line to include accessories and home goods. Opened our first warehouse.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    year: "2021",
                    title: "Global Expansion",
                    description:
                      "Launched international shipping to 15 countries. Partnered with sustainable brands and introduced our eco-friendly collection.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    year: "2023",
                    title: "Innovation & Growth",
                    description:
                      "Launched our mobile app, introduced AR try-on features, and reached 50,000+ happy customers worldwide.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="space-y-2">
                        <Badge
                          variant="outline"
                          className="text-primary border-primary"
                        >
                          {milestone.year}
                        </Badge>
                        <h3 className="text-2xl font-bold">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <Image
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 lg:py-24 bg-slate-50">
            <div className="container mx-auto xl:max-w-[1400px]">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Meet Our Team
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The passionate people behind StyleHub who make it all possible
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    role: "Founder & CEO",
                    bio: "Fashion industry veteran with 15+ years of experience. Passionate about sustainable fashion.",
                    image: "/placeholder.svg?height=300&width=250",
                  },
                  {
                    name: "Marcus Johnson",
                    role: "Head of Design",
                    bio: "Award-winning designer who believes in the power of style to transform confidence.",
                    image: "/placeholder.svg?height=300&width=250",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Customer Experience Director",
                    bio: "Dedicated to ensuring every customer has an exceptional experience with StyleHub.",
                    image: "/placeholder.svg?height=300&width=250",
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 shadow-lg"
                  >
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={250}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-primary font-medium">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto xl:max-w-[1400px]">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Why Choose StyleHub?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're more than just a fashion retailer - we're your style
                  partner
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Award className="h-8 w-8" />,
                    title: "Curated Selection",
                    description:
                      "Every product is hand-picked by our expert team for quality, style, and value.",
                  },
                  {
                    icon: <Truck className="h-8 w-8" />,
                    title: "Fast & Free Shipping",
                    description:
                      "Free shipping on orders over $50 with express delivery options available.",
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    title: "Quality Guarantee",
                    description:
                      "30-day return policy and lifetime customer support for peace of mind.",
                  },
                  {
                    icon: <Heart className="h-8 w-8" />,
                    title: "Personal Styling",
                    description:
                      "Free styling advice and personalized recommendations from our experts.",
                  },
                  {
                    icon: <Globe className="h-8 w-8" />,
                    title: "Sustainable Practices",
                    description:
                      "Committed to ethical sourcing and environmentally responsible practices.",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Community Focused",
                    description:
                      "Building a community of style enthusiasts who inspire and support each other.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
            <div className="container text-center  mx-auto xl:max-w-[1400px]">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Discover Your Style?
                </h2>
                <p className="text-lg opacity-90">
                  Join thousands of satisfied customers who have found their
                  perfect style with StyleHub. Start your fashion journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8"
                  >
                    Start Shopping
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
      </div>
    </div>
  );
}
