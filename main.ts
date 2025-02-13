player.onTravelled(WALK, function () {
	
})
player.onChat("run", function () {
    blocks.fill(
    SLIME_BLOCK,
    pos(20, 0, 20),
    pos(20, 0, 20),
    FillOperation.Replace
    )
    mobs.spawn(PIG, pos(0, 0, 0))
})
