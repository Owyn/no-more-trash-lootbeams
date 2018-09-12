const trashIds = [98512, 98521];

module.exports = function trash_lootbeams(d)
{
	d.hook('S_SPAWN_DROPITEM', 6, (event) => {           
		if (trashIds.includes(event.item))
		{
			event.item = 70068;
			return true;
		}
	});
}