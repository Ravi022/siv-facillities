'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Scroll reveal
    const elements = document.querySelectorAll('.sr')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    elements.forEach(el => io.observe(el))

    // 3D tilt on hover
    const tiltEls = document.querySelectorAll<HTMLElement>('.tilt-card')
    const handleMouseMove = (el: HTMLElement, e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`
    }
    const handleMouseLeave = (el: HTMLElement) => {
      el.style.transform = 'perspective(600px) rotateY(0) rotateX(0) translateZ(0)'
    }

    const listeners: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []
    tiltEls.forEach(el => {
      const move = (e: MouseEvent) => handleMouseMove(el, e)
      const leave = () => handleMouseLeave(el)
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
      listeners.push({ el, move, leave })
    })

    // Orb parallax
    const orb1 = document.querySelector<HTMLElement>('.orb1')
    const orb2 = document.querySelector<HTMLElement>('.orb2')
    const orb3 = document.querySelector<HTMLElement>('.orb3')
    const handleOrbMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      if (orb1) orb1.style.transform = `translate(${x * 40}px, ${y * 30}px) scale(1)`
      if (orb2) orb2.style.transform = `translate(${-x * 30}px, ${-y * 25}px) scale(1)`
      if (orb3) orb3.style.transform = `translate(${x * 20 - 10}px, ${-y * 20 + 10}px) scale(1)`
    }
    document.addEventListener('mousemove', handleOrbMove)

    return () => {
      io.disconnect()
      listeners.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
      document.removeEventListener('mousemove', handleOrbMove)
    }
  }, [])

  return null
}
