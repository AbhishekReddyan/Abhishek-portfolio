import React from 'react'
import { motion } from 'framer-motion'

const jobs = [
  {
    title: 'Network Security Engineer',
    org: 'Betsol India Pvt Ltd',
    period: 'Jan 2025 – Present',
    bullets: [
      'Configured EC2, firewalls, routers, and switches across AWS and data centers.',
      'Implemented CI/CD pipelines with GitHub Actions for Kubernetes deployments.',
      'Automated infra provisioning using Terraform + Ansible.'
    ]
  },
  {
    title: 'Associate Network Engineer',
    org: 'Betsol Software India Ltd',
    period: 'Jun 2023 – Jan 2025',
    bullets: [
      'Managed daily operations of critical infrastructure ensuring high availability.',
      'Troubleshot network issues across AWS and data center setups.',
      'Optimized performance and reduced downtime by 20%.'
    ]
  }
]

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="bg-white/70 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.org} • <span>{job.period}</span></p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}