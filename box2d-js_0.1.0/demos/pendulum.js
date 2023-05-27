demos.pendulum = {};
demos.pendulum.initWorld = function(world) {
	var i;
	var ground = world.GetGroundBody();
	var jointDef = new b2RevoluteJointDef();
	var L = 150;
	for (i = 0; i < 0; i++) {
		jointDef.anchorPoint.Set(250 + 40 * i, 200 - L);
		jointDef.body1 = ground;
		jointDef.body2 = createBall(world, 250 + 40 * i, 200);
		world.CreateJoint(jointDef);
	}
	//jointDef.anchorPoint.Set(250 - 40, 200 - L);
	//jointDef.body1 = ground;
	//jointDef.body2 = createBall(world, 250 - 40 - L, 200 - L);
	//world.CreateJoint(jointDef);
	var sd = new b2BoxDef();
	var bd = new b2BodyDef();
	bd.AddShape(sd);
	sd.density = 1.0;
	sd.friction = 0.5;
	sd.extents.Set(10, 10);

	var i;
	for (i = 0; i < 1; i++) {
		bd.position.Set(500/2-Math.random()*2-1, (20));
		world.CreateBody(bd);
	}
	for (i = 0; i < 8; i++) {
		bd.position.Set(500/2-100-Math.random()*5+i, (250-5-i*22));
		//world.CreateBody(bd);
	}
	for (i = 0; i < 8; i++) {
		bd.position.Set(500/2+100+Math.random()*5-i, (250-5-i*22));
		//world.CreateBody(bd);
	}
}
demos.InitWorlds.push(demos.pendulum.initWorld);


