'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'Java', icon: '/java.jpg' },
  { name: 'C/C++', icon: '/cpp.png' },
  { name: 'Python', icon: '/python.png' },
  { name: 'HTML & CSS', icon: '/htmlcss.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'React', icon: '/react.jpg' },
  { name: 'Next.js', icon: '/nextjs-01.png' },
  { name: 'TypeScript', icon: '/typescript.png' },
  { name: 'Node.js', icon: '/nodejs.png' },
  { name: 'TailwindCSS', icon: '/tailwindcss.png' },
  { name: 'MongoDB', icon: '/mongodb.png' },
  { name: 'AWS', icon: '/aws.png' },
];

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 rounded-xl p-6 flex items-center justify-start gap-3 hover:bg-white/10 transition-colors"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <h3 className="text-white text-md font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
