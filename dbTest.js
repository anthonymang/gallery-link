const db = require('./models')

async function createArtist (){
    try{
    const newUser = await db.user.create({
        name: 'Bob Artman',
        email: 'bob@test.com',
        password: 'testpass',
        phone_number: '(555)555-2222',
        city: 'Cleveland',
        state: 'OH',
        bio: 'Impressionist painter from the Cleveland area. I love everything impressionist, from Monet to, um, the others...',
        profilePic: 'https://i.imgur.com/8uJcFxW.jpg'
        })
    }
    catch(err){
        console.log(err)
    }

}

// createArtist()

async function createWorkAddArtist (){
    try{
        const foundArtist = await db.user.findOne({ where: {
          id: 2
        }})
        const newWork = await foundArtist.createWork({
            title: 'Black & White',
            createdDate: 2019,
            description: 'Oil on canvas. A piece that invokes the duality of color - from black to white.',
            imageFile: 'https://i.pinimg.com/originals/60/eb/03/60eb0381bda448701bdd841a11e24845.jpg',
        })
    } catch(err){
        console.log(err)
    }
    
}

// createWorkAddArtist()

async function findWorkWithArtistInfo(){
    const firstWork = await db.work.findOne({where:{
        id: 1,
        
    },
    include: [db.user]
});  
}

findWorkWithArtistInfo()