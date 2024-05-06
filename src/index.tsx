import ReactDOM from 'react-dom/client'
import Player, { DataVod } from './player'

let data: string | null | undefined = null

let parsedData: null | DataVod = null


const initFunc = () => {

  setTimeout(() => {
    const scriptElement = document.getElementById('asia-tech-script')

    const src = scriptElement?.getAttribute('src')
    console.log("fucking script element src is :", src)

    data = scriptElement?.getAttribute('data-vod')

    if (data) {
      try {
        parsedData = JSON.parse(data) as DataVod
      } catch (error) {
        parsedData = null
      }
    }
  }, 100);
}

const Renderer = () => {
  setTimeout(() => {
    if (parsedData) {
      const keys: Array<string> = Object.keys(parsedData)
      if (keys.length) {
        for (let i = 0; i < keys.length; i++) {
          const parentElement = document.getElementById(keys[i])
          if (parentElement) {
            ReactDOM.createRoot(parentElement).render(<Player url={parsedData[keys[i]]} />)
          }
        }
      }
    }
  }, 150);
}

const playerInit = () => {
  initFunc()
  Renderer()
}

let oldHref = '';
const observeUrlChange = () => {
  const body = document.querySelector("body")
  const observer = new MutationObserver(() => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      playerInit()
    }
  });
  if (body) observer.observe(body, { childList: true, subtree: true });
}

window.onload = observeUrlChange


export default playerInit