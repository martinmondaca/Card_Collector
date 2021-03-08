module.exports = function (sequelize, DataTypes) {
    var userscards = sequelize.define("userscards", {
    }, {
        freezeTableName: true,
        timestamps: false

    });
    userscards.associate = function (models) {
        userscards.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        }),
            userscards.belongsTo(models.cards, {
                foreignKey: {
                    allowNull: false
                }
            });
    }
    return userscards;
}