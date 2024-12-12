import { Card } from '@/components/ui/card';
import { Clock, DollarSign, FileCheck } from 'lucide-react';

const features = [
  { title: 'Time', text: 'Know processing times and approval timelines', Icon: Clock },
  { title: 'Cost', text: 'Understand all fees and financial requirements', Icon: DollarSign },
  { title: 'Work', text: 'Get a clear list of prerequisites and paperwork', Icon: FileCheck },
];

export function WhatWeDo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Your Business Compliance Navigator
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Karafan helps entrepreneurs and business owners save time and money by providing clear, actionable information
          on licenses, permits, and certifications needed to legally operate their business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, text, Icon }) => (
            <Card key={title} className="p-8 hover:scale-105 transition-transform">
              <Icon className="w-12 h-12 text-[#9381ff] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}