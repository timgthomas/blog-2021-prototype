function highlight(e, highlightType) {
  if (!e.target.matches('[data-section]')) return
  let section = e.target.getAttribute('data-section')
  banner.classList.add(`${highlightType}-${section}`)
}

function unhighlight(e, highlightType) {
  if (!e.target.matches('[data-section]')) return
  let section = e.target.getAttribute('data-section')
  banner.classList.remove(`${highlightType}-${section}`)
}

let banner = document.querySelector('[role="banner"]')

banner.addEventListener('focusin', (e) => highlight(e, 'focus'))
banner.addEventListener('focusout', (e) => unhighlight(e, 'focus'))
banner.addEventListener('mouseover', (e) => highlight(e, 'hover'))
banner.addEventListener('mouseout', (e) => unhighlight(e, 'hover'))
