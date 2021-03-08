module.exports = function (sequelize, DataTypes) {
    var cards = sequelize.define("cards", {
        cardnumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        setname: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        cardyear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });

    cards.associate = function (models) {
        cards.hasMany(models.userscards, {
            onDelete: "cascade",
        });
    }
    return cards;
}