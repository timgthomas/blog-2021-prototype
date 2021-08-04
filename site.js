let banner = document.querySelector('[role="banner"]')

banner.addEventListener('mouseover', (e) => {
  if (!e.target.matches('[data-tint]')) return
  let tint = e.target.getAttribute('data-tint')
  banner.style.setProperty('--color-accent', `var(--palette-${tint}`)
  banner.style.setProperty('--color-accent-accessible', `var(--palette-${tint}-accessible`)
})

banner.addEventListener('mouseout', () => {
  banner.style.setProperty('--color-accent', null)
  banner.style.setProperty('--color-accent-accessible', null)
})
