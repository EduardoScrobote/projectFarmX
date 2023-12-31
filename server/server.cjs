const Express = require('express');
const app = Express();
const mysql = require('mysql');
const cors = require('cors')
const hash = require('crypto')

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'farmx-db',
})

db.connect((err) => {
    if (err) {
        console.log(err, "aconteceu um erro ao conectar com o banco de dados")
        return;
    }
    console.log('Conexão bem sucedida!')
})

app.get('/', (req, res) => {
    res.send('')
});

app.use(cors())
app.use(Express.json())

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
}

app.get('/register', (req, res) => {
    const { name, email, password } = req.body
    try {
        if (validateEmail(email)) {
            let sql = "INSERT INTO `users` ( name, email, password) VALUES ( ?,?,? )";
            db.query(sql, [name, email, password], (err, result) => {
                if (result.affectedRows > 0) {
                    return res.status(201).json({
                        message: `${name} your account has been created`,
                        verify: true
                    })
                } else {
                    res.status(500).json({
                        message: `Account creation falied`
                    });
                }
            })
        } else {
            return res.status(401).json({
                message: 'Email is not valid'
            })
        }
    } catch { console.log('Internal Server Error') }
});

app.post('/login', (req, res) => {
    const { name, password } = req.body
    let sql = "SELECT * FROM users WHERE name = ?";
    db.query(sql, [name], (err, result) => {
        try {
            const user = result[0]
            if (user.password === password) {
                return res.status(200).json({
                    message: 'Logged in Sucessfully',
                    loggedIn: true,
                })
            } else { return res.status(400).json({ message: 'Invalid Login or Password' }) }
        } catch {
            return res.status(400).json({ message: 'Invalid Login or Password' })
        }
    }
    )
}
)

const today = new Date();

let date = '';
    
const setActDate = () => {
    
    const actMonth = today.getMonth() + 1
    const actDate = today.getDate()
    const actYear = today.getFullYear()
    
    return `${actDate}/${actMonth}/${actYear}`
}

app.post('/buys', (req, res) => {
    const { product, value, desc } = req.body
    date = setActDate();
    let sql = "INSERT INTO buys ( date, product, value, `desc` ) VALUES ( ?, ?, ?, ? )"
    db.query(sql, [date, product, value, desc], (err, result) => {
        try { if (err) {
            console.error("MySQL Error", err.message)
        } else if (result.affectedRows > 0) {
                return res.status(201).json({ message: "Custos adicionados ao banco de dados com sucesso!" })
            } else {
                return res.status(400).json({message: "Tá chegando aqui, else try"})
            }
        } catch {
            return res.status(400).json({ message: 'Ta chegando aqui' })
        }
    })
})

app.get('/buys', (req, res) => {
    let sql = "SELECT * FROM buys";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("MySQL error", err.message);
            return res.status(500).json({message: "Internal Server Error"});
        } else {
            console.log(result)
            return res.status(200).json(result)
        }
    })
})

// response statuns express
// estudar http status

app.listen(3403, () => {
    console.log('Server on!')
});