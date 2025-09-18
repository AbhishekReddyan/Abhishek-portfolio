import React from 'react'
import { motion } from 'framer-motion'

const demos = [
  {
    title: 'Terraform AWS Infra Boilerplate',
    desc: 'Reusable Terraform modules to provision VPC, subnets, security groups, and EKS bootstrap scripts.',
    tags: ['Terraform', 'AWS', 'IaC'],
  },
  {
    title: 'Kubernetes Microservices Demo',
    desc: 'Sample microservices app (frontend + backend) deployed to Kubernetes with Helm charts and manifests.',
    tags: ['Kubernetes', 'Helm'],
  },
  {
    title: 'CI/CD Pipeline with GitHub Actions',
    desc: 'CI pipeline to build Docker images, run tests, and deploy to EKS using GitHub Actions.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker'],
  }
]

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {demos.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="p-6 bg-white/80 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t, idx) => <span key={idx} className="text-xs px-2 py-1 bg-indigo-100 rounded">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}