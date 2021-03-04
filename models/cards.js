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
        cardyear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'created_at',
          },
          updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'updated_at',
          },
    }, {
        freezeTableName: true
    });

    // Item.associate = function(models) {
    //     Item.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return cards;
}