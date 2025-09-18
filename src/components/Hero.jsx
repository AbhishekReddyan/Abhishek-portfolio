import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold">Abhishek Reddy AN</h1>
      <h2 className="text-2xl text-gray-700">
        <Typewriter
          options={{
            strings: ['Network Security Engineer', 'Cloud Security Enthusiast', 'DevOps Learner'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Building secure, scalable, and resilient cloud solutions.
      </p>

      <div className="flex justify-center space-x-6 mt-6 text-2xl text-gray-700">
        <a href="https://github.com/AbhishekReddyan" target="_blank" rel="noreferrer"><FaGithub className="hover:text-black" /></a>
        <a href="https://linkedin.com/in/abhishekreddyan" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-blue-700" /></a>
        <a href="mailto:abhishekreddyan@gmail.com"><FaEnvelope className="hover:text-red-600" /></a>
      </div>
    </motion.div>
  )
}