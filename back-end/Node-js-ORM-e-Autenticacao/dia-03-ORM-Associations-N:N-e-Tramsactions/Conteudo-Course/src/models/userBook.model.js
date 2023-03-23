/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const UserBook = sequelize.define(
        'UserBook',
        {},
        {
            timestamps: false,
            underscored: true,
            tableName: 'users_books',
        }
    )
    UserBook.associate = (models) => {

        models.Book.belongsToMany(models.User, {
            as: 'users',
            through: UserBook,
            foreingKey: 'bookId',
            otherKey: 'userId',
        });
        models.User.belongsToMany(models.Book, {
            as: 'books',
            through: UserBook,
            foreingKey: 'userId',
            otherKey: 'bookId',
        })
    }
    return UserBook;
}