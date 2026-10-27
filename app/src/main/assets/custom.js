window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
var hookClick = function (e) {
  var origin = e.target.closest && e.target.closest('a')
  var base = document.querySelector('head base[target="_blank"]')
  if ((origin && origin.href && origin.target === '_blank') || (origin && origin.href && base)) {
    e.preventDefault()
    location.href = origin.href
  }
}
window.open = function (url) { location.href = url }
document.addEventListener('click', hookClick, { capture: true })
