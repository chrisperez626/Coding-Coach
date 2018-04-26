module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		user_name: {
			type: DataTypes.STRING,

			allowNull: false,

			validate: {
				len: [1, 200]
			}

		}
	},{
		timestamps: false
	});

	User.associate = function(models){
		User.hasMany(models.Post, {
			onDelete: "Cascade"
		});
	};
	return User;
}