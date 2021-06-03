const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')
const btnPlay = document.querySelector('#btn-play')
const option = document.querySelector('#option')
const CPU = document.querySelector('#cpu')
const overlay = document.querySelector('#overlay')
const alert = document.querySelector('#alert')
const message = document.querySelector('#message')
const btnRetry = document.querySelector('#btn-retry')
const btnReset = document.querySelector('#btn-reset')
let e

//Close Alert
const closeAlert = () => {
  overlay.classList.remove('overlay-visible')
  alert.classList.remove('alert-visible')
  alert.classList.remove('alert-won')
  alert.classList.remove('alert-tie')
  alert.classList.remove('alert-lost')
  CPU.src = './src/media/icons/interrogationSign.png'
}

const animation = e => {
  if (e == 1) {
    message.innerHTML = 'YOU WON <b>🏆</b>'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
    alert.className += ' alert-won'
  } else if (e == 2) {
    message.innerHTML = 'TIE <b>🤝</b>'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
    alert.className += ' alert-tie'
  } else {
    message.innerHTML = 'YOU LOST <b>😔</b>'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
    alert.className += ' alert-lost'
  }
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const toPlay = op => {
  cpu = random(1, 3)
  console.log(cpu)

  if (cpu == 1) {
    CPU.src = './src/media/icons/rock.png'
  } else if (cpu == 2) {
    CPU.src = './src/media/icons/paper.png'
  } else {
    CPU.src = './src/media/icons/scissor.png'
  }

  if ((op == 1 && cpu == 3) || (op == 2 && cpu == 1) || (op == 3 && cpu == 2)) {
    e = 1
    animation(e)
    console.log(e)
  } else if (
    (op == 1 && cpu == 1) ||
    (op == 2 && cpu == 2) ||
    (op == 3 && cpu == 3)
  ) {
    e = 2
    animation(e)
    console.log(e)
  } else {
    e = 3
    animation(e)
    console.log(e)
  }
}

//dynamic change in the option img
let op = 1
btnRock.addEventListener('click', () => {
  op = 1
  option.src = './src/media/icons/rock.png'
  return option
})
btnPaper.addEventListener('click', () => {
  op = 2
  option.src = './src/media/icons/paper.png'
  return option
})
btnScissor.addEventListener('click', () => {
  op = 3
  option.src = './src/media/icons/scissor.png'
  return option
})

btnPlay.addEventListener('click', () => {
  toPlay(op)
})

btnRetry.addEventListener('click', () => {
  closeAlert()
})

btnReset.addEventListener('click', () => {
  closeAlert()
})
