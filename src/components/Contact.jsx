import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">Feel free to reach out — I’m available for opportunities in cloud security, DevOps, and network engineering.</p>
      <div className="space-y-2">
        <div><strong>Email:</strong> abhishekreddyan@gmail.com</div>
        <div><strong>Portfolio:</strong> <a href="https://anreddy.com" className="text-blue-600">anreddy.com</a></div>
        <div><strong>GitHub:</strong> <a href="https://github.com/AbhishekReddyan" className="text-blue-600">github.com/AbhishekReddyan</a></div>
      </div>
    </motion.div>
  )
}