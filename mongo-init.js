db.createUser(
    {
        user: process.env.USER,
        pwd: process.env.USER_PASS,
        roles: [
            {
                role: "readWrite",
                db: process.env.MONGO_INITDB_DATABASE
            }
        ]
    }
);