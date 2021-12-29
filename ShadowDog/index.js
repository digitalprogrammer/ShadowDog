let playerState = 'idle'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerState = e.target.value
})


const WIDTH = canvas.width = 600
const HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
const staggerFrame = 5
const spriteAnimations = []
const animationsState = 
[
    {
        name: 'idle',
        frames:7
    },
    {
        name:'jump',
        frames:7
    },
    {
        name:'fall',
        frames:7
    },
    {
        name:'run',
        frames:9
    },
    {
        name:'dizzy',
        frames:11
    },
    {
        name:'sit',
        frames:5
    },
    {
        name:'roll',
        frames:7
    },
    {
        name:'bite',
        frames:7
    },
    {
        name:'ko',
        frames:12
    },
    {
        name:'getHit',
        frames:4
    }
]

animationsState.forEach((sprite, index)=>
{
    let frames = {
        location:[]
    }
    for(let i = 0; i < sprite.frames; i++)
    {
        let positionX = i * spriteWidth
        let positionY = index * spriteHeight
        frames.location.push({
            x:positionX, y:positionY
        })
    }
    spriteAnimations[sprite.name] = frames 
})
function animate ()
{
    ctx.clearRect(0,0,WIDTH, HEIGHT)
    let position = Math.floor(gameFrame/staggerFrame) % 
    spriteAnimations[playerState].location.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].location[position].y
    ctx.drawImage(playerImage, 
        frameX, frameY, 
        spriteWidth, spriteHeight, 0, 0,
         spriteWidth, spriteHeight)
         gameFrame++
    requestAnimationFrame(animate)
}
animate()