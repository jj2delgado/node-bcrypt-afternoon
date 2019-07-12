const bcrypt = require('bcryptjs')

modeule.exports = {
    register: async (req, res){
        const { username, password, isAdmin} = req.body
        const db = req.app.get('db')
        const result = await db.get_user(username)
        const exisintgUser = result[0]
        if (existingUser[0]) return res.status(409).send('Username already taken')
        let salt = bcrypt.genSaltSync(10)
        const hash = 
        
    }
}