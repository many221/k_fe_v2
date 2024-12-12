import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileCheck } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Priority access to the platform",
  "Dedicated support during setup",
  "Special founding member pricing",
  "Input into feature development",
];

export function BetaAccess() {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Be Among the First to Simplify Your Business Compliance
        </h2>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Business Name
              </label>
              <Input
                required
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                required
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Type of Business
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                required
                placeholder="City, State"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#9381ff] to-[#b8b8ff] text-white"
            >
              Get Early Access
            </Button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            Your information is secure and will never be shared
          </p>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">What you'll get:</h3>
            <ul className="space-y-2">
              {benefits.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#9381ff]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
