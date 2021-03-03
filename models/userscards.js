module.exports = function(sequelize, DataTypes) {
    var userscards = sequelize.define("userscards", {
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'created_at',
          },
          updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
            field: 'updated_at',
          },
    }, {
        freezeTableName: true
    });

     userscards.associate = function(models) {
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