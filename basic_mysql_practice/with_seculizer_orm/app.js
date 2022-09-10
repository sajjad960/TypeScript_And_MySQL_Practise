const express = require("express");
const Sequelize = require("sequelize");


const sequelize = new Sequelize('testdb', 'root', 'sajjad960', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define here all model which need to connect with this db

db.sequelize.sync()
    .then(() => {
        console.log("Successfully connected to db.");
    })
    .catch((err) => {
        console.log("Failed to connect db: " + err.message);
    });


    //test creation
    const Plan = sequelize.define("plan",
    {
        title: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        completed: { type: Sequelize.BOOLEAN }
    });

    // Create
    // Plan.create({
    //     title: "safat",
    //     description: "nei@gmail.com",
    //     completed: true,
    
    // }).then((data) => console.log(data)
    // )

    // Read
    // Plan.findAll({where: {title: 'sajjad'}}).then((data) => console.log(data))
    // single find
    // Plan.findOne({id: 1}).then(data => console.log(data));
    // find id use , findByPk

    // Update
    // Plan.update({title: 'chanded'}, {where: {title: 'safat'}}).then(data => console.log(data))

    // Delete
    //   Plan.destroy({where: {title: "chanded"}}).then(data => console.log(data));
    //     console.log();