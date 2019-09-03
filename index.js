const trashIds = require('./config.json').trashIds;

module.exports = function trash_lootbeams(d)
{
	d.hook('S_SPAWN_DROPITEM', 8, (event) => {           
		if (trashIds.includes(event.item))
		{
			event.item = 70068;
			return true;
		}
	});
}